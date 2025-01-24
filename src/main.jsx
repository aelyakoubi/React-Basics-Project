import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Rendering the App component which will handle the routes */}
  </React.StrictMode>
);
