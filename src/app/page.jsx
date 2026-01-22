"use client";

import { ReactRoot } from "./ReactRoot.jsx";
import { reactiveModel, connectToPersistence } from "./mobxReactiveModel.js";
import { SuspenseView } from "./views/suspenseView.jsx";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const Home = observer(function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {setIsClient(true); connectToPersistence(reactiveModel, reaction);}, []);

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
);

export default Home;