import React from "react";
import styles from "../styles/components/LeftNavbar.module.css";
import { AcademyType } from "../App";
import AcademyItem from "./AcademyItem";

const LeftNavbar = (props: {
  list: AcademyType[];
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  setNowState: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div className={styles.leftnav}>
      {props.list.map((value) => (
        <div className={styles.item}>
          <AcademyItem
            key={`map-${value.id}`}
            list={value}
            setShowDetail={props.setShowDetail}
            toggleContainer={props.toggleContainer}
            setNowState={props.setNowState}
          />
        </div>
      ))}
    </div>
  );
};

export default LeftNavbar;
