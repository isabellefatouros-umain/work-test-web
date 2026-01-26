"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "./mobxReactiveModel.js";
import { connectToPersistence } from "./firebase/firestoreModel";
import { SuspenseView } from "./views/suspenseView.jsx";
import { reaction } from "mobx";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const persistenceInitialized = useRef(false);

  useEffect(() => {
    setIsClient(true);
    if (!persistenceInitialized.current) {
      persistenceInitialized.current = true;
      connectToPersistence(reactiveModel, reaction);
    }
  }, []);

  if (!isClient) {
    return (
      <SuspenseView model={reactiveModel} />
    );
  }
  return (
          <div>
            <ReactRoot model={reactiveModel} />
          </div>
        );
  }
