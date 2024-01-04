import React, { useEffect, useState } from "react";
import styles from "./Review.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { starType } from "./Review";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Star = (props: { SetReviewScore: any }) => {
  const [star, setStar] = useState<starType[]>([
    { idx: 0, flag: false },
    { idx: 1, flag: false },
    { idx: 2, flag: false },
    { idx: 3, flag: false },
    { idx: 4, flag: false },
  ]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    props.SetReviewScore(score);
  }, [score]);

  const toggleStar = (idx: number) => {
    setStar((prevStar) =>
      prevStar.map((starItem) => ({
        idx: starItem.idx,
        flag: starItem.idx <= idx ? true : false,
      }))
    );
    setScore(idx + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.starContainer}>
        {star.map((item, idx) =>
          item.flag ? (
            <FontAwesomeIcon
              key={`item-${idx}`}
              icon={faAward}
              style={{
                color: "rgb(255, 196, 46)",
              }}
              onClick={() => toggleStar(item.idx)}
            />
          ) : (
            <FontAwesomeIcon
              key={`item-${idx}`}
              icon={faCircle}
              onClick={() => toggleStar(item.idx)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Star;
