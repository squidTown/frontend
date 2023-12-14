import React from "react";
import { AcademyType } from "../App";
import styles from "../styles/components/AcademyItem.module.css";
import TagItem from "./TagItem";

const AcademyItem = (props: {
  list: AcademyType;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  setNowState?: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.setShowDetail(true);
        props.toggleContainer(props.list.id, props.list.name, props.list.location, props.list.tag);
        if (props.setNowState)
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
        <div className={styles.tag}>{props.list.tag.map((tag) => (
          <TagItem key={`tags-${tag}`} tag={tag} />
        ))}</div>
      </div>
    </div>
  );
};

export default AcademyItem;
