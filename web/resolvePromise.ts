export function resolvePromise(prms: Promise<any>, promiseState: { promise: any; data: null; error: null; }){
    console.log("Resolving promise:", prms);
    console.log("With promise state:", promiseState);

    promiseState.promise= prms;
    promiseState.data= null;
    promiseState.error= null;

    function saveDataACB(promiseResult: any){
        console.log(promiseResult);
        if(promiseState.promise === prms){
            promiseState.data = promiseResult;
        };
    };

    function errorACB(promise: any){
        console.log(promise);
        console.log(prms);
        console.log(promiseState);
        if(promiseState.promise===prms){
            promiseState.error = promise;
        };
    };

    if(prms){
        prms.then(saveDataACB).catch(errorACB);
    };
};