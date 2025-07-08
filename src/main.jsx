import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import "./vars.css";

import "@fontsource/outfit";
import "@fontsource/roboto";

import { ThemeProvider } from "./context/ThemeContext.jsx"; // ✅ Use .jsx if file is named ThemeContext.jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
