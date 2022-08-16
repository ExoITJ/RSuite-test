import React, { FC } from "react";
import { Container, Content } from "rsuite";
import { AppContainer } from "../app-containter/AppContainer";
import { MySidebar } from "../sidebar/MySidebar";
import { MyHeader } from "../header/MyHeader";
import { MyFooter } from "../footer/MyFooter";
import { CustomProvider } from "rsuite";
import { useAppSelector } from "../../store/store";
import { selectDarkTheme } from "../header/MyHeaderSlice";

export const App: FC = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);

  return (
    <CustomProvider theme={isDarkTheme}>
      <Container style={{ position: "fixed", width: "100%", height: "100%" }}>
        <MySidebar />
        <Container>
          <MyHeader />
          <Content style={{ overflow: "auto", height: "100%" }}>
            <AppContainer />
          </Content>
          <MyFooter />
        </Container>
      </Container>
    </CustomProvider>
  );
};
