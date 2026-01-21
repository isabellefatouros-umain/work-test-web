"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "./mobxReactiveModel.js";
import { getDataFromApi } from "./api/restaurantSource.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [testData, setTestData] = useState(null);
  
  useEffect(() => {
    // Testa API-anrop
    getDataFromApi("/restaurants")
      .then(data => {
        console.log("API test successful:", data);
        setTestData(data);
      })
      .catch(error => {
        console.error("API test failed:", error);
      });
  }, []);

  return (
    <div>
      <h2>Debug Info:</h2>
      <p>Model ready: {reactiveModel.ready ? "Yes" : "No"}</p>
      <p>Restaurants in model: {reactiveModel.restaurantsShown?.length || 0}</p>
      <p>API test data: {testData ? `${testData.length} restaurants` : "Loading..."}</p>
      
      <hr style={{ margin: '2rem 0' }} />
      
      <ReactRoot model={reactiveModel} />
    </div>
  );
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
}*/