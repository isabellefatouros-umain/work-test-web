module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/views/suspenseView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuspenseView",
    ()=>SuspenseView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function SuspenseView(props) {
    if (!props.promise) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "no data"
        }, void 0, false, {
            fileName: "[project]/src/app/views/suspenseView.jsx",
            lineNumber: 5,
            columnNumber: 16
        }, this);
    }
    if (props.promise && props.error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: props.error.toString()
        }, void 0, false, {
            fileName: "[project]/src/app/views/suspenseView.jsx",
            lineNumber: 7,
            columnNumber: 16
        }, this);
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://brfenergi.se/iprog/loading.gif"
    }, void 0, false, {
        fileName: "[project]/src/app/views/suspenseView.jsx",
        lineNumber: 9,
        columnNumber: 12
    }, this);
}
;
}),
"[project]/src/app/components/restaurantCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestaurantCard",
    ()=>RestaurantCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function RestaurantCard({ restaurant }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "restaurant-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "restaurant-name",
                children: restaurant.name
            }, void 0, false, {
                fileName: "[project]/src/app/components/restaurantCard.jsx",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "restaurant-open",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "lower-text",
                    children: restaurant.is_currently_open ? "Open" : "Closed"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/restaurantCard.jsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/restaurantCard.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "restaurant-delivery-time",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "lower-text",
                    children: [
                        restaurant.delivery_time_minutes,
                        " min"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/restaurantCard.jsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/restaurantCard.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/restaurantCard.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/views/filterResultsView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterResultsView",
    ()=>FilterResultsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$restaurantCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/restaurantCard.jsx [app-ssr] (ecmascript)");
;
;
;
function FilterResultsView(props) {
    if (!props.restaurants) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Laddar restauranger..."
        }, void 0, false, {
            fileName: "[project]/src/app/views/filterResultsView.jsx",
            lineNumber: 6,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "results-parent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "results-title",
                children: "Restaurant’s"
            }, void 0, false, {
                fileName: "[project]/src/app/views/filterResultsView.jsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-content",
                children: props.restaurants.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Inga restauranger matchar dina filter."
                }, void 0, false, {
                    fileName: "[project]/src/app/views/filterResultsView.jsx",
                    lineNumber: 15,
                    columnNumber: 21
                }, this) : props.restaurants.map((restaurant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$restaurantCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RestaurantCard"], {
                        restaurant: restaurant
                    }, restaurant.id, false, {
                        fileName: "[project]/src/app/views/filterResultsView.jsx",
                        lineNumber: 18,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/views/filterResultsView.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/views/filterResultsView.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/src/app/views/topbarFilterView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopbarFilterView",
    ()=>TopbarFilterView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function TopbarFilterView(props) {
    console.log("Topbar filters:", props.availableFilters, props.activeFilters);
    if (!props.availableFilters || !props.activeFilters) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "topbar-filter-parent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "topbar-filter-cards",
            children: props.availableFilters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "topbar-filter-card " + (props.activeFilters.includes(filter.id) ? "active" : ""),
                    onClick: ()=>props.onFilterClick(filter.id),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: filter.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/views/topbarFilterView.jsx",
                        lineNumber: 19,
                        columnNumber: 25
                    }, this)
                }, filter.id, false, {
                    fileName: "[project]/src/app/views/topbarFilterView.jsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/views/topbarFilterView.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/views/topbarFilterView.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/src/app/views/sidebarFilterView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarFilterView",
    ()=>SidebarFilterView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function SidebarFilterView(props) {
    if (!props.availableFilters || !props.activeFilters) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar-filter-parent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sidebar-filter-title",
                children: "Filter"
            }, void 0, false, {
                fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-filter-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-food-category sidebar-filter-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "filter-subcategory-title",
                                children: "Food Category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            (props.availableFilters.foodCategories || []).map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : ""),
                                    onClick: ()=>props.onFilterClick(filter.id),
                                    children: filter.name
                                }, filter.id, false, {
                                    fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                    lineNumber: 16,
                                    columnNumber: 21
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-delivery-time sidebar-filter-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "filter-subcategory-title",
                                children: "Delivery Time"
                            }, void 0, false, {
                                fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            (props.availableFilters.deliveryTimes || []).map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : ""),
                                    onClick: ()=>props.onFilterClick(filter.id),
                                    children: filter.name
                                }, filter.id, false, {
                                    fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                    lineNumber: 28,
                                    columnNumber: 21
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-price-range sidebar-filter-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "filter-subcategory-title",
                                children: "Price Range"
                            }, void 0, false, {
                                fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            (props.availableFilters.priceRanges || []).map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "filter-pill " + (props.activeFilters.includes(filter.id) ? "active" : ""),
                                    onClick: ()=>props.onFilterClick(filter.id),
                                    children: filter.name
                                }, filter.id, false, {
                                    fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                                    lineNumber: 40,
                                    columnNumber: 21
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/views/sidebarFilterView.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/views/sidebarFilterView.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/src/app/presenters/restaurantFilterPresenter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestaurantFilter",
    ()=>RestaurantFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/suspenseView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$filterResultsView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/filterResultsView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$topbarFilterView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/topbarFilterView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$sidebarFilterView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/sidebarFilterView.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const RestaurantFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(function RestaurantFilterRender(props) {
    function onFilterClickACB(filter) {
        props.model.toggleFilter(filter);
    }
    console.log("Model filters:", props.model.availableFilters);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$sidebarFilterView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarFilterView"], {
                onFilterClick: onFilterClickACB,
                activeFilters: props.model.appliedFilters,
                availableFilters: props.model.availableFilters
            }, void 0, false, {
                fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                lineNumber: 19,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topbar-results-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$topbarFilterView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TopbarFilterView"], {
                        onFilterClick: onFilterClickACB,
                        activeFilters: props.model.appliedFilters,
                        availableFilters: props.model.getAllFiltersAsArray()
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "results-layout",
                        children: props.model.filterResultsPromiseState.data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$filterResultsView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterResultsView"], {
                            restaurants: props.model.getRestaurantsShown()
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                            lineNumber: 33,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuspenseView"], {
                            promise: props.model.filterResultsPromiseState.promise,
                            error: props.model.filterResultsPromiseState.error
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                            lineNumber: 37,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
                lineNumber: 25,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/presenters/restaurantFilterPresenter.jsx",
        lineNumber: 18,
        columnNumber: 13
    }, this);
});
}),
"[project]/src/app/ReactRoot.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactRoot",
    ()=>ReactRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$presenters$2f$restaurantFilterPresenter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/presenters/restaurantFilterPresenter.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/suspenseView.jsx [app-ssr] (ecmascript)");
