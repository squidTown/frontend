import React from "react";
import { AcademyType } from "../../App";
import styles from "../../styles/components/Academy/AcademyItem.module.css";
import TagItem from "../Button/TagItem";

const AcademyItem = (props: {
  list: AcademyType;
  setShowDetail?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  setNowState?: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        if (props.setShowDetail)
          props.setShowDetail(true);
        props.toggleContainer(props.list.academyId, props.list.academyName, props.list.address, props.list.subject);
        if (props.setNowState)
          props.setNowState({
            center: { lat: props.list.Latitude, lng: props.list.longitude },
          });
      }}
    >
      <div className={styles.image} style={{
        backgroundImage: `url(${props.list.img ? props.list.img : '/defaultBack.png'})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></div>
      <div className={styles.detail}>
        <div className={styles.academy}>
          <span className={styles.title}>{props.list.academyName}</span>
          <span className={styles.address}>{props.list.address}</span>
        </div>
        <div className={styles.tag}>{props.list.subject.map((tag) => (
          <TagItem key={`tags-${tag}`} tag={tag} />
        ))}</div>
      </div>
    </div>
  );
};

export default AcademyItem;
