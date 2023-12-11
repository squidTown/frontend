import React from "react";
import { AcademyType } from "../App";
import styles from "../styles/components/AcademyItem.module.css";

const AcademyItem = (props: {
  list: AcademyType;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  setNowState: React.Dispatch<React.SetStateAction<any>>;
}) => {
  console.log(props.list)

  return (
    <div
      className={styles.container}
      onClick={() => {
        props.setShowDetail(true);
        props.toggleContainer(props.list.name, props.list.location);
        props.setNowState({
          center: { lat: props.list.lat, lng: props.list.lng },
        });
      }}
    >
      <div className={styles.image}></div>
      <div className={styles.detail}>
        <div className={styles.academy}>
          <span className={styles.title}>{props.list.name}</span>
          <span className={styles.address}>{props.list.location}</span>
        </div>
        <div className={styles.tag}></div>
      </div>
    </div>
  );
};

export default AcademyItem;
