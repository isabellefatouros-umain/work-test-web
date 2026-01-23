export function resolvePromise(prms, promiseState){
    console.log("Resolving promise:", prms);
    console.log("With promise state:", promiseState);

    promiseState.promise= prms;
    promiseState.data= null;
    promiseState.error= null;

    function saveDataACB(promiseResult){
        console.log(promiseResult);
        if(promiseState.promise === prms){
            promiseState.data = promiseResult;
        };
    };

    function errorACB(promise){
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
