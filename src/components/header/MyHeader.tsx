import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Header, Nav, Navbar } from "rsuite";
import styles from "./myHeader.module.scss";
import {
  selectSidebarExpand,
  setSidebarExpand,
  setDarkTheme,
  selectDarkTheme
} from "./MyHeaderSlice";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { VscWindow } from "react-icons/vsc";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../contrib/const/route-paths";

export const MyHeader: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sidebarExpand = useAppSelector(selectSidebarExpand);
  const isDarkTheme = useAppSelector(selectDarkTheme);

  return (
    <Header>
      <Navbar className={styles.header} appearance="default">
        <Nav>
          <Nav.Item onClick={() => dispatch(setSidebarExpand())}>
            {sidebarExpand ? (
              <VscWindow size={20} />
            ) : (
              <BsLayoutSidebarInset size={20} />
            )}
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item onClick={() => dispatch(setDarkTheme())}>
            {isDarkTheme === "light" ? (
              <MdModeNight size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
          </Nav.Item>
          <Nav.Menu title="Профиль">
            <Nav.Item onClick={() => navigate(PATHS.USER)}>Настройки</Nav.Item>
            <Nav.Item>Выйти</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
    </Header>
  );
};
