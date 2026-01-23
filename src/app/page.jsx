"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel } from "./mobxReactiveModel.js";
import { connectToPersistence } from "./firebase/firestoreModel";
import { SuspenseView } from "./views/suspenseView.jsx";
import { reaction } from "mobx";
import { useEffect, useState, useRef } from "react";

const Home = function Home() {
  const [isClient, setIsClient] = useState(false);
  const persistenceInitialized = useRef(false);

  useEffect(() => {
    setIsClient(true);
    if (!persistenceInitialized.current) {
      persistenceInitialized.current = true;
      const disposer = connectToPersistence(reactiveModel, reaction);

      return () => {
        if (disposer) {
          disposer();
        }
      };
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

export default Home;
