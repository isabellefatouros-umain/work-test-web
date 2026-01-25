module.exports = [
"[project]/src/app/ReactRoot.jsx [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_app_dc1be0af._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/app/ReactRoot.jsx [app-ssr] (ecmascript)");
    });
});
}),
];