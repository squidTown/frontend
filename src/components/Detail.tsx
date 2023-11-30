import React from "react";
import styles from "../styles/components/Detail.module.css";

const Detail = (props: {
  name: string;
  address: string;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.detail}>
      <div className={styles.back} onClick={() => {
        props.setShowDetail(false);
      }}>{` < `} 뒤로가기</div>
      <div className={styles.img}></div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.address}>{props.address}</div>
    </div>
  );
};

export default Detail;
