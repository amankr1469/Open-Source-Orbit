import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/GithubContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
