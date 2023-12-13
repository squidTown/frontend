import React from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AcademyDetail.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AcademyDetail = (props: { param?: string }) => {
  const navigate = useNavigate();
  const goPrev = () => {
    navigate(-1);
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          <div className={styles.img}>
            <div className={styles.wrapImg}>
              <span className={styles.prev} onClick={goPrev}>
                {"<"}
              </span>
            </div>
          </div>
          <div className={styles.inner}>
            <div className={styles.header}>
              <span className={styles.title}>학원이름</span>
              <span className={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} />
                &emsp;학원위치
              </span>
              <span className={styles.tag}>태그들</span>
            </div>
            <div className={styles.main}>
              <hr />
              <div className={styles.description}>이것은 설명이다 !</div>
              <hr />
              <div className={styles.career}>이것은 나의 경력이다 !</div>
              <hr />
              <div className={styles.price}>이것은 나의 가격이다 !</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetail;
