import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/global.scss";
import * as bootstrap from "bootstrap";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-right"
          draggable
          pauseOnHover
          theme="colored"
        />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
