"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "./mobxReactiveModel.js";

export default function Home() {
  return <ReactRoot model={reactiveModel} />;
}