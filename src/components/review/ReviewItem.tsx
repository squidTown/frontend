import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Review/ReviewItem.module.css";
import { ReviewType } from "../Academy/AcademyDetail";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItem = (props: { value: ReviewType }) => {
  const [num, setNum] = useState<boolean[]>();
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < props.value.star; i++) {
      arr[i] = true;
    }
    setNum(arr);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>{props.value.rName}</span>
        <span className={styles.star}>
          {num?.map((value, idx) => (
            <FontAwesomeIcon key={`${idx}review`} icon={faAward} />
          ))}
        </span>
      </div>
      <div className={styles.body}>{props.value.text}</div>
    </div>
  );
};

export default ReviewItem;
