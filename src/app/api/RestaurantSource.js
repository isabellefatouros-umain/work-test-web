import { API_URL } from "./apiConfig"

export function getRestaurantsApi(){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        };
    };

    function getResultsACB(json){
        console.log("Full API response:", json);
        return json.restaurants || [];
    };
    return fetch(`${ API_URL }`+`/restaurants`).then(gotResponseACB).then(getResultsACB);
};

export function getFoodFiltersApi(){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        };
    };

    function getResultsACB(json){
        console.log("Full API response:", json);
        return json.filters || [];
    };
    return fetch(`${ API_URL }`+`/filter`).then(gotResponseACB).then(getResultsACB);
};

export function getPriceRangeApi(id){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        };
    };

    function getResultsACB(json){
        console.log("Full API price range response:", json);
        return json || [];
    };
    return fetch(`${ API_URL }`+`/price-range/${id}`).then(gotResponseACB).then(getResultsACB);
};

export function getIsOpenApi(id){
    function gotResponseACB(response){
        if (response.status === 200){ 
            return response.json();
        } else {
            throw new Error(`API returned status ${response.status}`);
        };
    };

    function getResultsACB(json){
        console.log("Full API response:", json);
        return json.is_currently_open || [];
    };
    return fetch(`${ API_URL }`+`/open/${id}`).then(gotResponseACB).then(getResultsACB);
};

/*
Restaurant object structure:
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

Filter object structure:
{
  "filters": [
    {
      "id": "string",
      "name": "string",
      "image_url": "string"
    }
  ]
}

IsOpen object structure:
{
  "restaurant_id": "string",
  "is_currently_open": "boolean"
}
*/