import React, { useRef, useState } from "react";
import styles from "./Review.module.css";
import Star from "./Star";
import Button from "../Button";
import axios from "axios";

export interface starType {
  idx: number;
  flag: boolean;
}

const Review = (props: { param: any }) => {
  const [reviewScore, SetReviewScore] = useState(0);
  const reviewRef: any = useRef();
  const writeReview = () => {
    axios({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      method: "POST",
      url: "api/review/create",
      data: {
        text: reviewRef.current.value,
        star: reviewScore,
        PostId: props.param,
      },
    })
    .then((res) => {})
    .catch((err) => {})
  };
  return (
    <div className={styles.container}>
      <div className={styles.star}>
        <Star SetReviewScore={SetReviewScore} />
      </div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="당신의 생각을 적어주세요! ( 최대 200글자 )"
          maxLength={200}
          ref={reviewRef}
        />
        <Button
          clickEvent={writeReview}
          size="middle"
          txt="작성하기"
          type="full"
        />
      </div>
    </div>
  );
};

export default Review;
