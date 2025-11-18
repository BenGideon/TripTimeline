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
'use client';
;
;
function DashboardHeader({ user }) {
    _s();
    const { signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSignOut = async ()=>{
        await signOut();
    };
    const userInitials = user.user_metadata?.display_name ? user.user_metadata.display_name.split(' ').map((n)=>n[0]).join('').toUpperCase() : user.email?.charAt(0).toUpperCase() || 'U';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50",
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
                                className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer",
                                children: "✈️ TripTimeline"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/dashboard",
                                className: "text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/dashboard/trips",
                                className: "text-gray-500 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                children: "My Trips"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/dashboard/explore",
                                className: "text-gray-500 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowUserMenu(!showUserMenu),
                                className: "flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold",
                                        children: userInitials
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: user.user_metadata?.display_name || 'User'
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-4 h-4 text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`,
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
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: user.user_metadata?.display_name || 'User'
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 truncate",
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
                                            className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-3 text-gray-400",
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
                                                        lineNumber: 101,
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
                                        className: "border-t border-gray-100 py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors",
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
                                                        lineNumber: 113,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 107,
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
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
        lineNumber: 24,
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
"[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProfilePage() {
    _s();
    const { user, loading, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            if (!loading && !user) {
                router.push('/auth/login');
            }
            if (user) {
                setDisplayName(user.user_metadata?.display_name || '');
            }
        }
    }["ProfilePage.useEffect"], [
        user,
        loading,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading profile..."
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    const handleSaveProfile = async ()=>{
        setIsSaving(true);
        try {
            const { updateUserProfile } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript, async loader)");
            await updateUserProfile({
                full_name: displayName
            });
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            alert('Failed to update profile');
        } finally{
            setIsSaving(false);
        }
    };
    const handleSignOut = async ()=>{
        try {
            await signOut();
            router.push('/auth/login');
        } catch (error) {
        // Error signing out
        }
    };
    const userInitials = displayName ? displayName.split(' ').map((n)=>n[0]).join('').toUpperCase() : user.email?.charAt(0).toUpperCase() || 'U';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg",
                                        children: userInitials
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-900 mb-2",
                                        children: displayName || 'User'
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: user.email
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Display Name"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: displayName,
                                                onChange: (e)=>setDisplayName(e.target.value),
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                placeholder: "Enter your display name"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900",
                                                children: displayName || 'Not set'
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: "Email cannot be changed"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Account Created"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-4 py-3 bg-gray-50 rounded-lg text-gray-900",
                                                children: new Date(user.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 justify-center",
                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveProfile,
                                            disabled: isSaving,
                                            className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50",
                                            children: isSaving ? 'Saving...' : 'Save Changes'
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsEditing(false);
                                                setDisplayName(user.user_metadata?.display_name || '');
                                            },
                                            className: "bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditing(true),
                                    className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200",
                                    children: "Edit Profile"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-8 border-t border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignOut,
                                    className: "w-full bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200",
                                    children: "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/dashboard'),
                            className: "text-purple-600 hover:text-purple-700 font-medium transition-colors",
                            children: "← Back to Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/profile/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "61oR9sgvjRhy2Y3iWUq3s1UH8qE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_1c83b073._.js.map