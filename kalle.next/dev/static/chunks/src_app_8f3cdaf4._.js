(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/presenters/restaurantFilterPresenter.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/presenters/restaurantFilterPresenter.jsx'\n\nExpected '</', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/views/suspenseView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuspenseView",
    ()=>SuspenseView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function SuspenseView(props) {
    if (!props.promise) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "no data"
        }, void 0, false, {
            fileName: "[project]/src/app/views/suspenseView.jsx",
            lineNumber: 5,
            columnNumber: 16
        }, this);
    }
    if (props.promise && props.error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: props.error.toString()
        }, void 0, false, {
            fileName: "[project]/src/app/views/suspenseView.jsx",
            lineNumber: 7,
            columnNumber: 16
        }, this);
    }
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://brfenergi.se/iprog/loading.gif"
    }, void 0, false, {
        fileName: "[project]/src/app/views/suspenseView.jsx",
        lineNumber: 9,
        columnNumber: 12
    }, this);
}
_c = SuspenseView;
;
var _c;
__turbopack_context__.k.register(_c, "SuspenseView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ReactRoot.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactRoot",
    ()=>ReactRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$presenters$2f$restaurantFilterPresenter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/presenters/restaurantFilterPresenter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/suspenseView.jsx [app-client] (ecmascript)");
;
;
;
;
const ReactRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observer"])(_c = function ReactRoot(props) {
    console.log("ReactRoot props.model:", props.model);
    console.log("ReactRoot props.model.ready:", props.model.ready);
    if (!props.model.ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuspenseView"], {
                promise: "",
                model: props.model
            }, void 0, false, {
                fileName: "[project]/src/app/ReactRoot.jsx",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ReactRoot.jsx",
            lineNumber: 11,
            columnNumber: 20
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flexParent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$presenters$2f$restaurantFilterPresenter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestaurantFilter"], {
            model: props.model
        }, void 0, false, {
            fileName: "[project]/src/app/ReactRoot.jsx",
            lineNumber: 18,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ReactRoot.jsx",
        lineNumber: 17,
        columnNumber: 13
    }, this);
});
_c1 = ReactRoot;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactRoot$observer");
__turbopack_context__.k.register(_c1, "ReactRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resolvePromise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api/apiConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL
]);
const API_URL = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api/restaurantSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataFromApi",
    ()=>getDataFromApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiConfig.js [app-client] (ecmascript)");