;
;
;
;
const ReactRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(function ReactRoot(props) {
    console.log("All restaurants:", props.model.allRestaurants);
    if (!props.model.ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Model not ready..."
                }, void 0, false, {
                    fileName: "[project]/src/app/ReactRoot.jsx",
                    lineNumber: 12,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuspenseView"], {
                    promise: props.model.filterResultsPromiseState.promise,
                    error: props.model.filterResultsPromiseState.error
                }, void 0, false, {
                    fileName: "[project]/src/app/ReactRoot.jsx",
                    lineNumber: 13,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ReactRoot.jsx",
            lineNumber: 11,
            columnNumber: 17
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$presenters$2f$restaurantFilterPresenter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RestaurantFilter"], {
            model: props.model
        }, void 0, false, {
            fileName: "[project]/src/app/ReactRoot.jsx",
            lineNumber: 20,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ReactRoot.jsx",
        lineNumber: 19,
        columnNumber: 13
    }, this);
});
}),
"[project]/src/app/resolvePromise.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvePromise",
    ()=>resolvePromise
]);
function resolvePromise(prms, promiseState) {
    console.log("Resolving promise:", prms);
    console.log("With promise state:", promiseState);
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;
    function saveDataACB(promiseResult) {
        console.log(promiseResult);
        if (promiseState.promise === prms) {
            promiseState.data = promiseResult;
        }
        ;
    }
    ;
    function errorACB(promise) {
        console.log(promise);
        console.log(prms);
        console.log(promiseState);
        if (promiseState.promise === prms) {
            promiseState.error = promise;
        }
        ;
    }
    ;
    if (prms) {
        prms.then(saveDataACB).catch(errorACB);
    }
    ;
}
;
}),
"[project]/src/app/RestaurantModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "model",
    ()=>model
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resolvePromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resolvePromise.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../api/restaurantSource.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
;
;
;
const model = {
    ready: false,
    allRestaurants: [],
    availableFilters: {
        foodCategories: [],
        deliveryTimes: [],
        priceRanges: []
    },
    appliedFilters: [],
    filterResultsPromiseState: {
        promise: null,
        data: null,
        error: null
    },
    setReady (value) {
        this.ready = value;
    },
    setRestaurants (restaurants) {
        this.allRestaurants = restaurants;
        this.filterResultsPromiseState.data = restaurants;
    },
    setFilter (filterData) {
        this.availableFilters = filterData;
    },
    getRestaurants () {
        return this.allRestaurants;
    },
    async loadRestaurants () {
        const promise = getRestaurantsApi();
        console.log("Loaded restaurants", promise); //debug
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resolvePromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvePromise"])(promise, this.filterResultsPromiseState);
        try {
            const data = await promise;
            this.setRestaurants(data);
            await this.loadFilters();
        } catch (error) {
            console.error("Error loading restaurants:", error);
        }
    },
    async loadFilters () {
        const filters = await getFiltersApi();
        console.log("Fetched filters:", filters); //debug
        const categorized = {
            foodCategories: [],
            deliveryTimes: [],
            priceRanges: []
        };
        filters.forEach((f)=>{
            if (!f.includes('min') && !f.includes('$')) categorized.foodCategories.push(f);
            if (f.includes('min')) categorized.deliveryTimes.push(f);
            if (f.includes('$')) categorized.priceRanges.push(f);
        });
        this.availableFilters = categorized;
    },
    getFilterIdsFromRestaurants (restaurants) {
        const allFilterIds = new Set();
        restaurants.forEach((restaurant)=>{
            if (restaurant.filter_ids) {
                restaurant.filter_ids.forEach((filterId)=>{
                    allFilterIds.add(filterId);
                });
            }
        });
        const filterArray = Array.from(allFilterIds);
        const categorizedFilters = {
            foodCategories: filterArray.filter((f)=>!f.includes('min') && !f.includes('$')),
            deliveryTimes: filterArray.filter((f)=>f.includes('min')),
            priceRanges: filterArray.filter((f)=>f.includes('$'))
        };
        return categorizedFilters;
    },
    toggleFilter (filter) {
        console.log("Applied filters:", this.appliedFilters);
        if (this.appliedFilters.includes(filter)) {
            this.appliedFilters = this.appliedFilters.filter((f)=>f !== filter);
        } else {
            this.appliedFilters = [
                ...this.appliedFilters,
                filter
            ];
        }
    },
    getRestaurantsShown () {
        let filtered = this.filterResultsPromiseState.data || [];
        if (this.appliedFilters.length > 0) {
            filtered = filtered.filter((r)=>this.appliedFilters.some((f)=>r.filter_ids?.includes(f)));
        }
        return filtered;
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAutoObservable"])(model); /*
one restaurant object structure:
{
  "id": "string",
  "name": "string",
  "rating": "number",
  "filter_ids": [
    "string"
  ],
  "image_url": "string",
  "delivery_time_minutes": "number",
  "price_range_id": "string"
}
*/ 
}),
"[project]/src/app/mobxReactiveModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkIdStateACB",
    ()=>checkIdStateACB,
    "reactiveModel",
    ()=>reactiveModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$RestaurantModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/RestaurantModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
