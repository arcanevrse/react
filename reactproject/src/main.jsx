import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Favoritefood } from "./Favoritefood.jsx";
import { Button } from "./Buttontwo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <App />
    <Favoritefood />
    <Button />
  </StrictMode>,
);
