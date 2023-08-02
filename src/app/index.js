import { Suspense } from "react";

import { Spinner } from "../shared";

import Routing from "./appRouting";

import "./index.scss";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="app">
        <Routing />
      </div>
    </Suspense>
  );
}

export default App;
