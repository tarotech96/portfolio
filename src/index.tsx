import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import "./assets/js/index.js";
import Loading from "./components/common/Loading";

const LazyApp = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <RecoilRoot>
      <LazyApp />
    </RecoilRoot>
  </Suspense>,
  document.getElementById("root")
);
