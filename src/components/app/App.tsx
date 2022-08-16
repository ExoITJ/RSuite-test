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
    </CustomProvider>
  );
};
