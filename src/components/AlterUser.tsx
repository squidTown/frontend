import React, { useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AlterUser.module.css";
import Button from "./Button";
import classNames from "classnames/bind";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const AlterUser = (props: { id: any }) => {
  const cx = classNames.bind(styles);
  const [gender, setGender] = useState(1);
  const [birth, setBirth] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const toggleMaleGender = () => {
    setGender(1);
  };

  const toggleFeMaleGender = () => {
    setGender(2);
  };

  const toggleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const toggleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const clickAlterBtn = () => {
    axios
      .patch(`/user/${props.id}`, { birth, address, gender })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <span className={styles.title}>기본 정보</span>
            <div className={styles.inputBoxList}>
              <div className={styles.inputBox}>
                <span>생일</span>
                <input
                  type="date"
                  className={`${styles.inputBirth} ${styles.input}`}
                  onChange={toggleBirth}
                />
              </div>
              <div className={`${styles.inputBox} ${styles.genderBox}`}>
                <span>성별</span>
                <div className={styles.gender}>
                  <div
                    className={cx(
                      [`g${gender === 1 ? gender : ""}`].join(" "),
                      "male"
                    )}
                    onClick={toggleMaleGender}
                  >
                    <FontAwesomeIcon icon={faMars} />
                  </div>
                  <div
                    className={cx(
                      [`g${gender === 2 ? gender : ""}`].join(" "),
                      "female"
                    )}
                    onClick={toggleFeMaleGender}
                  >
                    <FontAwesomeIcon icon={faVenus} />
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <span>주소</span>
                <input
                  type="text"
                  className={styles.input}
                  onChange={toggleAddress}
                />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                size="big"
                txt="변경 완료"
                clickEvent={clickAlterBtn}
                type="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterUser;
