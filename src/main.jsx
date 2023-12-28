import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RenderWrapper } from "./components/RenderWrapper";
import Router from "./routes/Router";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <Router />
    </RenderWrapper>
  </StrictMode>,
);
