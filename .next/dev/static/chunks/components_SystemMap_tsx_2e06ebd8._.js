(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SystemMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemMap",
    ()=>SystemMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const nodes = [
    {
        id: "core",
        label: "Core",
        x: 160,
        y: 110
    },
    {
        id: "ops",
        label: "Operations",
        x: 60,
        y: 40
    },
    {
        id: "risk",
        label: "Risk",
        x: 260,
        y: 40
    },
    {
        id: "data",
        label: "Data",
        x: 40,
        y: 180
    },
    {
        id: "security",
        label: "Security",
        x: 280,
        y: 180
    },
    {
        id: "delivery",
        label: "Delivery",
        x: 160,
        y: 220
    }
];
const links = [
    {
        from: "core",
        to: "ops"
    },
    {
        from: "core",
        to: "risk"
    },
    {
        from: "core",
        to: "data"
    },
    {
        from: "core",
        to: "security"
    },
    {
        from: "core",
        to: "delivery"
    },
    {
        from: "ops",
        to: "risk"
    },
    {
        from: "data",
        to: "security"
    }
];
function SystemMap() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isLinked = (nodeId)=>{
        if (!active) return false;
        if (active === nodeId) return true;
        return links.some((link)=>link.from === active && link.to === nodeId || link.to === active && link.from === nodeId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-line/80 bg-soft p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                width: "320",
                height: "260",
                viewBox: "0 0 320 260",
                role: "img",
                "aria-label": "System map connecting operations, risk, data, security, and delivery",
                initial: prefersReducedMotion ? undefined : {
                    opacity: 0,
                    y: 6
                },
                animate: prefersReducedMotion ? undefined : {
                    opacity: 1,
                    y: 0
                },
                transition: prefersReducedMotion ? undefined : {
                    duration: 0.2
                },
                className: "mx-auto",
                children: [
                    links.map((link)=>{
                        const from = nodes.find((node)=>node.id === link.from);
                        const to = nodes.find((node)=>node.id === link.to);
                        if (!from || !to) return null;
                        const highlight = active === from.id || active === to.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: from.x,
                            y1: from.y,
                            x2: to.x,
                            y2: to.y,
                            stroke: highlight ? "#FAFAFA" : "#2B2C30",
                            strokeWidth: 1,
                            opacity: highlight ? 0.8 : 0.45
                        }, `${link.from}-${link.to}`, false, {
                            fileName: "[project]/components/SystemMap.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this);
                    }),
                    nodes.map((node)=>{
                        const isActive = active === node.id;
                        const connected = isLinked(node.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onMouseEnter: ()=>setActive(node.id),
                            onMouseLeave: ()=>setActive(null),
                            onFocus: ()=>setActive(node.id),
                            onBlur: ()=>setActive(null),
                            onKeyDown: (event)=>{
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    setActive(node.id);
                                }
                            },
                            tabIndex: 0,
                            role: "button",
                            "aria-label": `${node.label} node`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: isActive ? 7 : connected ? 6 : 5,
                                    fill: connected ? "#FAFAFA" : "#8B8B8F"
                                }, void 0, false, {
                                    fileName: "[project]/components/SystemMap.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: node.x,
                                    y: node.y + 18,
                                    textAnchor: "middle",
                                    fontSize: "10",
                                    fill: connected ? "#FAFAFA" : "#8B8B8F",
                                    fontFamily: "var(--font-sans)",
                                    children: node.label
                                }, void 0, false, {
                                    fileName: "[project]/components/SystemMap.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, node.id, true, {
                            fileName: "[project]/components/SystemMap.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/SystemMap.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-xs text-muted",
                children: "Each engagement maps mission needs to system dependencies, risk controls, and delivery pathways."
            }, void 0, false, {
                fileName: "[project]/components/SystemMap.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SystemMap.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(SystemMap, "MgJSpXo3LdD2YwjSkL9wpRdUW1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SystemMap;
var _c;
__turbopack_context__.k.register(_c, "SystemMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SystemMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/SystemMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_SystemMap_tsx_2e06ebd8._.js.map