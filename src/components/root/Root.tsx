import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "../app/app";

export function Root() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  );
}
