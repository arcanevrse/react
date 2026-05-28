import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Favoritefood } from "./Favoritefood.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <App />
    <Favoritefood />
  </StrictMode>,
);
