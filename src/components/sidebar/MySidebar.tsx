import React, { FC } from "react";
import { Nav, Sidebar, Sidenav } from "rsuite";
import styles from "./mySidebar.module.scss";
import { FcGallery } from "react-icons/fc";
import { MdSpaceDashboard, MdRestaurantMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../contrib/const/route-paths";
import { useAppSelector } from "../../store/store";
import { selectSidebarExpand } from "../header/MyHeaderSlice";

export const MySidebar: FC = () => {
  const navigate = useNavigate();
  const sidebarExpand = useAppSelector(selectSidebarExpand);

  const isActive = (path: string) => {
    return window.location.pathname.startsWith(PATHS.INDEX + path)
      ? true
      : false;
  };

  return (
    <Sidebar
      width={sidebarExpand ? 250 : 0}
      collapsible
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Sidenav.Header>
        <div
          className={styles.headerStyles}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(PATHS.DASHBOARD)}
        >
          <FcGallery size={30} />
          <span className={styles.brand}>БРЕНД</span>
        </div>
      </Sidenav.Header>
      <Sidenav
        className={styles.sidenav}
        defaultOpenKeys={["3"]}
        appearance="subtle"
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              style={{
                paddingLeft: "20px"
              }}
              eventKey="1"
              icon={
                <MdSpaceDashboard style={{ marginRight: "20px" }} size={20} />
              }
              onClick={() => navigate(PATHS.DASHBOARD)}
              active={isActive(PATHS.DASHBOARD)}
            >
              Главная страница
            </Nav.Item>
            <Nav.Item
              style={{
                paddingLeft: "20px"
              }}
              eventKey="2"
              icon={
                <MdRestaurantMenu style={{ marginRight: "20px" }} size={20} />
              }
              onClick={() => navigate(PATHS.MENU)}
              active={isActive(PATHS.MENU)}
            >
              Меню
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};
