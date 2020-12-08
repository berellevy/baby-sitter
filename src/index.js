import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { GoogleAuthProvider } from "./auth/useGoogleLogin";
import { BackendAuthProvider } from "./auth/useBackendLogin";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <GoogleAuthProvider>
        <BackendAuthProvider>
          <App />
        </BackendAuthProvider>
      </GoogleAuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
