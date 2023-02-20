import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./Components/Layout/Layout";

import "./../../classic/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../classic/node_modules/bootstrap/dist/js/bootstrap";
import "./../../classic/node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
