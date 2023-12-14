import React from 'react'
import styles from "../styles/components/TeacherInfo.module.css";

const PriceList = (props: { classTitle: string; }) => {
  return (
    <div className={styles.pList}>
      <div className={styles.lInfo}>
        <div>{props.classTitle}</div>
        <div>주 2회 160,000</div>
      </div>
      <div className={styles.lDetailInfo}>
        <div className={styles.diText}>
          <div>회당 2시간 기준 </div>
          <div>/ 시간당 20,000원</div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;