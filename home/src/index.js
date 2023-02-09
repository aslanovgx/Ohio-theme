import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./Components/Layouts/Layout";
import "./../src/scss/style.scss";
// import './../src/scss/partials/_variable.scss'
// import './../src/scss/partials/_mixin.scss'

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
