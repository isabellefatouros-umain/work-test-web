import { API_URL } from "./apiConfig"

export function getDataFromApi( apiEndpoint){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw Error;};
    };

    function getResultsACB(json){
        return json.results;
    };

    return fetch(`${ API_URL }`+`${ apiEndpoint }`).then(gotResponseACB).then(getResultsACB);
};