;
function getDataFromApi(apiEndpoint) {
    function gotResponseACB(response) {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        }
        ;
    }
    ;
    function getResultsACB(json) {
        console.log("Full API response:", json);
        return json.restaurants || json.results || [];
    }
    ;
    return fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}` + `${apiEndpoint}`).then(gotResponseACB).then(getResultsACB);
}
; /*
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/RestaurantModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "model",
    ()=>model
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resolvePromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resolvePromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$restaurantSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/restaurantSource.js [app-client] (ecmascript)");
;
;
const model = {
    user: null,
    ready: false,
    allRestaurants: [],
    topFilters: [],
    sideFilters: [],
    availableFilters: {
        foodCategories: [
            "Hamburger",
            "Pizza",
            "Taco's",
            "Coffee"
        ],
        deliveryTimes: [
            "0-10 min",
            "10-30 min",
            "30-60 min",
            "1 hour+"
        ],
        priceRanges: [
            "$",
            "$$",
            "$$$",
            "$$$$"
        ]
    },
    availableSideFilters: [
        "Hamburgers",
        "Pizza",
        "Taco",
        "Coffee",
        "Fries",
        "Breakfast"
    ],
    filterResultsPromiseState: {
        promise: null,
        data: null,
        error: null
    },
    setUser (user) {
        this.user = user;
    },
    setReady (value) {
        this.ready = value;
    },
    setRestaurants (restaurants) {
        this.allRestaurants = restaurants;
    },
    setTopFilter (topfilter) {
        this.topFilters = topfilter;
    },
    setSideFilter (sidefilter) {
        this.sideFilters = sidefilter;
    },
    getRestaurants () {
        return this.allRestaurants;
    },
    toggleTopFilter (filter) {
        if (this.topFilters.includes(filter)) {
            this.topFilters = this.topFilters.filter((f)=>f !== filter);
        } else {
            this.topFilters.push(filter);
        }
    },
    toggleSideFilter (filter) {
        if (this.sideFilters.includes(filter)) {
            this.sideFilters = this.sideFilters.filter((f)=>f !== filter);
        } else {
            this.sideFilters.push(filter);
        }
    },
    getRestaurantsShown () {
        if (!this.filterResultsPromiseState.data) return [];
        let filtered = this.filterResultsPromiseState.data;
        if (this.topFilters.length > 0) {
            filtered = filtered.filter((restaurant)=>this.topFilters.some((filter)=>restaurant.filter_ids && restaurant.filter_ids.includes(filter)));
        }
        if (this.sideFilters.length > 0) {
            filtered = filtered.filter((restaurant)=>{
                return this.sideFilters.some((filter)=>{
                    if (restaurant.filter_ids && restaurant.filter_ids.includes(filter)) {
                        return true;
                    }
                    if (filter.includes("min") || filter.includes("hour")) {
                        return true;
                    }
                    if (restaurant.price_range_id === filter) {
                        return true;
                    }
                    return false;
                });
            });
        }
        return filtered;
    }
} /*
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
*/ ;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/firebase/firebaseConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/firebase/firestoreModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "connectToPersistence",
    ()=>connectToPersistence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/firebase/firebaseConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$restaurantSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/restaurantSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firebaseConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseConfig"]);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const COLLECTION = "restaurants";
async function connectToPersistence(reactiveModel, watcherFunction) {
    async function loadInitialData() {
        console.log("Loading initial data...");
        try {
            const restaurants = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$restaurantSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFromApi"])("/restaurants");
            console.log("Loaded restaurants:", restaurants);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                reactiveModel.setRestaurants(restaurants || []);
                reactiveModel.setTopFilter([]);
                reactiveModel.setSideFilter([]);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                reactiveModel.setRestaurants([]);
                reactiveModel.setTopFilter([]);
                reactiveModel.setSideFilter([]);
                reactiveModel.setReady(true);
            });
        }
    }
    async function handleSnapShotACB(snapshot) {
        const data = snapshot.data();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            if (!data) {
                loadInitialData();
            } else {
                reactiveModel.setRestaurants(data.restaurants ?? []);
                reactiveModel.setTopFilter(data.topFilters ?? []);
                reactiveModel.setSideFilter(data.sideFilters ?? []);
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
            reactiveModel.ready,
            reactiveModel.restaurantsShown,
            reactiveModel.filtersApplied
        ];
    }
    async function giveDataToFireBaseACB() {
        if (!reactiveModel.ready || !auth.currentUser) {
            return;
        }
        try {
            const docReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, COLLECTION, auth.currentUser.uid);
            const data = {
                restaurants: reactiveModel.restaurants,
                topFilters: reactiveModel.topFilters,
                sideFilters: reactiveModel.sideFilters
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docReference, data);
            console.log("Data saved to Firebase");
        } catch (error) {
            console.log("Error saving to Firebase:", error);
        }
    }
    if (auth.currentUser) {
        const docReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, COLLECTION, auth.currentUser.uid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docReference).then(handleSnapShotACB).catch(handleGetErrorACB);
    } else {
        console.log("No user logged in, loading from API only");
        await loadInitialData();
    }
    return watcherFunction(checkModelPropertiesACB, giveDataToFireBaseACB);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/mobxReactiveModel.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkIdStateACB",
    ()=>checkIdStateACB,
    "reactiveModel",
    ()=>reactiveModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$RestaurantModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/RestaurantModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/firebase/firestoreModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-client] (ecmascript)");
;
;
;
const reactiveModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$RestaurantModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["model"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configure"])({
    enforceActions: "always"
});
function checkIdStateACB() {
    return reactiveModel.filtersApplied;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ReactRoot$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ReactRoot.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/mobxReactiveModel.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/firebase/firestoreModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/views/suspenseView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Home = _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observer"])(_c = _s(function Home() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.Home.useEffect": ()=>{
            setIsClient(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectToPersistence"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactiveModel"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reaction"]);
        }
    }["Home.Home.useEffect"], []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$views$2f$suspenseView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuspenseView"], {
            model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactiveModel"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ReactRoot$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactRoot"], {
            model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reactiveModel"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 21,
        columnNumber: 11
    }, this);
}, "k460N28PNzD7zo1YW47Q9UigQis=")), "k460N28PNzD7zo1YW47Q9UigQis=");
_c1 = Home;
const __TURBOPACK__default__export__ = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Home$observer");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_8f3cdaf4._.js.map