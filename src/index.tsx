import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Root } from "./components/root/Root";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { CustomProvider } from "rsuite";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CustomProvider theme="light">
          <Root />
        </CustomProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
