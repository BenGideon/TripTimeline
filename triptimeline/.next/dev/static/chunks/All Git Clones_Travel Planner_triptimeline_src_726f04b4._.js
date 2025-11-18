(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DashboardHeader({ user }) {
    _s();
    const { signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSignOut = async ()=>{
        await signOut();
    };
    const userInitials = user.user_metadata?.display_name ? user.user_metadata.display_name.split(" ").map((n)=>n[0]).join("").toUpperCase() : user.email?.charAt(0).toUpperCase() || "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-[#E4E4DE] border-b border-[#C4C5BA] sticky top-0 z-50 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/dashboard",
                        className: "flex items-center hover:opacity-80 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-[#595f39] cursor-pointer tracking-wide",
                                children: "✈️ TripTimeline"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/dashboard",
                            className: "text-[#1B1B1B] hover:text-[#595f39] px-3 py-2 rounded-md text-sm font-medium transition-colors tracking-wide",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUserMenu(!showUserMenu),
                                className: "flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#595f39] focus:ring-offset-2 hover:bg-[#C4C5BA]/50 p-1 transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-[#595f39] rounded-md flex items-center justify-center text-[#E4E4DE] font-semibold",
                                        children: userInitials
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-[#1B1B1B]",
                                                children: user.user_metadata?.display_name || "User"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#C4C5BA]",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-4 h-4 text-[#595f39] transition-transform ${showUserMenu ? "rotate-180" : ""}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-56 bg-[#E4E4DE] rounded-sm shadow-lg border border-[#C4C5BA] py-2 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-b border-[#C4C5BA]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-[#1B1B1B]",
                                                children: user.user_metadata?.display_name || "User"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#595f39] truncate",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/dashboard/profile",
                                            className: "flex items-center px-4 py-2 text-sm text-[#1B1B1B] hover:bg-[#C4C5BA]/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-3 text-[#595f39]",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                "Profile Settings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-[#C4C5BA] py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "flex items-center w-full px-4 py-2 text-sm text-[#1B1B1B] hover:bg-[#C4C5BA]/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-3",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(DashboardHeader, "SpgI1O5nUYwzNPbv+9HliynSF80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function MediaCarousel({ media, dayIndex, currentIndex, onIndexChange, onDelete }) {
    _s();
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!media || media.length === 0) {
        return null;
    }
    const currentMedia = media[currentIndex || 0];
    const totalMedia = media.length;
    const handlePrevious = ()=>{
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalMedia - 1;
        onIndexChange(dayIndex, newIndex);
    };
    const handleNext = ()=>{
        const newIndex = currentIndex < totalMedia - 1 ? currentIndex + 1 : 0;
        onIndexChange(dayIndex, newIndex);
    };
    const handleTouchStart = (e)=>{
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = (e)=>{
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };
    const handleSwipe = ()=>{
        if (touchStart - touchEnd > 50) {
            handleNext();
        }
        if (touchEnd - touchStart > 50) {
            handlePrevious();
        }
    };
    const handleDelete = async ()=>{
        if (!onDelete || !currentMedia) return;
        if (confirm('Delete this photo/video?')) {
            setIsDeleting(true);
            try {
                await onDelete(currentMedia.id);
            } catch (error) {
                console.error('Error deleting media:', error);
                alert('Failed to delete media');
            } finally{
                setIsDeleting(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full bg-gray-900 rounded-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-video bg-black",
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                children: [
                    currentMedia.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentMedia.url,
                        alt: currentMedia.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: currentMedia.url,
                        className: "w-full h-full object-cover",
                        controls: true
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrevious,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium",
                        children: [
                            currentIndex + 1,
                            " / ",
                            totalMedia
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDelete,
                        disabled: isDeleting,
                        className: "absolute top-4 left-4 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full transition-all z-10 disabled:opacity-50",
                        title: "Delete this photo/video",
                        children: "🗑️"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            totalMedia > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 p-3 bg-gray-800 overflow-x-auto",
                children: media.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onIndexChange(dayIndex, index),
                        className: `flex-shrink-0 w-12 h-12 rounded-md overflow-hidden transition-all ${index === currentIndex ? 'ring-2 ring-white opacity-100' : 'opacity-60 hover:opacity-80'}`,
                        children: item.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.url,
                            alt: item.title,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                            lineNumber: 145,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gray-700 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xl",
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                                lineNumber: 152,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                            lineNumber: 151,
                            columnNumber: 17
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(MediaCarousel, "YMI4bRvXyU4WwJk6Bnk+uMT0x90=");
_c = MediaCarousel;
var _c;
__turbopack_context__.k.register(_c, "MediaCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerticalItinerary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$MediaCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/MediaCarousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VerticalItinerary({ itinerary, tripId, onAddActivity, onEditActivity, onDeleteActivity, onSaveNotes, onSaveExpense, onUpdateDay, onAddDay, onDeleteDay }) {
    _s();
    const [expandedDays, setExpandedDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        0
    ])); // First day expanded by default
    const [editingDay, setEditingDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityModal, setActivityModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activityTitle, setActivityTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityTime, setActivityTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityCategory, setActivityCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sightseeing");
    const [activityType, setActivityType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("morning");
    const [activityLocation, setActivityLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityDescription, setActivityDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activityCost, setActivityCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notesModal, setNotesModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notesValue, setNotesValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expenseModal, setExpenseModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expenseTitle, setExpenseTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expenseAmount, setExpenseAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expenseCategory, setExpenseCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("food");
    const [isActivitySaving, setIsActivitySaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNotesSaving, setIsNotesSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExpenseSaving, setIsExpenseSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedDayIndex, setDraggedDayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverDayIndex, setDragOverDayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mediaUploadDayIndex, setMediaUploadDayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMediaUploading, setIsMediaUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dayMedia, setDayMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentMediaIndex, setCurrentMediaIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Load media for all days on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerticalItinerary.useEffect": ()=>{
            const loadAllMedia = {
                "VerticalItinerary.useEffect.loadAllMedia": async ()=>{
                    if (!tripId || itinerary.length === 0) return;
                    try {
                        const { getMediaForDay } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                        const mediaMap = {};
                        for(let dayIndex = 0; dayIndex < itinerary.length; dayIndex++){
                            const media = await getMediaForDay(tripId, dayIndex + 1);
                            mediaMap[dayIndex] = media;
                        }
                        setDayMedia(mediaMap);
                    } catch (error) {
                    // Error loading media
                    }
                }
            }["VerticalItinerary.useEffect.loadAllMedia"];
            loadAllMedia();
        }
    }["VerticalItinerary.useEffect"], [
        tripId,
        itinerary.length
    ]);
    const resetActivityForm = ()=>{
        setActivityTitle("");
        setActivityTime("");
        setActivityCategory("sightseeing");
        setActivityType("morning");
        setActivityLocation("");
        setActivityDescription("");
        setActivityCost("");
        setIsActivitySaving(false);
    };
    const openActivityModal = (dayIndex, activity)=>{
        setIsActivitySaving(false);
        if (activity) {
            setActivityModal({
                dayIndex,
                activity
            });
            setActivityTitle(activity.title);
            setActivityTime(activity.time || "");
            setActivityCategory(activity.category);
            setActivityType(activity.type || "morning");
            setActivityLocation(activity.location || "");
            setActivityDescription(activity.description || "");
            setActivityCost(activity.cost !== undefined && activity.cost !== null ? String(activity.cost) : "");
        } else {
            resetActivityForm();
            setActivityModal({
                dayIndex
            });
        }
    };
    const closeActivityModal = ()=>{
        setActivityModal(null);
        resetActivityForm();
    };
    const handleSubmitActivity = async ()=>{
        if (!activityModal || activityTitle.trim() === "") return;
        const trimmedTitle = activityTitle.trim();
        const trimmedTime = activityTime.trim();
        const costValue = activityCost.trim() === "" ? undefined : Number(activityCost);
        const safeCost = costValue !== undefined && !Number.isNaN(costValue) ? costValue : undefined;
        const payload = {
            title: trimmedTitle,
            time: trimmedTime,
            type: activityType,
            category: activityCategory,
            description: activityDescription.trim() || undefined,
            location: activityLocation.trim() || undefined,
            cost: safeCost
        };
        setIsActivitySaving(true);
        try {
            if (activityModal.activity) {
                await onEditActivity(activityModal.dayIndex, activityModal.activity.id, payload);
            } else {
                await onAddActivity(activityModal.dayIndex, payload);
            }
            closeActivityModal();
        } catch (error) {
        // Error saving activity
        } finally{
            setIsActivitySaving(false);
        }
    };
    const handleDeleteActivity = async (dayIndex, activityId)=>{
        const confirmDelete = window.confirm("Delete this activity?");
        if (!confirmDelete) return;
        try {
            await onDeleteActivity(dayIndex, activityId);
        } catch (error) {
        // Error deleting activity
        }
    };
    const openNotesModal = (dayIndex)=>{
        setNotesModal({
            dayIndex
        });
        setNotesValue(itinerary[dayIndex]?.notes || "");
    };
    const closeNotesModal = ()=>{
        setNotesModal(null);
        setNotesValue("");
    };
    const handleSaveNotes = async ()=>{
        if (!notesModal) return;
        setIsNotesSaving(true);
        try {
            if (onSaveNotes) {
                await onSaveNotes(notesModal.dayIndex, notesValue);
            } else if (onUpdateDay) {
                await onUpdateDay(notesModal.dayIndex, {
                    notes: notesValue
                });
            }
            closeNotesModal();
        } catch (error) {
        // Error saving notes
        } finally{
            setIsNotesSaving(false);
        }
    };
    const openExpenseModal = (dayIndex)=>{
        setExpenseModal({
            dayIndex
        });
        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseCategory("food");
    };
    const closeExpenseModal = ()=>{
        setExpenseModal(null);
        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseCategory("food");
    };
    const handleSaveExpense = async ()=>{
        if (!expenseModal || !expenseTitle.trim() || !expenseAmount.trim()) return;
        setIsExpenseSaving(true);
        try {
            const amount = parseFloat(expenseAmount);
            if (isNaN(amount) || amount < 0) {
                return;
            }
            if (onSaveExpense) {
                await onSaveExpense(expenseModal.dayIndex, {
                    title: expenseTitle.trim(),
                    amount,
                    category: expenseCategory,
                    currency: "USD",
                    date: new Date().toISOString().split("T")[0]
                });
            }
            closeExpenseModal();
        } catch (error) {
        // Error saving expense
        } finally{
            setIsExpenseSaving(false);
        }
    };
    const handleMediaUpload = async (dayIndex, file)=>{
        if (!tripId) {
            return;
        }
        setIsMediaUploading(true);
        try {
            const { uploadMedia, getMediaForDay } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
            const mediaType = file.type.startsWith("video") ? "video" : "image";
            await uploadMedia(tripId, dayIndex + 1, file, mediaType, file.name);
            const media = await getMediaForDay(tripId, dayIndex + 1);
            setDayMedia((prev)=>({
                    ...prev,
                    [dayIndex]: media
                }));
        } catch (error) {
        // Error uploading media
        } finally{
            setIsMediaUploading(false);
        }
    };
    const toggleDay = (dayIndex)=>{
        const newExpanded = new Set(expandedDays);
        if (newExpanded.has(dayIndex)) {
            newExpanded.delete(dayIndex);
        } else {
            newExpanded.add(dayIndex);
        }
        setExpandedDays(newExpanded);
    };
    const handleDragStart = (dayIndex)=>{
        setDraggedDayIndex(dayIndex);
    };
    const handleDragOver = (e, dayIndex)=>{
        e.preventDefault();
        setDragOverDayIndex(dayIndex);
    };
    const handleDragLeave = ()=>{
        setDragOverDayIndex(null);
    };
    const handleDrop = async (e, dropIndex)=>{
        e.preventDefault();
        setDragOverDayIndex(null);
        if (draggedDayIndex === null || draggedDayIndex === dropIndex) {
            return;
        }
        const newItinerary = [
            ...itinerary
        ];
        const draggedDay = newItinerary[draggedDayIndex];
        newItinerary.splice(draggedDayIndex, 1);
        newItinerary.splice(dropIndex, 0, draggedDay);
        const renumberedItinerary = newItinerary.map((day, index)=>({
                ...day,
                day: index + 1
            }));
        if (onUpdateDay) {
            for(let i = 0; i < renumberedItinerary.length; i++){
                const day = renumberedItinerary[i];
                if (day.day !== itinerary[i].day) {
                    await onUpdateDay(i, {
                        day: day.day
                    });
                }
            }
        }
        setDraggedDayIndex(null);
    };
    const getDayTitle = (day)=>{
        // Use custom title if set, otherwise generate dynamic titles
        if (day.customTitle) {
            return day.customTitle;
        }
        if (day.activities.length > 0) {
            const mainActivity = day.activities[0];
            return mainActivity.location || mainActivity.title;
        }
        return `Day ${day.day}`;
    };
    const getDayDescription = (day)=>{
        // Show day notes if they exist, otherwise show default message
        return day.notes || "Explore and enjoy your day!";
    };
    const getActivityTypeIcon = (type)=>{
        switch(type){
            case "transport":
                return "✈️";
            case "accommodation":
                return "🏨";
            case "sightseeing":
                return "🗾";
            case "food":
                return "🍜";
            case "shopping":
                return "🛍️";
            case "entertainment":
                return "🎭";
            default:
                return "📍";
        }
    };
    const getCategoryColor = (category)=>{
        switch(category){
            case "transport":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "accommodation":
                return "bg-purple-100 text-purple-800 border-purple-200";
            case "sightseeing":
                return "bg-green-100 text-green-800 border-green-200";
            case "food":
                return "bg-orange-100 text-orange-800 border-orange-200";
            case "shopping":
                return "bg-pink-100 text-pink-800 border-pink-200";
            case "entertainment":
                return "bg-indigo-100 text-indigo-800 border-indigo-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    const startEditingDay = (dayIndex, field, currentValue)=>{
        setEditingDay({
            dayIndex,
            field
        });
        setEditValue(currentValue);
    };
    const saveEditingDay = ()=>{
        if (editingDay && onUpdateDay) {
            if (editingDay.field === "title") {
                // Update the day's custom title
                onUpdateDay(editingDay.dayIndex, {
                    customTitle: editValue
                });
            } else if (editingDay.field === "notes") {
                onUpdateDay(editingDay.dayIndex, {
                    notes: editValue
                });
            }
        }
        setEditingDay(null);
        setEditValue("");
    };
    const cancelEditingDay = ()=>{
        setEditingDay(null);
        setEditValue("");
    };
    // Show empty state if no days exist
    if (itinerary.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl",
                            children: "📅"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Start Planning Your Journey!"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-8 max-w-md mx-auto",
                        children: "Create your first day to begin building your amazing itinerary. Add activities, plan your schedule, and make memories!"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this),
                    onAddDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddDay,
                        className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                        children: "✨ Add Your First Day"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 456,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
            lineNumber: 443,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 rounded-full shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: itinerary.map((day, dayIndex)=>{
                            const isExpanded = expandedDays.has(dayIndex);
                            const isLast = dayIndex === itinerary.length - 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-6 w-5 h-5 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10 hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            draggable: true,
                                            onDragStart: ()=>handleDragStart(dayIndex),
                                            onDragOver: (e)=>handleDragOver(e, dayIndex),
                                            onDragLeave: handleDragLeave,
                                            onDrop: (e)=>handleDrop(e, dayIndex),
                                            className: `bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-move ${draggedDayIndex === dayIndex ? "opacity-50" : ""} ${dragOverDayIndex === dayIndex && draggedDayIndex !== dayIndex ? "border-purple-500 border-2 bg-purple-50" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 cursor-pointer hover:bg-gray-50/50 transition-colors",
                                                    onClick: ()=>toggleDay(dayIndex),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg",
                                                                            children: day.day
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 510,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                editingDay?.dayIndex === dayIndex && editingDay?.field === "title" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center space-x-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            value: editValue,
                                                                                            onChange: (e)=>setEditValue(e.target.value),
                                                                                            onKeyDown: (e)=>{
                                                                                                if (e.key === "Enter") saveEditingDay();
                                                                                                if (e.key === "Escape") cancelEditingDay();
                                                                                            },
                                                                                            className: "text-xl font-bold text-gray-900 bg-white border border-purple-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                                                                                            autoFocus: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 517,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: saveEditingDay,
                                                                                            className: "text-green-600 hover:text-green-700 p-1",
                                                                                            children: "✓"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 528,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: cancelEditingDay,
                                                                                            className: "text-red-600 hover:text-red-700 p-1",
                                                                                            children: "✕"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-xl font-bold text-gray-900 flex items-center cursor-pointer hover:text-purple-600 transition-colors group",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        const currentTitle = getDayTitle(day);
                                                                                        startEditingDay(dayIndex, "title", currentTitle);
                                                                                    },
                                                                                    children: [
                                                                                        "📍 ",
                                                                                        getDayTitle(day),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "ml-2 opacity-0 group-hover:opacity-100 text-sm text-purple-500 transition-opacity",
                                                                                            children: "✏️"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 555,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 542,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-gray-600 text-sm",
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(day.date), "EEEE, MMMM d, yyyy")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 560,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 513,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full",
                                                                                    children: [
                                                                                        day.activities.length,
                                                                                        " ",
                                                                                        day.activities.length === 1 ? "Activity" : "Activities"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 569,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                day.accommodation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full",
                                                                                    children: "🏨 Hotel"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 576,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                onDeleteDay && itinerary.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        if (window.confirm(`Are you sure you want to delete ${getDayTitle(day)}?`)) {
                                                                                            onDeleteDay(dayIndex);
                                                                                        }
                                                                                    },
                                                                                    className: "p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors",
                                                                                    title: "Delete Day",
                                                                                    children: "🗑️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 582,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 568,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: `w-6 h-6 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`,
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M19 9l-7 7-7-7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 604,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: editingDay?.dayIndex === dayIndex && editingDay?.field === "notes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: editValue,
                                                                        onChange: (e)=>setEditValue(e.target.value),
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === "Enter" && e.ctrlKey) saveEditingDay();
                                                                            if (e.key === "Escape") cancelEditingDay();
                                                                        },
                                                                        className: "flex-1 px-3 py-2 text-gray-700 bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                                                        rows: 2,
                                                                        autoFocus: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 627,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex space-x-1 pt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: saveEditingDay,
                                                                                className: "text-green-600 hover:text-green-700 p-1",
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 640,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: cancelEditingDay,
                                                                                className: "text-red-600 hover:text-red-700 p-1",
                                                                                children: "✕"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 646,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                lineNumber: 626,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 leading-relaxed cursor-pointer hover:text-purple-600 transition-colors group",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    startEditingDay(dayIndex, "notes", getDayDescription(day));
                                                                },
                                                                children: [
                                                                    getDayDescription(day),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-2 opacity-0 group-hover:opacity-100 text-sm text-purple-500 transition-opacity",
                                                                        children: "✏️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 667,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this),
                                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-gray-100",
                                                    children: [
                                                        dayMedia[dayIndex] && dayMedia[dayIndex].length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 bg-gray-900 border-b border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$MediaCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                media: dayMedia[dayIndex],
                                                                dayIndex: dayIndex,
                                                                currentIndex: currentMediaIndex[dayIndex] || 0,
                                                                onIndexChange: (idx, mediaIdx)=>{
                                                                    setCurrentMediaIndex((prev)=>({
                                                                            ...prev,
                                                                            [idx]: mediaIdx
                                                                        }));
                                                                },
                                                                onDelete: async (mediaId)=>{
                                                                    try {
                                                                        const { deleteMedia } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                                                        await deleteMedia(mediaId);
                                                                        setDayMedia((prev)=>({
                                                                                ...prev,
                                                                                [dayIndex]: prev[dayIndex].filter((m)=>m.id !== mediaId)
                                                                            }));
                                                                        setCurrentMediaIndex((prev)=>({
                                                                                ...prev,
                                                                                [dayIndex]: 0
                                                                            }));
                                                                    } catch (error) {
                                                                        throw error;
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-64 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-black/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 715,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-6xl mb-4",
                                                                                children: "🗾"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 718,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-2xl font-bold",
                                                                                children: [
                                                                                    "Day ",
                                                                                    day.day,
                                                                                    " Adventure"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 719,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 717,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 27
                                                        }, this),
                                                        day.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 bg-blue-50 border-b border-blue-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-semibold text-gray-900 mb-2 flex items-center",
                                                                    children: "📝 Day Notes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm leading-relaxed whitespace-pre-wrap",
                                                                    children: day.notes
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 729,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-100 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-2xl",
                                                                                children: "📸"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium text-gray-700",
                                                                                children: "Upload Photo or Video"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 744,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 742,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*,video/*",
                                                                        multiple: true,
                                                                        className: "hidden",
                                                                        onChange: (e)=>{
                                                                            if (e.target.files) {
                                                                                Array.from(e.target.files).forEach((file)=>{
                                                                                    handleMediaUpload(dayIndex, file);
                                                                                });
                                                                            }
                                                                        },
                                                                        disabled: isMediaUploading
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 740,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 space-y-6",
                                                            children: [
                                                                day.activities.length > 0 ? day.activities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between mb-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center space-x-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-2xl",
                                                                                                children: getActivityTypeIcon(activity.category)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 775,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                        className: "font-semibold text-gray-900",
                                                                                                        children: activity.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                        lineNumber: 779,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-sm text-gray-600",
                                                                                                        children: activity.time
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                        lineNumber: 782,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 778,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                        lineNumber: 774,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center space-x-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(activity.category)}`,
                                                                                                children: activity.category
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 788,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            activity.cost !== undefined && activity.cost !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    activity.cost
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 797,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>openActivityModal(dayIndex, activity),
                                                                                                className: "p-2 text-purple-500 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors",
                                                                                                title: "Edit Activity",
                                                                                                children: "✏️"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 801,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleDeleteActivity(dayIndex, activity.id),
                                                                                                className: "p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors",
                                                                                                title: "Delete Activity",
                                                                                                children: "🗑️"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 810,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                        lineNumber: 787,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 773,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            activity.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-700 text-sm leading-relaxed mb-3",
                                                                                children: activity.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 826,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            activity.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center text-sm text-gray-600",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "w-4 h-4 mr-1",
                                                                                        fill: "none",
                                                                                        stroke: "currentColor",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 839,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                                lineNumber: 845,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                        lineNumber: 833,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    activity.location
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                lineNumber: 832,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, activity.id, true, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 31
                                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center py-8 border-2 border-dashed border-gray-300 rounded-xl",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-4xl mb-4",
                                                                            children: "📝"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 859,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: "No activities planned"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 860,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-600 text-sm mb-4",
                                                                            children: "Add activities to make the most of this day"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 863,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openActivityModal(dayIndex),
                                                                            className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200",
                                                                            children: "+ Add Activity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 866,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 858,
                                                                    columnNumber: 29
                                                                }, this),
                                                                day.accommodation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-purple-50 border border-purple-200 rounded-xl p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "font-semibold text-gray-900 mb-2 flex items-center",
                                                                            children: "🏨 Accommodation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 878,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: day.accommodation.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 882,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: day.accommodation.address
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 885,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center space-x-4 text-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-gray-600",
                                                                                            children: [
                                                                                                "Check-in:",
                                                                                                " ",
                                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(day.accommodation.checkIn), "MMM d")
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 889,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-gray-600",
                                                                                            children: [
                                                                                                "Check-out:",
                                                                                                " ",
                                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(day.accommodation.checkOut), "MMM d")
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 896,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-green-600 font-medium",
                                                                                            children: [
                                                                                                "$",
                                                                                                day.accommodation.cost
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                            lineNumber: 903,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 888,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 881,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 877,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-3 gap-4 pt-4 border-t border-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-lg font-bold text-purple-600",
                                                                                    children: [
                                                                                        "$",
                                                                                        day.actualSpent || 0
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 914,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600",
                                                                                    children: "Spent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 917,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-lg font-bold text-blue-600",
                                                                                    children: [
                                                                                        day.activities.reduce((sum, activity)=>sum + (activity.duration || 0), 0),
                                                                                        "m"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600",
                                                                                    children: "Duration"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 928,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-lg font-bold text-green-600",
                                                                                    children: [
                                                                                        day.activities.filter((activity)=>activity.completed).length,
                                                                                        "/",
                                                                                        day.activities.length
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 933,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600",
                                                                                    children: "Complete"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 932,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 912,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex space-x-3 pt-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openActivityModal(dayIndex),
                                                                            className: "flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200",
                                                                            children: "+ Add Activity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 949,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openNotesModal(dayIndex),
                                                                            className: "flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors",
                                                                            children: "📝 Add Notes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 955,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openExpenseModal(dayIndex),
                                                                            className: "flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-xl font-medium hover:bg-green-200 transition-colors",
                                                                            children: "💰 Add Expense"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                            lineNumber: 961,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, dayIndex, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    onAddDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ml-20 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[-52px] w-5 h-5 bg-purple-500 border-4 border-white rounded-full shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                lineNumber: 981,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: "➕"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 984,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900 mb-2",
                                            children: "Add Another Day"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 985,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: "Continue your adventure with more activities!"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 988,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onAddDay,
                                            className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                            children: [
                                                "+ Add Day ",
                                                itinerary.length + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 991,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 983,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                lineNumber: 982,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 980,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ml-20 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[-52px] w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                lineNumber: 1004,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: "🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Journey Complete!"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1008,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-100",
                                            children: "What an amazing adventure you've had!"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1009,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                lineNumber: 1005,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                        lineNumber: 1003,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this),
            activityModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: [
                                        activityModal.activity ? "Edit Activity" : "Add Activity",
                                        " · Day ",
                                        activityModal.dayIndex + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeActivityModal,
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1021,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: activityTitle,
                                            onChange: (e)=>setActivityTitle(e.target.value),
                                            placeholder: "e.g., Morning Hike",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1051,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Time & Location"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1062,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: activityTime,
                                            onChange: (e)=>setActivityTime(e.target.value),
                                            placeholder: "e.g., 9:00 AM · Zion National Park",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Type of Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: activityType,
                                                    onChange: (e)=>setActivityType(e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "morning",
                                                            children: "Morning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1086,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "afternoon",
                                                            children: "Afternoon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "evening",
                                                            children: "Evening"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1075,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: activityCategory,
                                                    onChange: (e)=>setActivityCategory(e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "sightseeing",
                                                            children: "Sightseeing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "food",
                                                            children: "Food"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "transport",
                                                            children: "Transport"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "accommodation",
                                                            children: "Accommodation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "shopping",
                                                            children: "Shopping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1108,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "entertainment",
                                                            children: "Entertainment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "other",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1074,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: activityLocation,
                                            onChange: (e)=>setActivityLocation(e.target.value),
                                            placeholder: "Optional location details",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: activityDescription,
                                            onChange: (e)=>setActivityDescription(e.target.value),
                                            rows: 3,
                                            placeholder: "Share details to remember",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Estimated Cost"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            value: activityCost,
                                            onChange: (e)=>setActivityCost(e.target.value),
                                            placeholder: "Optional cost",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeActivityModal,
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmitActivity,
                                            className: "flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
                                            disabled: activityTitle.trim() === "" || isActivitySaving,
                                            children: isActivitySaving ? "Saving..." : "Save Activity"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1046,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                    lineNumber: 1020,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                lineNumber: 1019,
                columnNumber: 9
            }, this),
            notesModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: [
                                        "📝 Day Notes · Day ",
                                        notesModal.dayIndex + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeNotesModal,
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: notesValue,
                                            onChange: (e)=>setNotesValue(e.target.value),
                                            rows: 5,
                                            placeholder: "Add notes about this day...",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeNotesModal,
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveNotes,
                                            className: "flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
                                            disabled: isNotesSaving,
                                            children: isNotesSaving ? "Saving..." : "Save Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                    lineNumber: 1178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                lineNumber: 1177,
                columnNumber: 9
            }, this),
            expenseModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: [
                                        "💰 Add Expense · Day ",
                                        expenseModal.dayIndex + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeExpenseModal,
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1256,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                        lineNumber: 1250,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Description *"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: expenseTitle,
                                            onChange: (e)=>setExpenseTitle(e.target.value),
                                            placeholder: "e.g., Lunch at restaurant",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Amount *"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.01",
                                                    value: expenseAmount,
                                                    onChange: (e)=>setExpenseAmount(e.target.value),
                                                    placeholder: "0.00",
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: expenseCategory,
                                                    onChange: (e)=>setExpenseCategory(e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "food",
                                                            children: "🍽️ Food"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1305,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "transport",
                                                            children: "🚗 Transport"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1306,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "accommodation",
                                                            children: "🏨 Accommodation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1307,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "shopping",
                                                            children: "🛍️ Shopping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "activities",
                                                            children: "🎭 Activities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "other",
                                                            children: "📌 Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeExpenseModal,
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveExpense,
                                            className: "flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
                                            disabled: !expenseTitle.trim() || !expenseAmount.trim() || isExpenseSaving,
                                            children: isExpenseSaving ? "Saving..." : "Add Expense"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                            lineNumber: 1266,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                    lineNumber: 1241,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
                lineNumber: 1240,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
_s(VerticalItinerary, "5I/vv+1cnytv4LDclBtaWjvMqQM=");
_c = VerticalItinerary;
var _c;
__turbopack_context__.k.register(_c, "VerticalItinerary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackingList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PackingList({ packingList, onUpdatePackingList }) {
    _s();
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newItem, setNewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        category: 'other',
        quantity: 1,
        essential: false,
        notes: ''
    });
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const categories = [
        {
            id: 'clothing',
            name: 'Clothing',
            icon: '👕',
            color: 'bg-blue-100 text-blue-800'
        },
        {
            id: 'electronics',
            name: 'Electronics',
            icon: '📱',
            color: 'bg-purple-100 text-purple-800'
        },
        {
            id: 'toiletries',
            name: 'Toiletries',
            icon: '🧴',
            color: 'bg-green-100 text-green-800'
        },
        {
            id: 'documents',
            name: 'Documents',
            icon: '📄',
            color: 'bg-yellow-100 text-yellow-800'
        },
        {
            id: 'medications',
            name: 'Medications',
            icon: '💊',
            color: 'bg-red-100 text-red-800'
        },
        {
            id: 'accessories',
            name: 'Accessories',
            icon: '👜',
            color: 'bg-pink-100 text-pink-800'
        },
        {
            id: 'other',
            name: 'Other',
            icon: '📦',
            color: 'bg-gray-100 text-gray-800'
        }
    ];
    const getCategoryInfo = (categoryId)=>categories.find((cat)=>cat.id === categoryId) || categories[categories.length - 1];
    const togglePacked = (itemId)=>{
        const updatedList = packingList.map((item)=>item.id === itemId ? {
                ...item,
                packed: !item.packed
            } : item);
        onUpdatePackingList(updatedList);
    };
    const addItem = ()=>{
        if (!newItem.name.trim()) return;
        const item = {
            id: Date.now().toString(),
            ...newItem,
            name: newItem.name.trim(),
            packed: false
        };
        onUpdatePackingList([
            ...packingList,
            item
        ]);
        setNewItem({
            name: '',
            category: 'other',
            quantity: 1,
            essential: false,
            notes: ''
        });
        setShowAddForm(false);
    };
    const removeItem = (itemId)=>{
        onUpdatePackingList(packingList.filter((item)=>item.id !== itemId));
    };
    const filteredItems = packingList.filter((item)=>{
        switch(filter){
            case 'packed':
                return item.packed;
            case 'unpacked':
                return !item.packed;
            case 'essential':
                return item.essential;
            default:
                return true;
        }
    });
    const groupedItems = categories.reduce((acc, category)=>{
        acc[category.id] = filteredItems.filter((item)=>item.category === category.id);
        return acc;
    }, {});
    const packedCount = packingList.filter((item)=>item.packed).length;
    const totalCount = packingList.length;
    const essentialCount = packingList.filter((item)=>item.essential && !item.packed).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Packing List"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Keep track of everything you need"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddForm(true),
                                className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                children: "+ Add Item"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: [
                                            "Progress: ",
                                            packedCount,
                                            "/",
                                            totalCount,
                                            " items packed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-purple-600",
                                        children: [
                                            totalCount > 0 ? Math.round(packedCount / totalCount * 100) : 0,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500",
                                    style: {
                                        width: `${totalCount > 0 ? packedCount / totalCount * 100 : 0}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            essentialCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 mt-2",
                                children: [
                                    "⚠️ ",
                                    essentialCount,
                                    " essential item",
                                    essentialCount > 1 ? 's' : '',
                                    " still need",
                                    essentialCount === 1 ? 's' : '',
                                    " to be packed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            {
                                id: 'all',
                                name: 'All Items',
                                count: packingList.length
                            },
                            {
                                id: 'unpacked',
                                name: 'To Pack',
                                count: packingList.length - packedCount
                            },
                            {
                                id: 'packed',
                                name: 'Packed',
                                count: packedCount
                            },
                            {
                                id: 'essential',
                                name: 'Essential',
                                count: packingList.filter((item)=>item.essential).length
                            }
                        ].map((filterOption)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(filterOption.id),
                                className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === filterOption.id ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                children: [
                                    filterOption.name,
                                    " (",
                                    filterOption.count,
                                    ")"
                                ]
                            }, filterOption.id, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Add Packing Item"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddForm(false),
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newItem.name,
                                    onChange: (e)=>setNewItem({
                                            ...newItem,
                                            name: e.target.value
                                        }),
                                    placeholder: "Item name",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: newItem.category,
                                    onChange: (e)=>setNewItem({
                                            ...newItem,
                                            category: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: category.id,
                                            children: [
                                                category.icon,
                                                " ",
                                                category.name
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: newItem.quantity,
                                    onChange: (e)=>setNewItem({
                                            ...newItem,
                                            quantity: Math.max(1, parseInt(e.target.value) || 1)
                                        }),
                                    placeholder: "Quantity",
                                    min: "1",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: newItem.notes,
                                    onChange: (e)=>setNewItem({
                                            ...newItem,
                                            notes: e.target.value
                                        }),
                                    placeholder: "Notes (optional)",
                                    rows: 2,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: newItem.essential,
                                            onChange: (e)=>setNewItem({
                                                    ...newItem,
                                                    essential: e.target.checked
                                                }),
                                            className: "w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Mark as essential"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowAddForm(false),
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addItem,
                                            className: "flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200",
                                            children: "Add Item"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: categories.map((category)=>{
                    const items = groupedItems[category.id];
                    if (items.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: category.icon
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2 py-1 rounded-full text-xs font-medium ${category.color}`,
                                            children: [
                                                items.filter((item)=>item.packed).length,
                                                "/",
                                                items.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${item.packed ? 'bg-green-50 border-green-200 opacity-75' : item.essential ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200 hover:border-purple-300'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>togglePacked(item.id),
                                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${item.packed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-purple-500'}`,
                                                        children: item.packed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-medium ${item.packed ? 'line-through text-gray-500' : 'text-gray-900'}`,
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                        lineNumber: 273,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item.essential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full",
                                                                        children: "Essential"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    item.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full",
                                                                        children: [
                                                                            "x",
                                                                            item.quantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 25
                                                            }, this),
                                                            item.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500 mt-1",
                                                                children: item.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                lineNumber: 255,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeItem(item.id),
                                                className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                                lineNumber: 293,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl",
                            children: "🧳"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-gray-900 mb-2",
                        children: "No items found"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: filter === 'all' ? 'Start by adding items to your packing list' : `No ${filter} items to show`
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    filter === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddForm(true),
                        className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200",
                        children: "Add Your First Item"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                        lineNumber: 319,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(PackingList, "zNrnefvE/dsPW1dr4+07NQRwwZE=");
_c = PackingList;
var _c;
__turbopack_context__.k.register(_c, "PackingList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpenseTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ExpenseTracker({ expenses, budget, currency, onUpdateExpenses }) {
    _s();
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newExpense, setNewExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        amount: 0,
        category: "other",
        date: new Date().toISOString().split("T")[0],
        description: ""
    });
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const categories = [
        {
            id: "accommodation",
            name: "Accommodation",
            icon: "🏨",
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: "food",
            name: "Food & Drinks",
            icon: "🍽️",
            color: "bg-green-100 text-green-800"
        },
        {
            id: "transport",
            name: "Transport",
            icon: "🚗",
            color: "bg-yellow-100 text-yellow-800"
        },
        {
            id: "activities",
            name: "Activities",
            icon: "🎯",
            color: "bg-purple-100 text-purple-800"
        },
        {
            id: "shopping",
            name: "Shopping",
            icon: "🛍️",
            color: "bg-pink-100 text-pink-800"
        },
        {
            id: "other",
            name: "Other",
            icon: "📦",
            color: "bg-gray-100 text-gray-800"
        }
    ];
    const getCategoryInfo = (categoryId)=>categories.find((cat)=>cat.id === categoryId) || categories[categories.length - 1];
    const addExpense = ()=>{
        if (!newExpense.title.trim() || newExpense.amount <= 0) return;
        const expense = {
            id: Date.now().toString(),
            ...newExpense,
            currency,
            title: newExpense.title.trim()
        };
        onUpdateExpenses([
            ...expenses,
            expense
        ]);
        setNewExpense({
            title: "",
            amount: 0,
            category: "other",
            date: new Date().toISOString().split("T")[0],
            description: ""
        });
        setShowAddForm(false);
    };
    const removeExpense = async (expenseId)=>{
        // Remove from local state first
        const updatedExpenses = expenses.filter((expense)=>expense.id !== expenseId);
        onUpdateExpenses(updatedExpenses);
        // Delete from database
        try {
            const { deleteExpense } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
            await deleteExpense(expenseId);
            console.log("Expense deleted successfully");
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };
    const filteredExpenses = expenses.filter((expense)=>filter === "all" || expense.category === filter);
    const totalSpent = expenses.reduce((sum, expense)=>sum + expense.amount, 0);
    const remaining = budget - totalSpent;
    const spentPercentage = budget > 0 ? totalSpent / budget * 100 : 0;
    const expensesByCategory = categories.map((category)=>({
            ...category,
            total: expenses.filter((expense)=>expense.category === category.id).reduce((sum, expense)=>sum + expense.amount, 0),
            count: expenses.filter((expense)=>expense.category === category.id).length
        })).filter((category)=>category.count > 0);
    const getBudgetStatus = ()=>{
        if (spentPercentage > 100) return {
            color: "text-red-600",
            bg: "bg-red-500",
            status: "Over Budget!"
        };
        if (spentPercentage > 80) return {
            color: "text-yellow-600",
            bg: "bg-yellow-500",
            status: "Close to Limit"
        };
        return {
            color: "text-green-600",
            bg: "bg-green-500",
            status: "On Track"
        };
    };
    const budgetStatus = getBudgetStatus();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Expense Tracker"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Monitor your spending and stay on budget"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddForm(true),
                                className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                children: "+ Add Expense"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-gray-900 mb-1",
                                        children: [
                                            budget.toLocaleString(),
                                            " ",
                                            currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Total Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-red-600 mb-1",
                                        children: [
                                            totalSpent.toLocaleString(),
                                            " ",
                                            currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Total Spent"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-3xl font-bold mb-1 ${remaining >= 0 ? "text-green-600" : "text-red-600"}`,
                                        children: [
                                            remaining.toLocaleString(),
                                            " ",
                                            currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Remaining"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Budget Usage"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-medium ${budgetStatus.color}`,
                                        children: [
                                            Math.round(spentPercentage),
                                            "% • ",
                                            budgetStatus.status
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 rounded-full h-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-3 rounded-full transition-all duration-500 ${budgetStatus.bg}`,
                                    style: {
                                        width: `${Math.min(spentPercentage, 100)}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                        children: expensesByCategory.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-3 bg-gray-50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl mb-1",
                                        children: category.icon
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: [
                                            category.total.toLocaleString(),
                                            " ",
                                            currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-600",
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category.id, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Add Expense"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddForm(false),
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newExpense.title,
                                    onChange: (e)=>setNewExpense({
                                            ...newExpense,
                                            title: e.target.value
                                        }),
                                    placeholder: "Expense title",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: newExpense.amount || "",
                                            onChange: (e)=>setNewExpense({
                                                    ...newExpense,
                                                    amount: parseFloat(e.target.value) || 0
                                                }),
                                            placeholder: "Amount",
                                            min: "0",
                                            step: "0.01",
                                            className: "flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium",
                                            children: currency
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: newExpense.category,
                                    onChange: (e)=>setNewExpense({
                                            ...newExpense,
                                            category: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: category.id,
                                            children: [
                                                category.icon,
                                                " ",
                                                category.name
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: newExpense.date,
                                    onChange: (e)=>setNewExpense({
                                            ...newExpense,
                                            date: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: newExpense.description,
                                    onChange: (e)=>setNewExpense({
                                            ...newExpense,
                                            description: e.target.value
                                        }),
                                    placeholder: "Description (optional)",
                                    rows: 2,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowAddForm(false),
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addExpense,
                                            className: "flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200",
                                            children: "Add Expense"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter("all"),
                            className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === "all" ? "bg-green-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                            children: [
                                "All Expenses (",
                                expenses.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this),
                        categories.map((category)=>{
                            const count = expenses.filter((expense)=>expense.category === category.id).length;
                            if (count === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(category.id),
                                className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === category.id ? "bg-green-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                children: [
                                    category.icon,
                                    " ",
                                    category.name,
                                    " (",
                                    count,
                                    ")"
                                ]
                            }, category.id, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredExpenses.length > 0 ? filteredExpenses.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(b.date).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(a.date).getTime()).map((expense)=>{
                    const categoryInfo = getCategoryInfo(expense.category);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: categoryInfo.icon
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 394,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: expense.title
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-4 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`,
                                                            children: categoryInfo.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(expense.date), "MMM d, yyyy")
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 25
                                                }, this),
                                                expense.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: expense.description
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 395,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 393,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: [
                                                    expense.amount.toLocaleString(),
                                                    " ",
                                                    expense.currency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                lineNumber: 419,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 418,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeExpense(expense.id),
                                            className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                                lineNumber: 427,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                            lineNumber: 423,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                    lineNumber: 417,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 392,
                            columnNumber: 19
                        }, this)
                    }, expense.id, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                        lineNumber: 388,
                        columnNumber: 17
                    }, this);
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "💰"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "No expenses found"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: filter === "all" ? "Start tracking your trip expenses" : `No ${getCategoryInfo(filter).name.toLowerCase()} expenses to show`
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        filter === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddForm(true),
                            className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200",
                            children: "Add Your First Expense"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                            lineNumber: 462,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                    lineNumber: 447,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(ExpenseTracker, "Zmmqode9wUvz5kfvODG21qhn6r4=");
_c = ExpenseTracker;
var _c;
__turbopack_context__.k.register(_c, "ExpenseTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccommodationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/differenceInDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AccommodationManager({ itinerary, onUpdateItinerary }) {
    _s();
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingAccommodation, setEditingAccommodation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newAccommodation, setNewAccommodation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        type: "hotel",
        address: "",
        checkIn: "",
        checkOut: "",
        cost: 0,
        currency: "USD",
        rating: 5,
        amenities: [],
        notes: "",
        bookingReference: "",
        contactInfo: ""
    });
    const accommodationTypes = [
        {
            id: "hotel",
            name: "Hotel",
            icon: "🏨"
        },
        {
            id: "airbnb",
            name: "Airbnb",
            icon: "🏠"
        },
        {
            id: "hostel",
            name: "Hostel",
            icon: "🏢"
        },
        {
            id: "resort",
            name: "Resort",
            icon: "🏖️"
        },
        {
            id: "apartment",
            name: "Apartment",
            icon: "🏠"
        },
        {
            id: "other",
            name: "Other",
            icon: "🏘️"
        }
    ];
    const commonAmenities = [
        "WiFi",
        "Parking",
        "Pool",
        "Gym",
        "Spa",
        "Restaurant",
        "Room Service",
        "Air Conditioning",
        "Kitchen",
        "Laundry",
        "Pet Friendly",
        "Business Center",
        "Airport Shuttle",
        "Breakfast Included",
        "Beach Access",
        "Balcony"
    ];
    const getTypeInfo = (type)=>accommodationTypes.find((t)=>t.id === type) || accommodationTypes[0];
    const addAccommodation = ()=>{
        if (!newAccommodation.name.trim() || !newAccommodation.checkIn || !newAccommodation.checkOut) return;
        const accommodation = {
            id: Date.now().toString(),
            ...newAccommodation,
            name: newAccommodation.name.trim(),
            photos: []
        };
        // Find the day that matches the check-in date
        const checkInDate = new Date(newAccommodation.checkIn).toISOString().split("T")[0];
        const dayIndex = itinerary.findIndex((day)=>day.date === checkInDate);
        if (dayIndex !== -1) {
            const updatedItinerary = [
                ...itinerary
            ];
            updatedItinerary[dayIndex] = {
                ...updatedItinerary[dayIndex],
                accommodation
            };
            onUpdateItinerary(updatedItinerary);
        }
        resetForm();
    };
    const updateAccommodation = ()=>{
        if (!editingAccommodation) return;
        const updatedItinerary = [
            ...itinerary
        ];
        updatedItinerary[editingAccommodation.dayIndex] = {
            ...updatedItinerary[editingAccommodation.dayIndex],
            accommodation: editingAccommodation.accommodation
        };
        onUpdateItinerary(updatedItinerary);
        setEditingAccommodation(null);
    };
    const removeAccommodation = (dayIndex)=>{
        const updatedItinerary = [
            ...itinerary
        ];
        delete updatedItinerary[dayIndex].accommodation;
        onUpdateItinerary(updatedItinerary);
    };
    const resetForm = ()=>{
        setNewAccommodation({
            name: "",
            type: "hotel",
            address: "",
            checkIn: "",
            checkOut: "",
            cost: 0,
            currency: "USD",
            rating: 5,
            amenities: [],
            notes: "",
            bookingReference: "",
            contactInfo: ""
        });
        setShowAddForm(false);
    };
    const toggleAmenity = (amenity, isEditing = false)=>{
        if (isEditing && editingAccommodation) {
            const amenities = editingAccommodation.accommodation.amenities.includes(amenity) ? editingAccommodation.accommodation.amenities.filter((a)=>a !== amenity) : [
                ...editingAccommodation.accommodation.amenities,
                amenity
            ];
            setEditingAccommodation({
                ...editingAccommodation,
                accommodation: {
                    ...editingAccommodation.accommodation,
                    amenities
                }
            });
        } else {
            const amenities = newAccommodation.amenities.includes(amenity) ? newAccommodation.amenities.filter((a)=>a !== amenity) : [
                ...newAccommodation.amenities,
                amenity
            ];
            setNewAccommodation({
                ...newAccommodation,
                amenities
            });
        }
    };
    const accommodationsWithDays = itinerary.map((day, index)=>({
            ...day,
            dayIndex: index
        })).filter((day)=>day.accommodation);
    const totalAccommodationCost = accommodationsWithDays.reduce((sum, day)=>sum + (day.accommodation?.cost || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Accommodation"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Manage your hotels and places to stay"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddForm(true),
                                className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                children: "+ Add Accommodation"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4 bg-blue-50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-blue-600 mb-1",
                                        children: accommodationsWithDays.length
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Bookings"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4 bg-green-50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-green-600 mb-1",
                                        children: [
                                            totalAccommodationCost.toLocaleString(),
                                            " USD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Total Cost"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4 bg-purple-50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-purple-600 mb-1",
                                        children: accommodationsWithDays.reduce((sum, day)=>{
                                            const accommodation = day.accommodation;
                                            return sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkOut), (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkIn));
                                        }, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Total Nights"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            (showAddForm || editingAccommodation) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: editingAccommodation ? "Edit Accommodation" : "Add Accommodation"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowAddForm(false);
                                        setEditingAccommodation(null);
                                    },
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-gray-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingAccommodation ? editingAccommodation.accommodation.name : newAccommodation.name,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        name: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    name: e.target.value
                                                }),
                                            placeholder: "Accommodation name",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingAccommodation ? editingAccommodation.accommodation.type : newAccommodation.type,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        type: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    type: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            children: accommodationTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: type.id,
                                                    children: [
                                                        type.icon,
                                                        " ",
                                                        type.name
                                                    ]
                                                }, type.id, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: editingAccommodation ? editingAccommodation.accommodation.address : newAccommodation.address,
                                    onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                            ...editingAccommodation,
                                            accommodation: {
                                                ...editingAccommodation.accommodation,
                                                address: e.target.value
                                            }
                                        }) : setNewAccommodation({
                                            ...newAccommodation,
                                            address: e.target.value
                                        }),
                                    placeholder: "Address",
                                    rows: 2,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editingAccommodation ? editingAccommodation.accommodation.checkIn : newAccommodation.checkIn,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        checkIn: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    checkIn: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editingAccommodation ? editingAccommodation.accommodation.checkOut : newAccommodation.checkOut,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        checkOut: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    checkOut: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editingAccommodation ? editingAccommodation.accommodation.cost : newAccommodation.cost,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        cost: parseFloat(e.target.value) || 0
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    cost: parseFloat(e.target.value) || 0
                                                }),
                                            placeholder: "Total cost",
                                            min: "0",
                                            step: "0.01",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>editingAccommodation ? setEditingAccommodation({
                                                            ...editingAccommodation,
                                                            accommodation: {
                                                                ...editingAccommodation.accommodation,
                                                                rating: star
                                                            }
                                                        }) : setNewAccommodation({
                                                            ...newAccommodation,
                                                            rating: star
                                                        }),
                                                    className: `text-2xl transition-colors ${star <= (editingAccommodation ? editingAccommodation.accommodation.rating || 0 : newAccommodation.rating) ? "text-yellow-400" : "text-gray-300"}`,
                                                    children: "⭐"
                                                }, star, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-3",
                                            children: "Amenities"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                                            children: commonAmenities.map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center space-x-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: (editingAccommodation ? editingAccommodation.accommodation.amenities : newAccommodation.amenities).includes(amenity),
                                                            onChange: ()=>toggleAmenity(amenity, !!editingAccommodation),
                                                            className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-700",
                                                            children: amenity
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, amenity, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingAccommodation ? editingAccommodation.accommodation.bookingReference || "" : newAccommodation.bookingReference,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        bookingReference: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    bookingReference: e.target.value
                                                }),
                                            placeholder: "Booking reference",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingAccommodation ? editingAccommodation.accommodation.contactInfo || "" : newAccommodation.contactInfo,
                                            onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                                    ...editingAccommodation,
                                                    accommodation: {
                                                        ...editingAccommodation.accommodation,
                                                        contactInfo: e.target.value
                                                    }
                                                }) : setNewAccommodation({
                                                    ...newAccommodation,
                                                    contactInfo: e.target.value
                                                }),
                                            placeholder: "Contact info",
                                            className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: editingAccommodation ? editingAccommodation.accommodation.notes || "" : newAccommodation.notes,
                                    onChange: (e)=>editingAccommodation ? setEditingAccommodation({
                                            ...editingAccommodation,
                                            accommodation: {
                                                ...editingAccommodation.accommodation,
                                                notes: e.target.value
                                            }
                                        }) : setNewAccommodation({
                                            ...newAccommodation,
                                            notes: e.target.value
                                        }),
                                    placeholder: "Notes",
                                    rows: 3,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowAddForm(false);
                                                setEditingAccommodation(null);
                                            },
                                            className: "flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: editingAccommodation ? updateAccommodation : addAccommodation,
                                            className: "flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200",
                                            children: [
                                                editingAccommodation ? "Update" : "Add",
                                                " Accommodation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: accommodationsWithDays.length > 0 ? accommodationsWithDays.map((day)=>{
                    const accommodation = day.accommodation;
                    const typeInfo = getTypeInfo(accommodation.type);
                    const nights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkOut), (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkIn));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl",
                                            children: typeInfo.icon
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 603,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-1",
                                                    children: accommodation.name
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-2",
                                                    children: accommodation.address
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-4 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full",
                                                            children: typeInfo.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                ...Array(5)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm ${i < (accommodation.rating || 0) ? "text-yellow-400" : "text-gray-300"}`,
                                                                    children: "⭐"
                                                                }, i, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Check-in:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkIn), "MMM d, yyyy")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Check-out:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(accommodation.checkOut), "MMM d, yyyy")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 644,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Nights:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: nights
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 653,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Total Cost:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        accommodation.cost.toLocaleString(),
                                                                        " ",
                                                                        accommodation.currency
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 23
                                                }, this),
                                                accommodation.amenities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Amenities:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 666,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1 mt-1",
                                                            children: [
                                                                accommodation.amenities.slice(0, 6).map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full",
                                                                        children: amenity
                                                                    }, amenity, false, {
                                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                        lineNumber: 673,
                                                                        columnNumber: 33
                                                                    }, this)),
                                                                accommodation.amenities.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full",
                                                                    children: [
                                                                        "+",
                                                                        accommodation.amenities.length - 6,
                                                                        " more"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                                    lineNumber: 681,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 25
                                                }, this),
                                                accommodation.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-3",
                                                    children: accommodation.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 604,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 602,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setEditingAccommodation({
                                                    dayIndex: day.dayIndex,
                                                    accommodation
                                                }),
                                            className: "p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                lineNumber: 707,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 698,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeAccommodation(day.dayIndex),
                                            className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                                lineNumber: 725,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                            lineNumber: 721,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                    lineNumber: 697,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 601,
                            columnNumber: 17
                        }, this)
                    }, day.dayIndex, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                        lineNumber: 597,
                        columnNumber: 15
                    }, this);
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "🏨"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                                lineNumber: 747,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "No accommodations added"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 749,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Add hotels, Airbnbs, or other places you'll be staying"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 752,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddForm(true),
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200",
                            children: "Add Your First Accommodation"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                            lineNumber: 755,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                    lineNumber: 745,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(AccommodationManager, "5Q3QRCHjt1JbA1wb0trncuSe7U0=");
_c = AccommodationManager;
var _c;
__turbopack_context__.k.register(_c, "AccommodationManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/differenceInDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TripOverview({ trip, onUpdateTrip }) {
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editData, setEditData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: trip.title,
        description: trip.description || "",
        budget: trip.budget || 0
    });
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.end_date), (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.start_date)) + 1;
    const totalExpenses = trip.expenses.reduce((sum, expense)=>sum + expense.amount, 0);
    const remainingBudget = (trip.budget || 0) - totalExpenses;
    const packedItems = trip.packingList.filter((item)=>item.packed).length;
    const totalItems = trip.packingList.length;
    const completedActivities = trip.itinerary.reduce((count, day)=>count + day.activities.filter((activity)=>activity.completed).length, 0);
    const totalActivities = trip.itinerary.reduce((count, day)=>count + day.activities.length, 0);
    const handleSave = ()=>{
        onUpdateTrip(editData);
        setIsEditing(false);
    };
    const getBudgetStatus = ()=>{
        const percentage = totalExpenses / (trip.budget || 1) * 100;
        if (percentage > 100) return {
            color: "text-red-600",
            bg: "bg-red-100",
            status: "Over Budget!"
        };
        if (percentage > 80) return {
            color: "text-yellow-600",
            bg: "bg-yellow-100",
            status: "Close to Limit"
        };
        return {
            color: "text-green-600",
            bg: "bg-green-100",
            status: "On Track"
        };
    };
    const budgetStatus = getBudgetStatus();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20",
                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: editData.title,
                            onChange: (e)=>setEditData({
                                    ...editData,
                                    title: e.target.value
                                }),
                            className: "w-full text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none pb-2",
                            placeholder: "Trip title"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: editData.description,
                            onChange: (e)=>setEditData({
                                    ...editData,
                                    description: e.target.value
                                }),
                            className: "w-full text-gray-600 bg-transparent border border-gray-300 rounded-xl p-4 focus:border-purple-500 outline-none resize-none",
                            rows: 3,
                            placeholder: "Trip description"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-gray-700",
                                    children: "Budget:"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: editData.budget,
                                    onChange: (e)=>setEditData({
                                            ...editData,
                                            budget: Number(e.target.value)
                                        }),
                                    className: "px-4 py-2 border border-gray-300 rounded-xl focus:border-purple-500 outline-none",
                                    placeholder: "0"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600",
                                    children: trip.currency
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditing(false),
                                    className: "bg-gray-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-200",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-gray-900 mb-2",
                                            children: trip.title
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-lg leading-relaxed",
                                            children: trip.description
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsEditing(true),
                                        className: "p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-600",
                                            children: duration
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Days"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-600",
                                            children: trip.travelers
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Travelers"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.start_date), "EEE, MMM d")
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-orange-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.end_date), "EEE, MMM d")
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-4",
                        children: "Trip Cover Image"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-6 items-start",
                        children: [
                            trip.cover_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: trip.cover_image,
                                        alt: trip.title,
                                        className: "w-full h-48 object-cover rounded-xl shadow-md"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>document.getElementById("cover-image-input")?.click(),
                                        className: "absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors",
                                        title: "Change cover image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center cursor-pointer hover:from-purple-300 hover:to-pink-300 transition-colors",
                                onClick: ()=>document.getElementById("cover-image-input")?.click(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-12 h-12 text-purple-600 mx-auto mb-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-700 font-medium",
                                            children: "Click to upload cover image"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "cover-image-input",
                                type: "file",
                                accept: "image/*",
                                className: "hidden",
                                onChange: async (e)=>{
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        try {
                                            const { uploadTripCoverImage } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                            const coverUrl = await uploadTripCoverImage(trip.id, file);
                                            onUpdateTrip({
                                                cover_image: coverUrl
                                            });
                                        } catch (error) {
                                            alert("Failed to upload cover image");
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-3 py-1 rounded-full text-xs font-medium ${budgetStatus.bg} ${budgetStatus.color}`,
                                        children: budgetStatus.status
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Total Budget"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: [
                                                    trip.budget?.toLocaleString(),
                                                    " ",
                                                    trip.currency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Spent"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-red-600",
                                                children: [
                                                    totalExpenses.toLocaleString(),
                                                    " ",
                                                    trip.currency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Remaining"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${remainingBudget >= 0 ? "text-green-600" : "text-red-600"}`,
                                                children: [
                                                    remainingBudget.toLocaleString(),
                                                    " ",
                                                    trip.currency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2 mt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 rounded-full transition-all duration-300 ${totalExpenses > (trip.budget || 0) ? "bg-red-500" : "bg-gradient-to-r from-green-500 to-emerald-500"}`,
                                            style: {
                                                width: `${Math.min(totalExpenses / (trip.budget || 1) * 100, 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Packing"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🧳"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-purple-600 mb-2",
                                        children: [
                                            packedItems,
                                            "/",
                                            totalItems
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: "Items Packed"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${totalItems > 0 ? packedItems / totalItems * 100 : 0}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children: [
                                            totalItems > 0 ? Math.round(packedItems / totalItems * 100) : 0,
                                            "% Complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Activities"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🗓️"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-blue-600 mb-2",
                                        children: [
                                            completedActivities,
                                            "/",
                                            totalActivities
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${totalActivities > 0 ? completedActivities / totalActivities * 100 : 0}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children: [
                                            totalActivities > 0 ? Math.round(completedActivities / totalActivities * 100) : 0,
                                            "% Complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-6",
                        children: "Recent Updates"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "No recent activity"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs mt-1",
                                children: "Activity will appear here as you update your trip"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TripOverview, "Wvmke+oDEcv2MDhaezvLYAHeO7c=");
_c = TripOverview;
var _c;
__turbopack_context__.k.register(_c, "TripOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItineraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$VerticalItinerary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/VerticalItinerary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$PackingList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/PackingList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$ExpenseTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/ExpenseTracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AccommodationManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AccommodationManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripOverview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ItineraryPage({ params }) {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [trip, setTrip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("itinerary");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ItineraryPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/auth/login");
            }
        }
    }["ItineraryPage.useEffect"], [
        user,
        loading,
        router
    ]);
    // Load trip data from database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ItineraryPage.useEffect": ()=>{
            async function loadTrip() {
                if (!resolvedParams.id) return;
                try {
                    const { getTrip } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                    const tripData = await getTrip(resolvedParams.id);
                    if (tripData) {
                        // Apply any localStorage edits to the trip data
                        try {
                            const tripKey = `trip_${resolvedParams.id}_edits`;
                            const savedEdits = JSON.parse(localStorage.getItem(tripKey) || "{}");
                            if (Object.keys(savedEdits).length > 0) {
                                const updatedItinerary = [
                                    ...tripData.itinerary
                                ];
                                Object.entries(savedEdits).forEach({
                                    "ItineraryPage.useEffect.loadTrip": ([key, edits])=>{
                                        if (key.startsWith("day_")) {
                                            const dayIndex = parseInt(key.replace("day_", ""));
                                            if (updatedItinerary[dayIndex] && typeof edits === "object") {
                                                updatedItinerary[dayIndex] = {
                                                    ...updatedItinerary[dayIndex],
                                                    ...edits
                                                };
                                            }
                                        }
                                    }
                                }["ItineraryPage.useEffect.loadTrip"]);
                                tripData.itinerary = updatedItinerary;
                            }
                        } catch (error) {
                        // Could not load edits from localStorage
                        }
                        setTrip(tripData);
                    } else {
                        // Trip not found, create empty structure
                        const emptyTrip = {
                            id: resolvedParams.id,
                            title: "My Trip",
                            destination: "Destination",
                            start_date: new Date().toISOString().split("T")[0],
                            end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                            description: "Plan your amazing journey",
                            budget: 0,
                            currency: "USD",
                            travelers: 1,
                            packingList: [],
                            expenses: [],
                            itinerary: [],
                            created_at: new Date().toISOString(),
                            updated_at: new Date().toISOString()
                        };
                        setTrip(emptyTrip);
                    }
                } catch (error) {
                    // Fallback to empty trip
                    const emptyTrip = {
                        id: resolvedParams.id,
                        title: "My Trip",
                        destination: "Destination",
                        start_date: new Date().toISOString().split("T")[0],
                        end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                        description: "Plan your amazing journey",
                        budget: 0,
                        currency: "USD",
                        travelers: 1,
                        packingList: [],
                        expenses: [],
                        itinerary: [],
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    };
                    setTrip(emptyTrip);
                }
            }
            if (user) {
                loadTrip();
            }
        }
    }["ItineraryPage.useEffect"], [
        resolvedParams.id,
        user
    ]);
    const updateTrip = async (updatedTrip)=>{
        if (trip) {
            setTrip({
                ...trip,
                ...updatedTrip
            });
            // Save to database
            try {
                const { updateTrip: updateTripDB } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                await updateTripDB(trip.id, updatedTrip);
            } catch (error) {
            // Error updating trip
            }
        }
    };
    const addNewDay = ()=>{
        if (!trip) return;
        const newDayNumber = trip.itinerary.length + 1;
        const tripStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.start_date);
        const newDayDate = new Date(tripStartDate);
        newDayDate.setDate(tripStartDate.getDate() + newDayNumber - 1);
        const newDay = {
            day: newDayNumber,
            date: newDayDate.toISOString().split("T")[0],
            activities: [],
            notes: "",
            actualSpent: 0
        };
        const updatedItinerary = [
            ...trip.itinerary,
            newDay
        ];
        updateTrip({
            itinerary: updatedItinerary
        });
    };
    const tabs = [
        {
            id: "overview",
            name: "Overview",
            icon: "📊"
        },
        {
            id: "itinerary",
            name: "Itinerary",
            icon: "🗓️"
        },
        {
            id: "packing",
            name: "Packing",
            icon: "🧳"
        },
        {
            id: "expenses",
            name: "Expenses",
            icon: "💰"
        },
        {
            id: "accommodation",
            name: "Hotels",
            icon: "🏨"
        }
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading itinerary..."
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this);
    }
    if (!user || !trip) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block bg-yellow-300/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-gray-800 mb-4 shadow-lg border border-yellow-400/30",
                                children: trip?.destination.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-purple-400 bg-white/90 backdrop-blur-sm rounded-3xl p-6 max-w-2xl mx-auto shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-gray-900 tracking-wider mb-2",
                                        children: trip?.title || "TRIP PLANNER"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: trip?.description
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 max-w-4xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex space-x-2",
                                "aria-label": "Tabs",
                                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `
                    flex-1 flex items-center justify-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                    ${activeTab === tab.id ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}
                  `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-lg",
                                                children: tab.icon
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: tab.name
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            activeTab === "overview" && trip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                trip: trip,
                                onUpdateTrip: updateTrip
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            activeTab === "itinerary" && trip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$VerticalItinerary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                itinerary: trip.itinerary,
                                tripId: trip.id,
                                onAddActivity: async (dayIndex, activityInput)=>{
                                    try {
                                        const { addActivity } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        const created = await addActivity(trip.id, dayIndex + 1, activityInput);
                                        const updatedItinerary = [
                                            ...trip.itinerary
                                        ];
                                        if (!updatedItinerary[dayIndex].activities) {
                                            updatedItinerary[dayIndex].activities = [];
                                        }
                                        updatedItinerary[dayIndex].activities.push(created);
                                        updateTrip({
                                            itinerary: updatedItinerary
                                        });
                                    } catch (error) {
                                    // Error adding activity
                                    }
                                },
                                onEditActivity: async (dayIndex, activityId, activityInput)=>{
                                    try {
                                        const { updateActivity } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        const updated = await updateActivity(trip.id, dayIndex + 1, activityId, activityInput);
                                        const itineraryCopy = [
                                            ...trip.itinerary
                                        ];
                                        const activityIndex = itineraryCopy[dayIndex].activities.findIndex((a)=>a.id === activityId);
                                        if (activityIndex !== -1) {
                                            itineraryCopy[dayIndex].activities[activityIndex] = updated;
                                            updateTrip({
                                                itinerary: itineraryCopy
                                            });
                                        }
                                    } catch (error) {
                                    // Error updating activity
                                    }
                                },
                                onDeleteActivity: async (dayIndex, activityId)=>{
                                    try {
                                        const { deleteActivity } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await deleteActivity(trip.id, dayIndex + 1, activityId);
                                        const itineraryCopy = [
                                            ...trip.itinerary
                                        ];
                                        itineraryCopy[dayIndex].activities = itineraryCopy[dayIndex].activities.filter((a)=>a.id !== activityId);
                                        updateTrip({
                                            itinerary: itineraryCopy
                                        });
                                    } catch (error) {
                                    // Error deleting activity
                                    }
                                },
                                onSaveNotes: async (dayIndex, notes)=>{
                                    try {
                                        const { updateTripDay } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await updateTripDay(trip.id, dayIndex + 1, {
                                            notes
                                        });
                                        const updatedItinerary = [
                                            ...trip.itinerary
                                        ];
                                        updatedItinerary[dayIndex] = {
                                            ...updatedItinerary[dayIndex],
                                            notes
                                        };
                                        updateTrip({
                                            itinerary: updatedItinerary
                                        });
                                    } catch (error) {
                                    // Error saving notes
                                    }
                                },
                                onSaveExpense: async (dayIndex, expense)=>{
                                    try {
                                        const expenseData = {
                                            id: crypto.randomUUID(),
                                            title: expense.title,
                                            amount: expense.amount,
                                            currency: expense.currency,
                                            category: expense.category,
                                            date: expense.date,
                                            description: "",
                                            shared: false
                                        };
                                        const { addExpense, getTrip } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await addExpense(trip.id, expenseData);
                                        // Refresh trip data to show updated expenses
                                        const updatedTrip = await getTrip(trip.id);
                                        if (updatedTrip) {
                                            updateTrip(updatedTrip);
                                        }
                                    } catch (error) {
                                    // Error saving expense
                                    }
                                },
                                onUpdateDay: async (dayIndex, updatedDay)=>{
                                    // Update local state immediately for better UX
                                    const updatedItinerary = [
                                        ...trip.itinerary
                                    ];
                                    updatedItinerary[dayIndex] = {
                                        ...updatedItinerary[dayIndex],
                                        ...updatedDay
                                    };
                                    updateTrip({
                                        itinerary: updatedItinerary
                                    });
                                    // Save to database
                                    try {
                                        const { updateTripDay } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await updateTripDay(trip.id, dayIndex + 1, updatedDay);
                                    } catch (error) {
                                    // Error updating day in database
                                    }
                                },
                                onAddDay: addNewDay,
                                onDeleteDay: async (dayIndex)=>{
                                    try {
                                        const dayToDelete = trip.itinerary[dayIndex];
                                        // Delete from database first
                                        const { deleteTripDay } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await deleteTripDay(trip.id, dayToDelete.day);
                                        // Remove from local state
                                        const updatedItinerary = [
                                            ...trip.itinerary
                                        ];
                                        updatedItinerary.splice(dayIndex, 1);
                                        // Renumber the remaining days
                                        const renumberedItinerary = updatedItinerary.map((day, index)=>({
                                                ...day,
                                                day: index + 1
                                            }));
                                        updateTrip({
                                            itinerary: renumberedItinerary
                                        });
                                    } catch (error) {
                                    // Error deleting day
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            activeTab === "packing" && trip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$PackingList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                packingList: trip.packingList,
                                onUpdatePackingList: async (packingList)=>{
                                    setTrip({
                                        ...trip,
                                        packingList
                                    });
                                    try {
                                        const { savePackingList } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await savePackingList(trip.id, packingList);
                                    } catch (error) {
                                    // Error saving packing list
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            activeTab === "expenses" && trip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$ExpenseTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                expenses: trip.expenses,
                                budget: trip.budget || 0,
                                currency: trip.currency,
                                onUpdateExpenses: (expenses)=>updateTrip({
                                        expenses
                                    })
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            activeTab === "accommodation" && trip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AccommodationManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                itinerary: trip.itinerary,
                                onUpdateItinerary: (itinerary)=>updateTrip({
                                        itinerary
                                    })
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/dashboard"),
                            className: "bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                            children: "← Back to Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/itinerary/[id]/page.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(ItineraryPage, "4CW+WE07NqB1eaW0cZsoxo6I2rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ItineraryPage;
var _c;
__turbopack_context__.k.register(_c, "ItineraryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_src_726f04b4._.js.map