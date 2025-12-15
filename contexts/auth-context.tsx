"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  type User as FirebaseUser
} from "firebase/auth"
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  serverTimestamp,
  type Timestamp 
} from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

interface UserProfile {
  name: string
  gender: "male" | "female" | "other"
  weight: number
  height: number
  onboarded: boolean
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

interface StrengthAssessment {
  benchPress: number
  squat: number
  deadlift: number
  shoulderPress: number
  barbellRow: number
  overheadPress: number
  legPress: number
  pullUps: number
  updatedAt?: Timestamp
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  strengthAssessment: StrengthAssessment | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  googleSignIn: () => Promise<void>
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>
  updateStrengthAssessment: (assessment: StrengthAssessment) => Promise<void>
  completeOnboarding: (profile: UserProfile, assessment: StrengthAssessment) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [strengthAssessment, setStrengthAssessment] = useState<StrengthAssessment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Convert Firebase user to app user
  const convertUser = (firebaseUser: FirebaseUser | null): User | null => {
    if (!firebaseUser) return null
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
    }
  }

  // Fetch user profile from Firestore
  const fetchUserProfile = async (userId: string) => {
    try {
      const profileDoc = await getDoc(doc(db, `users/${userId}/profile/data`))
      if (profileDoc.exists()) {
        setProfile(profileDoc.data() as UserProfile)
      }
    } catch (err) {
      console.error("Error fetching profile:", err)
    }
  }

  // Fetch strength assessment from Firestore
  const fetchStrengthAssessment = async (userId: string) => {
    try {
      const assessmentDoc = await getDoc(doc(db, `users/${userId}/strengthAssessment/data`))
      if (assessmentDoc.exists()) {
        setStrengthAssessment(assessmentDoc.data() as StrengthAssessment)
      }
    } catch (err) {
      console.error("Error fetching strength assessment:", err)
    }
  }

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      const appUser = convertUser(firebaseUser)
      setUser(appUser)

      if (appUser) {
        await Promise.all([
          fetchUserProfile(appUser.uid),
          fetchStrengthAssessment(appUser.uid)
        ])
      } else {
        setProfile(null)
        setStrengthAssessment(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const appUser = convertUser(userCredential.user)
      
      if (appUser) {
        await Promise.all([
          fetchUserProfile(appUser.uid),
          fetchStrengthAssessment(appUser.uid)
        ])
        
        // Navigation will be handled by useEffect in protected routes
      }
    } catch (err: any) {
      console.error("Login error:", err)
      setError(err.message || "Failed to login. Please check your credentials.")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signup = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const appUser = convertUser(userCredential.user)
      
      if (appUser) {
        // Profile will be created during onboarding
        router.push("/onboarding")
      }
    } catch (err: any) {
      console.error("Signup error:", err)
      setError(err.message || "Failed to create account. Please try again.")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setProfile(null)
      setStrengthAssessment(null)
      router.push("/")
    } catch (err: any) {
      console.error("Logout error:", err)
      setError(err.message || "Failed to logout.")
    }
  }

  const googleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      const appUser = convertUser(userCredential.user)
      
      if (appUser) {
        await Promise.all([
          fetchUserProfile(appUser.uid),
          fetchStrengthAssessment(appUser.uid)
        ])
        
        // Check if user has completed onboarding
        const profileDoc = await getDoc(doc(db, `users/${appUser.uid}/profile/data`))
        if (!profileDoc.exists() || !profileDoc.data()?.onboarded) {
          router.push("/onboarding")
        } else {
          router.push("/dashboard")
        }
      }
    } catch (err: any) {
      console.error("Google sign-in error:", err)
      setError(err.message || "Failed to sign in with Google.")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (newProfile: Partial<UserProfile>) => {
    if (!user) return

    try {
      const profileRef = doc(db, `users/${user.uid}/profile/data`)
      const updates = {
        ...newProfile,
        updatedAt: serverTimestamp()
      }
      
      await updateDoc(profileRef, updates)
      
      // Update local state
      setProfile(prev => prev ? { ...prev, ...newProfile } : null)
    } catch (err: any) {
      console.error("Error updating profile:", err)
      setError(err.message || "Failed to update profile.")
      throw err
    }
  }

  const updateStrengthAssessment = async (assessment: StrengthAssessment) => {
    if (!user) return

    try {
      const assessmentRef = doc(db, `users/${user.uid}/strengthAssessment/data`)
      const data = {
        ...assessment,
        updatedAt: serverTimestamp()
      }
      
      await setDoc(assessmentRef, data)
      setStrengthAssessment(assessment)
    } catch (err: any) {
      console.error("Error updating strength assessment:", err)
      setError(err.message || "Failed to update strength assessment.")
      throw err
    }
  }

  const completeOnboarding = async (newProfile: UserProfile, assessment: StrengthAssessment) => {
    if (!user) return

    try {
      const profileRef = doc(db, `users/${user.uid}/profile/data`)
      const assessmentRef = doc(db, `users/${user.uid}/strengthAssessment/data`)

      const profileData = {
        ...newProfile,
        onboarded: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }

      const assessmentData = {
        ...assessment,
        updatedAt: serverTimestamp()
      }

      // Save both documents
      await Promise.all([
        setDoc(profileRef, profileData),
        setDoc(assessmentRef, assessmentData)
      ])

      setProfile(newProfile)
      setStrengthAssessment(assessment)
      
      router.push("/dashboard")
    } catch (err: any) {
      console.error("Error completing onboarding:", err)
      setError(err.message || "Failed to complete onboarding.")
      throw err
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        strengthAssessment,
        loading,
        error,
        login,
        signup,
        logout,
        googleSignIn,
        updateProfile,
        updateStrengthAssessment,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}