(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/3d/muscle-model-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuscleModel3D",
    ()=>MuscleModel3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$strength$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/strength-calculator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const maleMuscles = [
    // HEAD
    {
        name: "neck",
        displayName: "Neck",
        position: [
            0,
            1.58,
            0
        ],
        scale: [
            0.12,
            0.08,
            0.1
        ],
        geometry: "cylinder",
        view: "both"
    },
    // SHOULDERS & TRAPS
    {
        name: "traps",
        displayName: "Trapezius",
        position: [
            0,
            1.52,
            -0.03
        ],
        scale: [
            0.28,
            0.08,
            0.12
        ],
        geometry: "box",
        view: "back"
    },
    {
        name: "shoulder_left",
        displayName: "Left Deltoid",
        position: [
            -0.24,
            1.38,
            0
        ],
        scale: [
            0.1,
            0.08,
            0.1
        ],
        geometry: "sphere",
        view: "both"
    },
    {
        name: "shoulder_right",
        displayName: "Right Deltoid",
        position: [
            0.24,
            1.38,
            0
        ],
        scale: [
            0.1,
            0.08,
            0.1
        ],
        geometry: "sphere",
        view: "both"
    },
    {
        name: "rear_delts",
        displayName: "Rear Deltoids",
        position: [
            0,
            1.36,
            -0.08
        ],
        scale: [
            0.32,
            0.06,
            0.06
        ],
        geometry: "box",
        view: "back"
    },
    // CHEST
    {
        name: "chest_left",
        displayName: "Left Pec",
        position: [
            -0.1,
            1.28,
            0.08
        ],
        scale: [
            0.12,
            0.08,
            0.06
        ],
        geometry: "sphere",
        view: "front"
    },
    {
        name: "chest_right",
        displayName: "Right Pec",
        position: [
            0.1,
            1.28,
            0.08
        ],
        scale: [
            0.12,
            0.08,
            0.06
        ],
        geometry: "sphere",
        view: "front"
    },
    {
        name: "serratus",
        displayName: "Serratus",
        position: [
            0,
            1.18,
            0.04
        ],
        scale: [
            0.2,
            0.06,
            0.04
        ],
        geometry: "box",
        view: "front"
    },
    // BACK
    {
        name: "lat_left",
        displayName: "Left Lat",
        position: [
            -0.14,
            1.18,
            -0.06
        ],
        scale: [
            0.1,
            0.14,
            0.06
        ],
        geometry: "box",
        view: "back"
    },
    {
        name: "lat_right",
        displayName: "Right Lat",
        position: [
            0.14,
            1.18,
            -0.06
        ],
        scale: [
            0.1,
            0.14,
            0.06
        ],
        geometry: "box",
        view: "back"
    },
    {
        name: "lower_back",
        displayName: "Lower Back",
        position: [
            0,
            1.0,
            -0.06
        ],
        scale: [
            0.16,
            0.12,
            0.06
        ],
        geometry: "box",
        view: "back"
    },
    // ARMS
    {
        name: "bicep_left",
        displayName: "Left Bicep",
        position: [
            -0.28,
            1.22,
            0.02
        ],
        scale: [
            0.055,
            0.1,
            0.055
        ],
        geometry: "capsule",
        view: "front"
    },
    {
        name: "bicep_right",
        displayName: "Right Bicep",
        position: [
            0.28,
            1.22,
            0.02
        ],
        scale: [
            0.055,
            0.1,
            0.055
        ],
        geometry: "capsule",
        view: "front"
    },
    {
        name: "tricep_left",
        displayName: "Left Tricep",
        position: [
            -0.28,
            1.22,
            -0.03
        ],
        scale: [
            0.05,
            0.1,
            0.045
        ],
        geometry: "capsule",
        view: "back"
    },
    {
        name: "tricep_right",
        displayName: "Right Tricep",
        position: [
            0.28,
            1.22,
            -0.03
        ],
        scale: [
            0.05,
            0.1,
            0.045
        ],
        geometry: "capsule",
        view: "back"
    },
    {
        name: "forearm_left",
        displayName: "Left Forearm",
        position: [
            -0.3,
            1.02,
            0
        ],
        scale: [
            0.04,
            0.1,
            0.04
        ],
        geometry: "capsule",
        view: "both"
    },
    {
        name: "forearm_right",
        displayName: "Right Forearm",
        position: [
            0.3,
            1.02,
            0
        ],
        scale: [
            0.04,
            0.1,
            0.04
        ],
        geometry: "capsule",
        view: "both"
    },
    // CORE
    {
        name: "abs",
        displayName: "Abdominals",
        position: [
            0,
            1.06,
            0.06
        ],
        scale: [
            0.12,
            0.14,
            0.04
        ],
        geometry: "box",
        view: "front"
    },
    {
        name: "obliques",
        displayName: "Obliques",
        position: [
            0,
            1.04,
            0.03
        ],
        scale: [
            0.18,
            0.1,
            0.04
        ],
        geometry: "box",
        view: "front"
    },
    // GLUTES
    {
        name: "glute_left",
        displayName: "Left Glute",
        position: [
            -0.1,
            0.88,
            -0.06
        ],
        scale: [
            0.1,
            0.08,
            0.08
        ],
        geometry: "sphere",
        view: "back"
    },
    {
        name: "glute_right",
        displayName: "Right Glute",
        position: [
            0.1,
            0.88,
            -0.06
        ],
        scale: [
            0.1,
            0.08,
            0.08
        ],
        geometry: "sphere",
        view: "back"
    },
    // LEGS - QUADS
    {
        name: "quad_left",
        displayName: "Left Quad",
        position: [
            -0.1,
            0.65,
            0.04
        ],
        scale: [
            0.08,
            0.18,
            0.08
        ],
        geometry: "capsule",
        view: "front"
    },
    {
        name: "quad_right",
        displayName: "Right Quad",
        position: [
            0.1,
            0.65,
            0.04
        ],
        scale: [
            0.08,
            0.18,
            0.08
        ],
        geometry: "capsule",
        view: "front"
    },
    // LEGS - HAMSTRINGS
    {
        name: "hamstring_left",
        displayName: "Left Hamstring",
        position: [
            -0.1,
            0.65,
            -0.04
        ],
        scale: [
            0.07,
            0.16,
            0.06
        ],
        geometry: "capsule",
        view: "back"
    },
    {
        name: "hamstring_right",
        displayName: "Right Hamstring",
        position: [
            0.1,
            0.65,
            -0.04
        ],
        scale: [
            0.07,
            0.16,
            0.06
        ],
        geometry: "capsule",
        view: "back"
    },
    // LEGS - ADDUCTORS
    {
        name: "adductors",
        displayName: "Adductors",
        position: [
            0,
            0.7,
            0
        ],
        scale: [
            0.08,
            0.12,
            0.06
        ],
        geometry: "box",
        view: "front"
    },
    // CALVES
    {
        name: "calf_left",
        displayName: "Left Calf",
        position: [
            -0.1,
            0.35,
            -0.02
        ],
        scale: [
            0.05,
            0.12,
            0.06
        ],
        geometry: "capsule",
        view: "both"
    },
    {
        name: "calf_right",
        displayName: "Right Calf",
        position: [
            0.1,
            0.35,
            -0.02
        ],
        scale: [
            0.05,
            0.12,
            0.06
        ],
        geometry: "capsule",
        view: "both"
    },
    {
        name: "tibialis",
        displayName: "Tibialis",
        position: [
            0,
            0.38,
            0.03
        ],
        scale: [
            0.12,
            0.1,
            0.04
        ],
        geometry: "box",
        view: "front"
    }
];
// Female proportions (adjusted from male)
const femaleMuscles = maleMuscles.map((muscle)=>({
        ...muscle,
        scale: muscle.name.includes("shoulder") || muscle.name.includes("bicep") || muscle.name.includes("tricep") ? [
            muscle.scale[0] * 0.85,
            muscle.scale[1] * 0.9,
            muscle.scale[2] * 0.85
        ] : muscle.name.includes("glute") || muscle.name.includes("quad") || muscle.name.includes("hamstring") ? [
            muscle.scale[0] * 1.1,
            muscle.scale[1],
            muscle.scale[2] * 1.1
        ] : muscle.name.includes("chest") ? [
            muscle.scale[0] * 0.8,
            muscle.scale[1] * 0.7,
            muscle.scale[2] * 0.8
        ] : muscle.scale
    }));
function MusclePart({ mesh, strength, isHovered, onHover, viewSide }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$strength$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strengthLevelColors"][strength];
    const emissive = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$strength$2d$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strengthLevelEmissive"][strength];
    // Only show muscles relevant to current view
    const isVisible = mesh.view === "both" || mesh.view === viewSide;
    // Smooth hover animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MusclePart.useFrame": ()=>{
            if (meshRef.current) {
                const targetScale = isHovered ? 1.08 : 1.0;
                meshRef.current.scale.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](targetScale, targetScale, targetScale), 0.1);
            }
        }
    }["MusclePart.useFrame"]);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MusclePart.useMemo[geometry]": ()=>{
            switch(mesh.geometry){
                case "sphere":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 32, 32);
                case "box":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 1, 1, 4, 4, 4);
                case "capsule":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](1, 1, 8, 16);
                case "cylinder":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1, 1, 1, 16);
                default:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 32, 32);
            }
        }
    }["MusclePart.useMemo[geometry]"], [
        mesh.geometry
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        position: mesh.position,
        scale: mesh.scale,
        rotation: mesh.rotation ? mesh.rotation : undefined,
        geometry: geometry,
        onPointerOver: (e)=>{
            e.stopPropagation();
            onHover(mesh.name);
            document.body.style.cursor = "pointer";
        },
        onPointerOut: ()=>{
            onHover(null);
            document.body.style.cursor = "auto";
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: color,
            emissive: emissive.color,
            emissiveIntensity: isHovered ? emissive.intensity + 0.3 : emissive.intensity,
            roughness: 0.4,
            metalness: 0.1
        }, void 0, false, {
            fileName: "[project]/components/3d/muscle-model-3d.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/3d/muscle-model-3d.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_s(MusclePart, "ttIGD5fXsDC0uzvTU/h8xg6ORzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = MusclePart;
function BodyFrame({ gender }) {
    // Simple body frame/skeleton to give structure
    const frameColor = "#1a1a1a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.15,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.3,
                            0.5,
                            0.18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.85,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.28,
                            0.12,
                            0.16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.1,
                    0.65,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.055,
                            0.25,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.1,
                    0.65,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.055,
                            0.25,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.1,
                    0.32,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.04,
                            0.22,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.1,
                    0.32,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.04,
                            0.22,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.1,
                    0.12,
                    0.03
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.06,
                            0.04,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.1,
                    0.12,
                    0.03
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.06,
                            0.04,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.28,
                    1.22,
                    0
                ],
                rotation: [
                    0,
                    0,
                    0.15
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.035,
                            0.15,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.28,
                    1.22,
                    0
                ],
                rotation: [
                    0,
                    0,
                    -0.15
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.035,
                            0.15,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.3,
                    0.98,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.025,
                            0.15,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.3,
                    0.98,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.025,
                            0.15,
                            8,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.31,
                    0.82,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.03,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.31,
                    0.82,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.03,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.68,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.1,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: frameColor,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/3d/muscle-model-3d.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/3d/muscle-model-3d.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
_c1 = BodyFrame;
function AnatomicalModel({ muscleStrengths, viewSide, onMuscleHover, hoveredMuscle, gender }) {
    _s1();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const muscles = gender === "female" ? femaleMuscles : maleMuscles;
    // Rotate model based on view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AnatomicalModel.useFrame": ()=>{
            if (groupRef.current) {
                const targetRotation = viewSide === "back" ? Math.PI : 0;
                groupRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(groupRef.current.rotation.y, targetRotation, 0.05);
            }
        }
    }["AnatomicalModel.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: [
            0,
            -0.9,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BodyFrame, {
                gender: gender
            }, void 0, false, {
                fileName: "[project]/components/3d/muscle-model-3d.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            muscles.map((mesh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusclePart, {
                    mesh: mesh,
                    strength: muscleStrengths[mesh.name] || "average",
                    isHovered: hoveredMuscle === mesh.name,
                    onHover: onMuscleHover,
                    viewSide: viewSide
                }, mesh.name, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 485,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/3d/muscle-model-3d.tsx",
        lineNumber: 482,
        columnNumber: 5
    }, this);
}
_s1(AnatomicalModel, "6IJMYK8+MXZFwT7izzQ7Jqot7FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = AnatomicalModel;
function CameraController({ resetTrigger }) {
    _s2();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraController.useEffect": ()=>{
            if (controlsRef.current) {
                camera.position.set(0, 0.8, 2.5);
                controlsRef.current.target.set(0, 0.5, 0);
                controlsRef.current.update();
            }
        }
    }["CameraController.useEffect"], [
        resetTrigger,
        camera
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
        ref: controlsRef,
        enablePan: false,
        minDistance: 1.5,
        maxDistance: 4,
        minPolarAngle: Math.PI / 6,
        maxPolarAngle: Math.PI - Math.PI / 6,
        target: [
            0,
            0.5,
            0
        ]
    }, void 0, false, {
        fileName: "[project]/components/3d/muscle-model-3d.tsx",
        lineNumber: 511,
        columnNumber: 5
    }, this);
}
_s2(CameraController, "m9j2utcE9oVWT3EaPXBHx7TO7+8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c3 = CameraController;
function MuscleModel3D({ muscleStrengths, viewSide, onMuscleHover, resetTrigger, gender }) {
    _s3();
    const [hoveredMuscle, setHoveredMuscle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleHover = (muscle)=>{
        setHoveredMuscle(muscle);
        onMuscleHover(muscle);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0.8,
                    2.5
                ],
                fov: 45
            },
            gl: {
                antialias: true,
                alpha: false
            },
            style: {
                background: "#000000"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5,
                    color: "#404040"
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        3,
                        5,
                        4
                    ],
                    intensity: 1,
                    color: "#FFFFFF"
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -3,
                        4,
                        -2
                    ],
                    intensity: 0.6,
                    color: "#FFFFFF"
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 541,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                    args: [
                        "#FFFFFF",
                        "#444444",
                        0.4
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 542,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnatomicalModel, {
                    muscleStrengths: muscleStrengths,
                    viewSide: viewSide,
                    onMuscleHover: handleHover,
                    hoveredMuscle: hoveredMuscle,
                    gender: gender
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                    resetTrigger: resetTrigger
                }, void 0, false, {
                    fileName: "[project]/components/3d/muscle-model-3d.tsx",
                    lineNumber: 552,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/3d/muscle-model-3d.tsx",
            lineNumber: 533,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/3d/muscle-model-3d.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
_s3(MuscleModel3D, "d7+TcTE6DpXlZbMRjuy9MMDNHrU=");
_c4 = MuscleModel3D;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MusclePart");
__turbopack_context__.k.register(_c1, "BodyFrame");
__turbopack_context__.k.register(_c2, "AnatomicalModel");
__turbopack_context__.k.register(_c3, "CameraController");
__turbopack_context__.k.register(_c4, "MuscleModel3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/3d/muscle-model-3d.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/3d/muscle-model-3d.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_3d_muscle-model-3d_tsx_949c0e53._.js.map