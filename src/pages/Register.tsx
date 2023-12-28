import React, { useState } from "react";
import styles from "../styles/pages/Register.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import Email from "../components/Email";

export const Register = () => {
  const cx = classNames.bind(styles);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdRe, setRePwd] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<number>(1);
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState<string>("");
  const [checkValue, setCheckValue] = useState<boolean>(false);
  const [btnTxt, setBtnTxt] = useState<string>("메일인증");
  
  const [viewPwd, setViewPwd] = useState({
    state: "password",
    visible: false,
  });
  const [viewRePwd, setViewRePwd] = useState({
    state: "password",
    visible: false,
  });
  const navigate = useNavigate();

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const toggleShowPwd = () => {
    setViewPwd(() => {
      if (viewPwd.visible) {
        return { state: "password", visible: false };
      } else {
        return { state: "text", visible: true };
      }
    });
  };

  const toggleShowRePwd = () => {
    setViewRePwd(() => {
      if (viewRePwd.visible) {
        return { state: "password", visible: false };
      } else {
        return { state: "text", visible: true };
      }
    });
  };

  const toggleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const togglePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const toggleRePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePwd(e.target.value);
  };

  const toggleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const toggleMaleGender = () => {
    setGender(1);
  };

  const toggleFeMaleGender = () => {
    setGender(2);
  };

  const toggleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const toggleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const submit = () => {
    console.log(birth);
    axios({
      baseURL: "http://localhost:3001",
      method: "POST",
      url: "/api/user/create",
      data: {
        email,
        password: pwd,
        name,
        birth: "2006-11-01",
        sex: gender,
        addressName: address,
        let: 2.22,
        lnt: 1.11,
      },
    })
      .then((res) => {
        if (res.data.success === true) {
          alert('회원가입 완료!');
          navigate('/login');
        } else {
          alert(res.data.success);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendEmail = () => {
    axios({
      baseURL: "http://localhost:3001",
      method: "POST",
      url: "/api/mail/send",
      data: {
        email,
      },
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const compltBtn = () => {
    if (!emailRegex.test(email)) {
      alert("이메일 입력이 유효하지않습니다");
    } else {
      submit();
    }
  };

  const checkMail = () => {
    setCheckValue(true);
  }

  return (
    <div>
      <Email value={checkValue} setModal={setCheckValue} setBtnTxt={setBtnTxt} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.registerBox}>
            <div className={styles.UserText}>
              <div className={styles.UserTextBig}>회원가입</div>
              <div className={styles.UserTextSmall}>
                회원가입을 하셔서 이용해보세요.
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  이메일<b>*</b>
                </p>
                <div className={styles.idWrapperBox}>
                  <input
                    type="text"
                    className={styles.idInput}
                    placeholder="이메일 입력"
                    onChange={toggleMail}
                    value={email}
                  ></input>
                  <button
                    className={styles.idBtn}
                    onClick={checkMail}
                  >
                    {btnTxt}
                  </button>
                </div>
              </div>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  비밀번호<b>*</b>
                </p>
                <div className={styles.totalWrapperBox}>
                  <div className={styles.pwd}>
                    <input
                      type={viewPwd.state}
                      className={styles.pwdInput}
                      placeholder="비밀번호 입력"
                      onChange={togglePwd}
                      value={pwd}
                    />
                    <div className={styles.eye}>
                      <FontAwesomeIcon
                        icon={viewPwd.visible ? faEyeSlash : faEye}
                        onClick={toggleShowPwd}
                        className={styles.visibleButton}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  비밀번호 확인<b>*</b>
                </p>
                <div className={styles.totalWrapperBox}>
                  <div className={styles.pwd}>
                    <input
                      type={viewRePwd.state}
                      className={styles.pwdInput}
                      placeholder="비밀번호 재입력"
                      onChange={toggleRePwd}
                      value={pwdRe}
                    />
                    <div className={styles.eye}>
                      <FontAwesomeIcon
                        icon={viewRePwd.visible ? faEyeSlash : faEye}
                        onClick={toggleShowRePwd}
                        className={styles.visibleButton}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  이름 및 성별<b>*</b>
                </p>
                <div className={styles.userWrapperBox}>
                  <input
                    type="text"
                    className={styles.nameInput}
                    placeholder="이름 입력"
                    onChange={toggleName}
                    value={name}
                  />
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
              </div>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  주소<b>*</b>
                </p>
                <div className={styles.addressWrapperBox}>
                  <input
                    type="text"
                    className={styles.totalInput}
                    placeholder="주소를 입력해주세요"
                    onChange={toggleAddress}
                    value={address}
                  ></input>
                </div>
              </div>
              <div className={styles.totalWrapper}>
                <p className={styles.idText}>
                  생년월일<b>*</b>
                </p>
                <div className={styles.totalWrapperBox}>
                  <input
                    type="date"
                    className={styles.totalInput}
                    onChange={toggleBirth}
                    value={birth}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bottomWrapper}>
              <div className={styles.bottomBox}>
                <button className={styles.joinBtn} onClick={compltBtn}>
                  가입 완료
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
