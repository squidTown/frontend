import React, { useState, useEffect } from "react";
import styles from "../styles/components/BottomNavbar.module.css";
import { faHouse, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarButton from "./NavbarButton";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const [activePage, setActivePage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userId = "1";
  const chatId = "1";

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setActivePage("home");
    } else if (path === `/message/${userId}`) {
      setActivePage("message");
    } else if (path === `/mypage/${chatId}`) {
      setActivePage("mypage");
    }
  }, [location.pathname]);

  const navigatePage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <NavbarButton
          icon={faHouse}
          text="홈"
          isActive={activePage === "home"}
          onClick={() => {
            setActivePage("home");
            navigatePage("");
          }}
        />
        <NavbarButton
          icon={faMessage}
          text="메세지"
          isActive={activePage === "message"}
          onClick={() => {
            setActivePage("message");
            navigatePage(`message/${chatId}`);
          }}
        />
        <NavbarButton
          icon={faUser}
          text="마이페이지"
          isActive={activePage === "mypage"}
          onClick={() => {
            setActivePage("mypage");
            navigatePage(`mypage/${userId}`);
          }}
        />
      </div>
    </div>
  );
};

export default BottomNavbar;