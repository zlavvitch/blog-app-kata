import { Suspense } from "react";

import { Spinner } from "../shared";
import { AppHeader } from "../widgets/AppHeader";

import { AppRouting } from "./router";

import "./index.scss";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="app">
        <AppHeader />
        <AppRouting />
      </div>
    </Suspense>
  );
}

export default App;
