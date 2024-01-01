import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/pages/EmailCheck.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const EmailCheck = (props: { setBtnTxt: any; setValue: any }) => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState<number>(10);
  const [seconds, setSeconds] = useState<number>(0);
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const [values, setValues] = useState<number>();
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    setValues(
      parseInt(
        inputValues[0] + inputValues[1] + inputValues[2] + inputValues[3]
      )
    );
    console.log(values);
  }, [inputValues]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          alert("메일인증 시간 완료");
          navigate(-1);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const handleChange = (index: number, value: string) => {
    if (/^\d+$/.test(value) || value === "") {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);

      if (value && index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      } else if (!value && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const clickBtn = () => {
    axios({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      method: "POST",
      url: "/api/mail/mailcheck",
      data: {
        email,
        token: values,
      },
    })
      .then((res) => {
        if (res.data.success === true) {
          alert("인증 완료");
          props.setBtnTxt("인증완료");
          navigate(-1);
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
      <div className={styles.wrapper}>
        <div onClick={() => props.setValue(false)}><FontAwesomeIcon icon={faXmark} className={styles.xmark} /></div>
        <div className={styles.bigText}>
          <div className={styles.emailCheckText}>이메일 인증</div>
        </div>
        <div className={styles.smallText}>
          <div className={styles.infoText}>인증번호 4자리를 입력해주세요</div>
        </div>
        <div className={styles.inputWrapper}>
          {inputValues.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className={styles.box}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              ref={inputRefs[index]}
            />
          ))}
        </div>
        <div className={styles.againText}>인증코드 재전송</div>
        <div className={styles.leftTime}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className={styles.authBtnWrapper}>
          <Button
            txt="인증 완료"
            type="full"
            size="big"
            clickEvent={clickBtn}
          />
        </div>
      </div>
    </div>
  );
};
