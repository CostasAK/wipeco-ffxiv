import "./index.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RenderWrapper } from "./components/RenderWrapper";
import Router from "./routes/Router";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </RenderWrapper>
  </StrictMode>,
);
