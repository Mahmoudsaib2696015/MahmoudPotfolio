import React from "react";
import { hydrate, render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'


import App from "./App";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}

serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
