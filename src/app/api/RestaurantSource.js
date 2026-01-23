import { API_URL } from "./apiConfig"

export function getDataFromApi( apiEndpoint){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        };
    };

    function getResultsACB(json){
        console.log("Full API response:", json);
        return json.restaurants || json.filters || json.results || [];
    };

    return fetch(`${ API_URL }`+`${ apiEndpoint }`).then(gotResponseACB).then(getResultsACB);
};

/*
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