;
;
const reactiveModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observable"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$RestaurantModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["model"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configure"])({
    enforceActions: "always"
});
function checkIdStateACB() {
    return reactiveModel.filtersApplied;
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/firebase/firebaseConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseConfig",
    ()=>firebaseConfig
]);
const firebaseConfig = {
    apiKey: "AIzaSyBrxT8CT87m2p7c0_rckJJ7DG4J-0J1aag",
    authDomain: "munchies-umain-f1cb1.firebaseapp.com",
    projectId: "munchies-umain-f1cb1",
    storageBucket: "munchies-umain-f1cb1.firebasestorage.app",
    messagingSenderId: "950529560244",
    appId: "1:950529560244:web:65180ab076ac4155ca51e1"
};
}),
"[project]/src/app/firebase/firestoreModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToPersistence",
    ()=>connectToPersistence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/firebase/firebaseConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
;
;
;
;
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firebaseConfig"]);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const COLLECTION = "restaurants";
async function connectToPersistence(reactiveModel, watcherFunction) {
    console.log("connectToPersistence called"); //debug
    async function loadInitialData() {
        console.log("Loading initial data..."); //debug
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                reactiveModel.setRestaurants(reactiveModel.allRestaurants);
                reactiveModel.setFilter(reactiveModel.availableFilters);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                reactiveModel.setRestaurants(reactiveModel.allRestaurants);
                reactiveModel.setFilter(reactiveModel.availableFilters);
                reactiveModel.setReady(true);
            });
        }
    }
    async function handleSnapShotACB(snapshot) {
        const data = snapshot.data();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            if (!data) {
                loadInitialData();
            } else {
                reactiveModel.setRestaurants(reactiveModel.allRestaurants);
                reactiveModel.setFilter(data.appliedFilters ?? reactiveModel.availableFilters);
                reactiveModel.setReady(true);
                console.log("Model ready set to true (from Firebase)");
            }
        });
    }
    function handleGetErrorACB(error) {
        console.log("Error getting snapshot:", error);
        loadInitialData();
    }
    function checkModelPropertiesACB() {
        return [
            reactiveModel.ready
        ];
    }
    async function giveDataToFireBaseACB() {
        if (!reactiveModel.ready) {
            return;
        }
        try {
            const docReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, COLLECTION, "SavedData");
            const data = {
                restaurants: reactiveModel.allRestaurants,
                filters: reactiveModel.availableFilters
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(docReference, data);
            console.log("Data saved to Firebase");
        } catch (error) {
            console.log("Error saving to Firebase:", error);
        }
    }
    const docReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(db, COLLECTION, "SavedData");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
    return watcherFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
}
}),
"[project]/src/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ReactRoot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ReactRoot.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/mobxReactiveModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/firebase/firestoreModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/suspenseView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Home = function Home() {
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const persistenceInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        if (!persistenceInitialized.current) {
            persistenceInitialized.current = true;
            const disposer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectToPersistence"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveModel"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reaction"]);
            return ()=>{
                if (disposer) {
                    disposer();
                }
            };
        }
    }, []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuspenseView"], {
            model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveModel"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ReactRoot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactRoot"], {
            model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveModel"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 34,
        columnNumber: 11
    }, this);
};
const __TURBOPACK__default__export__ = Home;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13859d81._.js.map