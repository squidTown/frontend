import React, { useEffect, useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AcademyDetail.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AcademyDetail = (props: { param?: string }) => {
  const navigate = useNavigate();
  const [userCareer, setUserCareer] = useState<string[]>([]);
  const goPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    let careers = ["박사 취득", "16년차"]
    let arr = [...careers];
    setUserCareer(arr);
  }, [])

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
              <div className={styles.career}>
                {userCareer.map((value: string) => (
                  <li>{value}</li>
                ))}
              </div>
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
