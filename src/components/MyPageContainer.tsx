import React, { useEffect, useState } from "react";
import styles from "../styles/components/MyPageContainer.module.css";
import containers from "../styles/pages/Container.module.css";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import MyPageItem from "./MyPageItem";
import { UserInfo } from "../App";

const MyPageContainer = (props: { id: any }) => {
  const navigate = useNavigate();
  const list = [
    "공지사항",
    "후기관리",
    "올린 게시물들",
    "문의하기",
    "차단목록",
    "약관 읽어보기",
  ];
  const [information, setInformation] = useState<UserInfo>();

  const clickLogOut = () => {
    axios
      .post("api/auth/logout", {
        baseUrl: 'localhost:3001/'
      })
      .then((res) => {
        if (res.data.success) {
          
        }
      })
      .catch((err) => {});
  };

  const clickAlter = () => {
    navigate(`/alteruser/${props.id}`);
  };

  useEffect(() => {
    axiosInstance("/api/user/mypage", {
      method: "GET",
    })
      .then((res) => {
        if (res.data.success) {
          setInformation(res.data.data);
        }
      })
      .catch((err) => {
        //window.location.href = "/login";
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
                <MyPageItem key={`item${idx}`} txt={element} idx={idx} />
              ))}
            </div>
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
