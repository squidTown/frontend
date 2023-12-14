import React from "react";
import styles from "../styles/components/Main.module.css";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Banner = (props: { bannerWidth: string; bannerTitle: string; bannerColor: string; path: string }) => {
  const navigate = useNavigate();
  const clickBanner = () => {
    navigate(`/${props.path}`);
  };

  return (
    <div
      className={cx([`${props.bannerWidth}`].join(" "), [`${props.bannerColor}`].join(" "),  [`banner`].join(" "))}
      onClick={clickBanner}
    >
      <div className={cx([`${props.path}`].join(" "))}>
        <div className={styles.bannerTitle}>
          {props.bannerTitle}
        </div>
      </div>
    </div>
  );
};

export default Banner;
