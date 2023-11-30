import React, { useEffect, useState } from "react";
import styles from "../styles/components/Main.module.css";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Banner = (props: { banner: string; path: string }) => {
  const navigate = useNavigate();
  const [txt, setTxt] = useState<string>(props.path);

  useEffect(() => {
    setTxt(props.path);

    if (txt === "academy") {
      setTxt("학원 찾아보기");
    } else if (txt === "work") {
      setTxt("학원 구인구직");
    } else if (txt === "teacher") {
      setTxt("과외 선생님 찾기");
    } else {
      setTxt("지도로 살펴보기");
    }
  }, [])

  const clickBanner = () => {
    navigate(`/${props.path}`);
  };

  return (
    <div
      className={cx([`${props.banner}`].join(""))}
      id={cx([`banner`].join(""))}
      onClick={clickBanner}
    >
      <div className={styles.txt}>{txt}</div>
      <div className={styles.img} />
    </div>
  );
};

export default Banner;
