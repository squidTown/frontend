import React, { useRef, useState } from "react";
import styles from "../styles/pages/Register.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import Email from "../components/Modal/Email";
import { createAccount, sendEmail } from "../api/userAPI";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

export const Register = () => {
  const cx = classNames.bind(styles);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [pwdRe, setRePwd] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<number>(1);
  const [birth, setBirth] = useState<string>("");
  const [checkValue, setCheckValue] = useState<boolean>(false);
  const [btnTxt, setBtnTxt] = useState<string>("메일인증");
  const adrRef: any = useRef();

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

  const toggleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const submit = () => {
    createAccount({
      email: email,
      password: pwd,
      name: name,
      birth: birth.slice(0, 4) + birth.slice(5, 7) + birth.slice(8, 10),
      sex: gender,
      addressName: adrRef.current.value,
      let: lat,
      lnt: lng,
    })
    .then((res) => navigate('/login'))
    .catch((err) => console.log(err));
  };

  const sendEmailBtn = () => {
    sendEmail(email);
  };

  const compltBtn = () => {
    if (!emailRegex.test(email)) {
      alert("이메일 입력이 유효하지 않습니다.");
    } else {
      submit();
    }
  };

  const checkMail = () => {
    setCheckValue(true);
    sendEmailBtn();
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const currentPos = new window.kakao.maps.LatLng(
          result[0].y,
          result[0].x
        );
        adrRef.current.value = data.address;
        setLat(currentPos.getLat());
        setLng(currentPos.getLng());
      }
    });
  };

  const clickInput = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <Email
        value={checkValue}
        setModal={setCheckValue}
        setBtnTxt={setBtnTxt}
        email={email}
      />
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
                  <button className={styles.idBtn} onClick={checkMail} disabled={btnTxt === '인증완료'}>
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
                    placeholder="클릭하여 주소 입력"
                    onClick={clickInput}
                    ref={adrRef}
                    readOnly={true}
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
