import React, { FC } from "react";
import { Header, Nav, Navbar } from "rsuite";
import styles from "./myHeader.module.scss";

export const MyHeader: FC = () => {
  return (
    <Header>
      <Navbar className={styles.header} appearance="default">
        <Nav pullRight>
          <Nav.Menu title="Профиль">
            <Nav.Item>Настройки</Nav.Item>
            <Nav.Item>Выйти</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
    </Header>
  );
};
