import React, { FC } from "react";
import { Footer, Nav, Navbar, Tooltip, Whisper } from "rsuite";
import { FcGallery } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../contrib/const/route-paths";
import styles from "./myFooter.module.scss";

export const MyFooter: FC = () => {
  const navigate = useNavigate();

  return (
    <Footer>
      <Navbar className={styles.footer} appearance="subtle">
        <Nav>
          <Whisper placement="top" speaker={<Tooltip>На главную</Tooltip>}>
            <Nav.Item
              style={{ cursor: "pointer" }}
              onClick={() => navigate(PATHS.DASHBOARD)}
            >
              <FcGallery size={30} />
            </Nav.Item>
          </Whisper>
        </Nav>
      </Navbar>
    </Footer>
  );
};
