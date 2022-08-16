import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "rsuite";
import { PATHS } from "../contrib/const/route-paths";
import { Menu } from "../menu/Menu";
import { Dashboard } from "../dashboard/Dashboard";
import { User } from "../user/User";

export const AppContainer: FC = () => {
  return (
    <Container style={{ height: "100%" }}>
      <Routes>
        <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={PATHS.MENU} element={<Menu />} />
        <Route path={PATHS.USER} element={<User />} />
      </Routes>
    </Container>
  );
};
