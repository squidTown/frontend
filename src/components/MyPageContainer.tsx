import React, { useEffect, useState } from "react";
import styles from "../styles/components/MyPageContainer.module.css";
import containers from "../styles/pages/Container.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import MyPageItem from "./MyPageItem";
import { UserInfo } from "../App";
import { myPageInfo } from "../api/userAPI";
import { removeCookie } from "../utils/cookie";
import Modal from "react-modal";
import MyPageModal from "./MyPageModal";

const MyPageContainer = (props: { id: any }) => {
  const navigate = useNavigate();
  const list = [
    "공지사항",
    "후기관리",
    "올린 게시물들",
    "문의하기",
    "약관 읽어보기",
    "회원탈퇴",
  ];
  const [information, setInformation] = useState<UserInfo>();
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState();

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100vh",
      zIndex: "10000",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      maxWidth: "570px",
      width: "100%",
      height: "620px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  const clickLogOut = () => {
    removeCookie("Authorization", { path: "/" });
    navigate("/");
  };

  const clickAlter = () => {
    navigate(`/alteruser/${props.id}`);
  };

  const handlePopupMessage = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    myPageInfo()
      .then((res) => {
        if (res.data.success) {
          setInformation(res.data.data);
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  }, []);

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.userContainer}>
              <div className={styles.user}>
                <span className={styles.name}>{information?.name}</span>
                <span className={styles.email}>{information?.email}</span>
              </div>
              <Button
                size="middle"
                txt="회원정보수정"
                clickEvent={clickAlter}
                type="empty"
              />
            </div>
            <div className={styles.list}>
              {list.map((element, idx) => (
                <MyPageItem
                  key={`item${idx}`}
                  txt={element}
                  idx={idx}
                  onClick={handlePopupMessage}
                />
              ))}
            </div>
            <Modal
              isOpen={modalOpen}
              onRequestClose={handlePopupMessage}
              style={customModalStyles}
              ariaHideApp={false}
              contentLabel="Pop up Message"
              shouldCloseOnOverlayClick={false}
            >
              {data ? <MyPageModal /> : <div>
                <div className={styles.noNotice}>
                  <span>아직 공지사항이 없습니다.</span>
                </div>
                <span
                  className={styles.closeButton}
                  onClick={handlePopupMessage}
                >
                  닫기 X
                </span>
              </div>}
            </Modal>
            <div className={styles.btnContainer}>
              <Button
                size="big"
                txt="로그아웃"
                clickEvent={clickLogOut}
                type="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageContainer;
