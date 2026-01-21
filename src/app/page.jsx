"use client";

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
}