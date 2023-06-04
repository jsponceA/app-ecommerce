import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/global.scss";
import * as bootstrap from "bootstrap";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
