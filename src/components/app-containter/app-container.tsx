import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "rsuite";
import { PATHS } from "../contrib/const/route-paths";
import { Menu } from "../menu/menu";

export const AppContainer: FC = () => {
  return (
    <div className="body">
      <Container>
        <Routes>
          <Route path={PATHS.MENU} element={<Menu />} />
        </Routes>
      </Container>
    </div>
  );
};
