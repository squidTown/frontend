import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/pages/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { setCookie } from "../utils/cookie";
import { loginAccount } from "../api/userAPI";

export const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginAccount({
      email: id,
      password: pw,
    })
      .then((res) => {
        if (res.success) {
          console.log("success 완료")
          if (res.token) {
            setCookie("Authorization", `${res.token}`, {
              path: "/",
              httponly: true,
              secure: true,
              maxAge: 24 * 60 * 60 * 1000,
            });
            alert("로그인에 성공하였습니다");
            navigate("/");
          }
        } else {
          alert(res.data.success);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.wellcomeText}>Welcome!</div>
        <form onSubmit={submit} className={styles.loginContainer}>
          <div className={styles.id}>
            <div className={styles.idImage}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              placeholder="E-mail"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={styles.passwd}>
            <div className={styles.pwImage}>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              placeholder="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div className={styles.underBar}>
            <div className={styles.underBarContainer}>
              <div className={styles.underBarCheckbox}>
                <span>로그인 상태 유지</span>
                <input type="checkbox" /> 
              </div>
              <div className={styles.lostPw}>비밀번호 찾기</div>
            </div>
          </div>
          <button className={styles.loginButton} type="submit">
            로그인
          </button>
          <div className={styles.registerContainer}>
            <span className={styles.registerText}>아직 계정이 없나요?</span>
            <span className={styles.register}>
              <Link to="/register">회원가입</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
