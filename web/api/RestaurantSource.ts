import { API_URL } from "./apiConfig"

export function getDataFromApi( apiEndpoint: string ){
    function gotResponseACB(response: { status: number; json: () => any; }){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw Error;};
    };

    function getResultsACB(json: { results: any; }){
        return json.results;
    };

    return fetch(`${ API_URL }`+`${ apiEndpoint }`).then(gotResponseACB).then(getResultsACB);
};