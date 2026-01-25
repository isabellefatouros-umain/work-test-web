(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    ready: false,
    restaurantsShown: [],
    filtersApplied: [],
    filterResultsPromiseState: {},
    user: null,
    setUser (user) {
        this.user = user;
    },
    setReady (value) {
        this.ready = value;
    },
    setRestaurantsShown (restaurants) {
        this.restaurantsShown = restaurants;
    },
    setFiltersApplied (filters) {
        this.filtersApplied = filters;
    },
    getRestaurantsShown () {
        return this.restaurantsShown;
    },
    getFilters () {
        return this.filters;
    },
    getFiltersApplied () {
        return this.filtersApplied;
    },
    doFilter (filterIds) {
        this.filtersApplied = filterIds;
    }
}; /*
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
                reactiveModel.setRestaurantsShown(restaurants || []);
                reactiveModel.setFiltersApplied([]);
                reactiveModel.setReady(true);
            });
            console.log("Model ready set to true");
        } catch (error) {
            console.error("Error loading restaurants:", error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                reactiveModel.setRestaurantsShown([]);
                reactiveModel.setFiltersApplied([]);
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
                reactiveModel.setRestaurantsShown(data.restaurantsShown ?? []);
                reactiveModel.setFiltersApplied(data.filtersApplied ?? []);
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
                restaurantsShown: reactiveModel.restaurantsShown,
                filtersApplied: reactiveModel.filtersApplied
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
"[project]/src/app/mobxReactiveModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
reactiveModel.doFilter({});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$firebase$2f$firestoreModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectToPersistence"])(reactiveModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reaction"]);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/mobxReactiveModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$restaurantSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/restaurantSource.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ReactRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/ReactRoot.jsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.ReactRoot
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/ReactRoot.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 11,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactRoot;
const Home = _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observer"])(_c1 = _s(function Home() {
    _s();
    console.log("Page render - restaurants:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveModel"].restaurantsShown);
    console.log("Page render - length:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveModel"].restaurantsShown?.length);
    const [testData, setTestData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.Home.useEffect": ()=>{
            // Testa API-anrop
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$restaurantSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFromApi"])("/restaurants").then({
                "Home.Home.useEffect": (data)=>{
                    console.log("API test successful:", data);
                    setTestData(data);
                }
            }["Home.Home.useEffect"]).catch({
                "Home.Home.useEffect": (error)=>{
                    console.error("API test failed:", error);
                }
            }["Home.Home.useEffect"]);
        }
    }["Home.Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Debug Info:"
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Model ready: ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveModel"].ready ? "Yes" : "No"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Restaurants in model: ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveModel"].restaurantsShown?.length || 0
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "API test data: ",
                    testData ? `${testData.length} restaurants` : "Loading..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                style: {
                    margin: '2rem 0'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactRoot, {
                model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mobxReactiveModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveModel"]
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}, "9CqUjDOR9Dj3raXtj6/HVz/XrZE=")), "9CqUjDOR9Dj3raXtj6/HVz/XrZE=");
_c2 = Home;
const __TURBOPACK__default__export__ = Home;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ReactRoot");
__turbopack_context__.k.register(_c1, "Home$observer");
__turbopack_context__.k.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 /*"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "./mobxReactiveModel.js";

export default function Home() {
  console.log("Model:", reactiveModel);
  console.log("Model ready:", reactiveModel.ready);
  
  return (
    <div>
      <h2>Debug Info:</h2>
      <p>Model ready: {reactiveModel.ready ? "Yes" : "No"}</p>
      <p>Model exists: {reactiveModel ? "Yes" : "No"}</p>
      
      <hr style={{ margin: '2rem 0' }} />
      
      <ReactRoot model={reactiveModel} />
    </div>
  );
}*/ }),
]);

//# sourceMappingURL=src_app_cc6dafe1._.js.map