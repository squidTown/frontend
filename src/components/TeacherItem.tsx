import React from "react";
import { TeacherType } from "../App";
import styles from "../styles/components/TeacherItem.module.css";
import TagItem from "./TagItem";

const TeacherItem = (props: {
  list: TeacherType;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
}) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.setShowInfo(true);
        props.toggleContainer(
          props.list.id,
          props.list.name,
          props.list.actRange,
          props.list.tag
        );
      }}
    >
      <div className={styles.image}></div>
      <div className={styles.detail}>
        <div className={styles.academy}>
          <span className={styles.title}>{props.list.name}</span>
          <span className={styles.descipt}>
            {props.list.actRange.map((value, index, array) =>
                `${value}${index === array.length - 1 ? "" : ", "}`
            )}
          </span>
        </div>
        <div className={styles.tag}>
          {props.list.tag.map((tag) => (
            <TagItem key={`tags-${tag}`} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherItem;