import React, { FC } from "react";
import { Container, Content } from "rsuite";
import { AppContainer } from "../app-containter/app-container";
import { MySidebar } from "../sidebar/mySidebar";
import { MyHeader } from "../header/myHeader";
import { MyFooter } from "../footer/myFooter";

export const App: FC = () => {
  return (
    <Container>
      <MySidebar />
      <Container>
        <MyHeader />
        <Content>
          <AppContainer />
        </Content>
        <MyFooter />
      </Container>
    </Container>
  );
};
