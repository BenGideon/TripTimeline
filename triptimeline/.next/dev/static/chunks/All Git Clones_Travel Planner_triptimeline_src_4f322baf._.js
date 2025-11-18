(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/differenceInDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TripCard({ trip, onDelete, onManageCollaborators, onEdit }) {
    _s();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.start_date);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(trip.end_date);
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])(endDate, startDate) + 1;
    const isUpcoming = startDate > new Date();
    const isOngoing = startDate <= new Date() && endDate >= new Date();
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TripCard.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setShowDropdown(false);
                }
            }
            if (showDropdown) {
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "TripCard.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
                })["TripCard.useEffect"];
            }
        }
    }["TripCard.useEffect"], [
        showDropdown
    ]);
    const getStatusBadge = ()=>{
        if (isOngoing) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary bg-opacity-20 text-secondary border border-secondary border-opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 bg-secondary rounded-full mr-1.5 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    "Ongoing"
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this);
        } else if (isUpcoming) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent bg-opacity-20 text-accent border border-accent border-opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-3 h-3 mr-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    "Upcoming"
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-primary border border-primary border-opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-3 h-3 mr-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    "Completed"
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-visible relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 travel-gradient relative overflow-hidden rounded-t-xl",
                children: [
                    trip.cover_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: trip.cover_image,
                        alt: trip.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/10"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 flex justify-between items-start",
                        children: [
                            getStatusBadge(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-white",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 right-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors",
                                children: trip.title
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-white/90",
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
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: trip.destination
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 overflow-hidden",
                children: [
                    trip.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary text-sm mb-4 line-clamp-2",
                        children: trip.description
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-primary",
                                        children: [
                                            duration,
                                            " ",
                                            duration === 1 ? "day" : "days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Dates"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-primary",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(startDate, "MMM d"),
                                            " - ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(endDate, "MMM d, yyyy")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/itinerary/${trip.id}`,
                                className: "flex-1 btn-primary py-2.5 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center",
                                children: "View Itinerary"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowDropdown(!showDropdown),
                                        className: "p-2.5 bg-accent bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-accent",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-2 w-48 glass rounded-lg shadow-md py-1 z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowDropdown(false);
                                                    if (onEdit) onEdit(trip.id);
                                                },
                                                className: "w-full text-left px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Edit Trip"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            onManageCollaborators && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowDropdown(false);
                                                    onManageCollaborators(trip.id);
                                                },
                                                className: "w-full text-left px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Manage Collaborators"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this),
                                            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowDropdown(false);
                                                    if (window.confirm(`Are you sure you want to delete "${trip.title}"? This action cannot be undone.`)) {
                                                        onDelete(trip.id);
                                                    }
                                                },
                                                className: "w-full text-left px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Delete Trip"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(TripCard, "zWWPGzKPXgH9k/Pf/TULf0SJBKU=");
_c = TripCard;
var _c;
__turbopack_context__.k.register(_c, "TripCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateTripModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CreateTripModal({ isOpen, onClose, onTripCreated }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        destination: "",
        start_date: "",
        end_date: "",
        description: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const { createTrip } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
            const tripId = await createTrip({
                title: formData.title,
                destination: formData.destination,
                start_date: formData.start_date,
                end_date: formData.end_date,
                description: formData.description || "",
                currency: "USD",
                travelers: 1
            });
            // Create the trip object to return to the dashboard
            const newTrip = {
                id: tripId,
                ...formData,
                created_at: new Date().toISOString()
            };
            onTripCreated(newTrip);
            setFormData({
                title: "",
                destination: "",
                start_date: "",
                end_date: "",
                description: ""
            });
        } catch (error) {
            console.error("Error creating trip:", error);
            // Show more detailed error message
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            alert(`Failed to create trip: ${errorMessage}`);
        } finally{
            setLoading(false);
        }
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-bg rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-accent border-opacity-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-primary",
                            children: "Create New Trip"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-accent hover:bg-opacity-10 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-secondary",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "title",
                                    className: "block text-sm font-semibold text-primary mb-2",
                                    children: "Trip Title *"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "title",
                                    name: "title",
                                    value: formData.title,
                                    onChange: handleChange,
                                    required: true,
                                    className: "w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",
                                    placeholder: "e.g., Summer in Japan"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "destination",
                                    className: "block text-sm font-semibold text-primary mb-2",
                                    children: "Destination *"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "destination",
                                    name: "destination",
                                    value: formData.destination,
                                    onChange: handleChange,
                                    required: true,
                                    className: "w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",
                                    placeholder: "e.g., Tokyo, Japan"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "start_date",
                                            className: "block text-sm font-semibold text-primary mb-2",
                                            children: "Start Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            id: "start_date",
                                            name: "start_date",
                                            value: formData.start_date,
                                            onChange: handleChange,
                                            required: true,
                                            className: "w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "end_date",
                                            className: "block text-sm font-semibold text-primary mb-2",
                                            children: "End Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            id: "end_date",
                                            name: "end_date",
                                            value: formData.end_date,
                                            onChange: handleChange,
                                            required: true,
                                            min: formData.start_date,
                                            className: "w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "description",
                                    className: "block text-sm font-semibold text-primary mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "description",
                                    name: "description",
                                    value: formData.description,
                                    onChange: handleChange,
                                    rows: 3,
                                    className: "w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none",
                                    placeholder: "Tell us about your trip..."
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-3 border border-secondary border-opacity-30 text-secondary rounded-lg font-semibold hover:bg-secondary hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all duration-200",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "flex-1 btn-primary py-3 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            "Creating..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this) : "Create Trip"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(CreateTripModal, "EF6CLb/pgRDKIS7QI7q15OTK/tI=");
_c = CreateTripModal;
var _c;
__turbopack_context__.k.register(_c, "CreateTripModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptFriendRequest",
    ()=>acceptFriendRequest,
    "acceptTripInvitation",
    ()=>acceptTripInvitation,
    "canEditTrip",
    ()=>canEditTrip,
    "declineFriendRequest",
    ()=>declineFriendRequest,
    "declineTripInvitation",
    ()=>declineTripInvitation,
    "getCurrentUserProfile",
    ()=>getCurrentUserProfile,
    "getFriendRequests",
    ()=>getFriendRequests,
    "getFriends",
    ()=>getFriends,
    "getTripCollaborators",
    ()=>getTripCollaborators,
    "getTripInvitations",
    ()=>getTripInvitations,
    "inviteToTrip",
    ()=>inviteToTrip,
    "removeFriend",
    ()=>removeFriend,
    "removeFromTrip",
    ()=>removeFromTrip,
    "searchUsers",
    ()=>searchUsers,
    "sendFriendRequest",
    ()=>sendFriendRequest,
    "updateCollaboratorRole",
    ()=>updateCollaboratorRole,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/auth.ts [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
async function getCurrentUserProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data, error } = await supabase.from('user_profiles').select('*').eq('id', user.id).single();
    if (error) {
        return null;
    }
    return data;
}
async function updateUserProfile(updates) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('user_profiles').update(updates).eq('id', user.id);
    if (error) {
        throw new Error(`Failed to update profile: ${error.message}`);
    }
}
async function searchUsers(query) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    const { data, error } = await supabase.from('user_profiles').select('*').or(`full_name.ilike.%${query}%,email.ilike.%${query}%,username.ilike.%${query}%`).neq('id', user.id).limit(10);
    if (error) {
        return [];
    }
    return data || [];
}
async function sendFriendRequest(friendId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('friends').insert({
        user_id: user.id,
        friend_id: friendId,
        status: 'pending'
    });
    if (error) {
        if (error.code === '23505' || error.message?.includes('friends_user_id_friend_id_key')) {
            const duplicateError = new Error('FRIEND_REQUEST_ALREADY_EXISTS');
            duplicateError.code = 'FRIEND_REQUEST_ALREADY_EXISTS';
            throw duplicateError;
        }
        throw new Error(`Failed to send friend request: ${error.message}`);
    }
}
async function acceptFriendRequest(requestId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    // Update the original request to accepted
    const { error: updateError } = await supabase.from('friends').update({
        status: 'accepted'
    }).eq('id', requestId).eq('friend_id', user.id);
    if (updateError) {
        throw new Error(`Failed to accept friend request: ${updateError.message}`);
    }
    // Create the reciprocal friendship
    const { data: originalRequest } = await supabase.from('friends').select('user_id, friend_id').eq('id', requestId).single();
    if (originalRequest) {
        const { error: reciprocalError } = await supabase.from('friends').insert({
            user_id: user.id,
            friend_id: originalRequest.user_id,
            status: 'accepted'
        });
        if (reciprocalError && !reciprocalError.message.includes('duplicate')) {
        // Could not create reciprocal friendship
        }
    }
}
async function declineFriendRequest(requestId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('friends').delete().eq('id', requestId).eq('friend_id', user.id);
    if (error) {
        throw new Error(`Failed to decline friend request: ${error.message}`);
    }
}
async function removeFriend(friendId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    // Remove both directions of the friendship
    const { error: error1 } = await supabase.from('friends').delete().eq('user_id', user.id).eq('friend_id', friendId);
    const { error: error2 } = await supabase.from('friends').delete().eq('user_id', friendId).eq('friend_id', user.id);
    if (error1 || error2) {
        throw new Error('Failed to remove friend');
    }
}
async function getFriends() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('friends').select(`
        *,
        friend_profile:user_profiles!friends_friend_id_fkey(*)
      `).eq('user_id', user.id).eq('status', 'accepted');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.friends" does not exist') || error.message?.includes('relation "public.user_profiles" does not exist')) {
                return [];
            }
            return [];
        }
        return data || [];
    } catch (error) {
        return [];
    }
}
async function getFriendRequests() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('friends').select(`
        id,
        status,
        created_at,
        from_user:user_profiles!friends_user_id_fkey(*),
        to_user:user_profiles!friends_friend_id_fkey(*)
      `).eq('friend_id', user.id).eq('status', 'pending');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.friends" does not exist')) {
                throw new Error('FRIENDS_TABLE_MISSING');
            }
            return [];
        }
        return data || [];
    } catch (error) {
        if (error.message === 'FRIENDS_TABLE_MISSING') {
            throw error; // Re-throw so NotificationBell can detect it
        }
        return [];
    }
}
async function inviteToTrip(tripId, userId, role = 'viewer') {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').insert({
        trip_id: tripId,
        user_id: userId,
        role: role,
        invited_by: user.id,
        status: 'pending'
    });
    if (error) {
        if (error.code === '23505' || error.message?.includes('trip_collaborators_trip_id_user_id_key')) {
            const duplicateError = new Error('TRIP_COLLABORATOR_ALREADY_INVITED');
            duplicateError.code = 'TRIP_COLLABORATOR_ALREADY_INVITED';
            throw duplicateError;
        }
        throw new Error(`Failed to invite user to trip: ${error.message}`);
    }
}
async function acceptTripInvitation(invitationId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { data, error } = await supabase.from('trip_collaborators').update({
        status: 'accepted'
    }).eq('id', invitationId).eq('user_id', user.id);
    if (error) {
        throw new Error(`Failed to accept trip invitation: ${error.message}`);
    }
}
async function declineTripInvitation(invitationId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').update({
        status: 'declined'
    }).eq('id', invitationId).eq('user_id', user.id);
    if (error) {
        throw new Error(`Failed to decline trip invitation: ${error.message}`);
    }
}
async function removeFromTrip(tripId, userId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').delete().eq('trip_id', tripId).eq('user_id', userId);
    if (error) {
        throw new Error(`Failed to remove user from trip: ${error.message}`);
    }
}
async function getTripCollaborators(tripId) {
    const { data, error } = await supabase.from('trip_collaborators').select(`
      *,
      user_profile:user_profiles!trip_collaborators_user_id_fkey(*),
      inviter_profile:user_profiles!trip_collaborators_invited_by_fkey(*)
    `).eq('trip_id', tripId).eq('status', 'accepted');
    if (error) {
        return [];
    }
    return data || [];
}
async function getTripInvitations() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('trip_collaborators').select(`
        id,
        role,
        status,
        created_at,
        trip:trips(id, title, destination, start_date, end_date)
      `).eq('user_id', user.id).eq('status', 'pending');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.trip_collaborators" does not exist') || error.message?.includes('relation "public.user_profiles" does not exist')) {
                throw new Error('FRIENDS_TABLE_MISSING');
            }
            return [];
        }
        return data || [];
    } catch (error) {
        if (error.message === 'FRIENDS_TABLE_MISSING') {
            throw error; // Re-throw so NotificationBell can detect it
        }
        return [];
    }
}
async function updateCollaboratorRole(tripId, userId, role) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').update({
        role
    }).eq('trip_id', tripId).eq('user_id', userId);
    if (error) {
        throw new Error(`Failed to update collaborator role: ${error.message}`);
    }
}
async function canEditTrip(tripId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    // Check if user is the owner
    const { data: trip } = await supabase.from('trips').select('user_id').eq('id', tripId).single();
    if (trip && trip.user_id === user.id) return true;
    // Check if user is a collaborator with editor role
    const { data: collaborator } = await supabase.from('trip_collaborators').select('role').eq('trip_id', tripId).eq('user_id', user.id).eq('status', 'accepted').single();
    return collaborator && (collaborator.role === 'editor' || collaborator.role === 'owner');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripCollaborators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TripCollaborators({ tripId, isOwner, onClose }) {
    _s();
    const [collaborators, setCollaborators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [friends, setFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showInviteModal, setShowInviteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFriend, setSelectedFriend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRole, setSelectedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('viewer');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TripCollaborators.useEffect": ()=>{
            loadData();
        }
    }["TripCollaborators.useEffect"], [
        tripId
    ]);
    const loadData = async ()=>{
        try {
            const [collaboratorsData, friendsData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTripCollaborators"])(tripId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFriends"])()
            ]);
            setCollaborators(collaboratorsData);
            // Filter out friends who are already collaborators
            const collaboratorIds = collaboratorsData.map((c)=>c.user_id);
            const availableFriends = friendsData.filter((f)=>!collaboratorIds.includes(f.friend_id));
            setFriends(availableFriends);
        } catch (error) {
            console.error('Error loading collaborators:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleInviteFriend = async ()=>{
        if (!selectedFriend) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inviteToTrip"])(tripId, selectedFriend, selectedRole);
            setShowInviteModal(false);
            setSelectedFriend('');
            setSelectedRole('viewer');
            await loadData();
            alert('Invitation sent!');
        } catch (error) {
            console.error('Error inviting friend:', error);
            if (error?.code === 'TRIP_COLLABORATOR_ALREADY_INVITED') {
                alert('This user has already been invited to the trip.');
            } else {
                alert('Failed to send invitation');
            }
        }
    };
    const handleRemoveCollaborator = async (userId)=>{
        if (window.confirm('Are you sure you want to remove this collaborator?')) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromTrip"])(tripId, userId);
                await loadData();
            } catch (error) {
                console.error('Error removing collaborator:', error);
                alert('Failed to remove collaborator');
            }
        }
    };
    const handleUpdateRole = async (userId, newRole)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCollaboratorRole"])(tripId, userId, newRole);
            setCollaborators(collaborators.map((c)=>c.user_id === userId ? {
                    ...c,
                    role: newRole
                } : c));
        } catch (error) {
            console.error('Error updating role:', error);
            alert('Failed to update role');
        }
    };
    const getRoleColor = (role)=>{
        switch(role){
            case 'owner':
                return 'bg-purple-100 text-purple-800';
            case 'editor':
                return 'bg-blue-100 text-blue-800';
            case 'viewer':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-6 w-full max-w-2xl mx-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Loading collaborators..."
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Trip Collaborators"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                isOwner && friends.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowInviteModal(true),
                        className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all",
                        children: "+ Invite Friends"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: collaborators.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "No collaborators yet"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Invite friends to collaborate on this trip!"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this) : collaborators.map((collaborator)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold text-sm",
                                                children: collaborator.user_profile?.full_name?.charAt(0) || collaborator.user_profile?.email?.charAt(0) || '?'
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-gray-900",
                                                    children: collaborator.user_profile?.full_name || 'Unknown User'
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: collaborator.user_profile?.email
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        isOwner && collaborator.role !== 'owner' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: collaborator.role,
                                            onChange: (e)=>handleUpdateRole(collaborator.user_id, e.target.value),
                                            className: "text-sm px-3 py-1 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "viewer",
                                                    children: "Viewer"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "editor",
                                                    children: "Editor"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(collaborator.role)}`,
                                            children: collaborator.role.charAt(0).toUpperCase() + collaborator.role.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, this),
                                        isOwner && collaborator.role !== 'owner' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRemoveCollaborator(collaborator.user_id),
                                            className: "text-red-500 hover:text-red-700 p-1 rounded transition-colors",
                                            title: "Remove collaborator",
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
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 198,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                            lineNumber: 193,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, collaborator.id, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                            lineNumber: 158,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                showInviteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-60",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-6 w-full max-w-md mx-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: "Invite Friend"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Select Friend"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedFriend,
                                                onChange: (e)=>setSelectedFriend(e.target.value),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Choose a friend..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    friends.map((friend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: friend.friend_id,
                                                            children: friend.friend_profile?.full_name || friend.friend_profile?.email
                                                        }, friend.id, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedRole,
                                                onChange: (e)=>setSelectedRole(e.target.value),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "viewer",
                                                        children: "Viewer - Can view the trip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "editor",
                                                        children: "Editor - Can view and edit the trip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-3 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowInviteModal(false),
                                        className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleInviteFriend,
                                        disabled: !selectedFriend,
                                        className: "flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "Send Invite"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(TripCollaborators, "RPZysilpqfSXhv9aeER9fofDOnY=");
_c = TripCollaborators;
var _c;
__turbopack_context__.k.register(_c, "TripCollaborators");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
        className: "glass sticky top-0 z-50 border-b border-opacity-20 border-secondary",
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
                                className: "text-2xl font-bold travel-gradient bg-clip-text text-transparent cursor-pointer",
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
                            className: "text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors",
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
                                className: "flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-accent hover:bg-opacity-20 p-1 transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold",
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
                                                className: "text-sm font-medium text-primary",
                                                children: user.user_metadata?.display_name || "User"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-secondary",
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
                                        className: `w-4 h-4 text-secondary transition-transform ${showUserMenu ? "rotate-180" : ""}`,
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
                                className: "absolute right-0 mt-2 w-56 glass rounded-xl shadow-lg py-2 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-b border-opacity-20 border-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-primary",
                                                children: user.user_metadata?.display_name || "User"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-secondary truncate",
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
                                            className: "flex items-center px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-3 text-secondary",
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
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                "Profile Settings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-opacity-20 border-secondary py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "flex items-center w-full px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 transition-colors",
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
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx",
                                        lineNumber: 119,
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
"[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$CreateTripModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/CreateTripModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripCollaborators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/TripCollaborators.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/DashboardHeader.tsx [app-client] (ecmascript)");
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
function DashboardPage() {
    _s();
    const { user, loading, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [trips, setTrips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tripsLoading, setTripsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendingInvitations, setPendingInvitations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCollaborators, setShowCollaborators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTripId, setSelectedTripId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingTrip, setEditingTrip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editFormData, setEditFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        start_date: "",
        end_date: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/auth/login");
            }
        }
    }["DashboardPage.useEffect"], [
        user,
        loading,
        router
    ]);
    // Load trips and pending invitations from database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            async function loadData() {
                if (user) {
                    setTripsLoading(true);
                    try {
                        const { getUserTrips } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                        const { getTripInvitations } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript, async loader)");
                        const [userTrips, invitations] = await Promise.all([
                            getUserTrips(),
                            getTripInvitations()
                        ]);
                        setTrips(userTrips);
                        setPendingInvitations(invitations);
                    } catch (error) {
                        setTrips([]);
                        setPendingInvitations([]);
                    } finally{
                        setTripsLoading(false);
                    }
                }
            }
            loadData();
        }
    }["DashboardPage.useEffect"], [
        user
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
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading your dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    const handleSignOut = async ()=>{
        try {
            await signOut();
            router.push("/auth/login");
        } catch (error) {
        // Error signing out
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "travel-gradient rounded-2xl p-12 text-white mb-12 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold mb-3",
                                children: [
                                    "Welcome back,",
                                    " ",
                                    user.user_metadata?.display_name || user.email?.split("@")[0],
                                    "! ✈️"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg opacity-90",
                                children: "Ready to plan your next adventure?"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-xl p-6 shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-primary bg-opacity-10 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-primary",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-secondary",
                                                    children: "Total Trips"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-primary",
                                                    children: trips.length
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-xl p-6 shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-secondary bg-opacity-10 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-secondary",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-secondary",
                                                    children: "Upcoming Trips"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-primary",
                                                    children: trips.filter((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(t.start_date) > new Date()).length
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    pendingInvitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-primary mb-4",
                                children: "Trip Invitations"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: pendingInvitations.map((invitation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-primary mb-2",
                                                        children: invitation.trip?.title || "Trip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-secondary mb-1",
                                                        children: [
                                                            "📍 ",
                                                            invitation.trip?.destination || "Destination"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-secondary",
                                                        children: [
                                                            "📅",
                                                            " ",
                                                            invitation.trip?.start_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(invitation.trip.start_date).toLocaleDateString() : "Date"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    invitation.inviter_profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-2",
                                                        children: [
                                                            "Invited by:",
                                                            " ",
                                                            invitation.inviter_profile.full_name || invitation.inviter_profile.email || "Someone"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: async ()=>{
                                                            try {
                                                                const { acceptTripInvitation, getTripInvitations } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript, async loader)");
                                                                const { getUserTrips } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                                                await acceptTripInvitation(invitation.id);
                                                                // Reload both trips and invitations
                                                                const [userTrips, updatedInvitations] = await Promise.all([
                                                                    getUserTrips(),
                                                                    getTripInvitations()
                                                                ]);
                                                                setTrips(userTrips);
                                                                setPendingInvitations(updatedInvitations);
                                                            } catch (error) {
                                                                alert("Failed to accept invitation");
                                                            }
                                                        },
                                                        className: "flex-1 btn-primary px-4 py-2 rounded-lg font-medium transition-colors",
                                                        children: "Accept"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: async ()=>{
                                                            try {
                                                                const { declineTripInvitation } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript, async loader)");
                                                                await declineTripInvitation(invitation.id);
                                                                setPendingInvitations(pendingInvitations.filter((inv)=>inv.id !== invitation.id));
                                                            } catch (error) {
                                                                alert("Failed to decline invitation");
                                                            }
                                                        },
                                                        className: "flex-1 glass text-secondary px-4 py-2 rounded-lg font-medium transition-colors",
                                                        children: "Decline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, invitation.id, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-primary",
                                children: "Your Trips"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/friends",
                                        className: "glass text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg",
                                        children: "👥 Friends"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreateModal(true),
                                        className: "btn-primary px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                        children: "+ Create New Trip"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    tripsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 bg-gray-200 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this) : trips.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: trips.map((trip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                trip: trip,
                                onEdit: (tripId)=>{
                                    const tripToEdit = trips.find((t)=>t.id === tripId);
                                    if (tripToEdit) {
                                        setEditingTrip(tripToEdit);
                                        const formatDateForInput = (dateStr)=>{
                                            if (dateStr.includes("T")) {
                                                return dateStr.split("T")[0];
                                            }
                                            return dateStr;
                                        };
                                        setEditFormData({
                                            title: tripToEdit.title,
                                            description: tripToEdit.description || "",
                                            start_date: formatDateForInput(tripToEdit.start_date),
                                            end_date: formatDateForInput(tripToEdit.end_date)
                                        });
                                        setShowEditModal(true);
                                    }
                                },
                                onManageCollaborators: (tripId)=>{
                                    setSelectedTripId(tripId);
                                    setShowCollaborators(true);
                                },
                                onDelete: async (tripId)=>{
                                    try {
                                        const { deleteTrip } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                        await deleteTrip(tripId);
                                        // Remove from local state
                                        setTrips(trips.filter((t)=>t.id !== tripId));
                                        // Also remove from localStorage if it exists
                                        try {
                                            localStorage.removeItem(`trip_${tripId}_edits`);
                                        } catch (error) {
                                        // Could not remove trip edits from localStorage
                                        }
                                    } catch (error) {
                                        alert("Failed to delete trip. Please try again.");
                                    }
                                }
                            }, trip.id, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "No trips yet"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Start planning your first adventure!"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCreateModal(true),
                                className: "btn-primary px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                children: "Create Your First Trip"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$CreateTripModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreateModal,
                onClose: ()=>setShowCreateModal(false),
                onTripCreated: (newTrip)=>{
                    setTrips([
                        ...trips,
                        newTrip
                    ]);
                    setShowCreateModal(false);
                }
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, this),
            showEditModal && editingTrip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Edit Trip"
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Trip Title"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editFormData.title,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    title: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: editFormData.description,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    description: e.target.value
                                                }),
                                            rows: 3,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editFormData.start_date,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    start_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editFormData.end_date,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    end_date: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEditModal(false),
                                    className: "flex-1 px-4 py-2 border border-secondary border-opacity-30 text-secondary rounded-lg hover:bg-secondary hover:bg-opacity-5 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
                                        try {
                                            if (!editFormData.start_date || !editFormData.end_date) {
                                                alert("Please fill in all fields");
                                                return;
                                            }
                                            const { updateTrip } = await __turbopack_context__.A("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/trip-service.ts [app-client] (ecmascript, async loader)");
                                            const dataToSave = {
                                                ...editFormData,
                                                start_date: editFormData.start_date,
                                                end_date: editFormData.end_date
                                            };
                                            await updateTrip(editingTrip.id, dataToSave);
                                            setTrips(trips.map((t)=>t.id === editingTrip.id ? {
                                                    ...t,
                                                    ...dataToSave
                                                } : t));
                                            setShowEditModal(false);
                                        } catch (error) {
                                            alert("Failed to update trip");
                                        }
                                    },
                                    className: "flex-1 btn-primary px-4 py-2 rounded-lg transition-all",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                            lineNumber: 470,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                    lineNumber: 405,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            showCollaborators && selectedTripId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$TripCollaborators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tripId: selectedTripId,
                isOwner: true,
                onClose: ()=>{
                    setShowCollaborators(false);
                    setSelectedTripId("");
                }
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
                lineNumber: 512,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/dashboard/page.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "J80No8qDFDknuKvxAejF2fP6baM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_src_4f322baf._.js.map