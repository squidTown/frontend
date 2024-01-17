import React from "react";
import styles from "../../styles/components/Navbar/LeftNavbar.module.css"
import { AcademyType } from "../../App";
import AcademyItem from "../Academy/AcademyItem";

const LeftNavbar = (props: {
  list?: AcademyType[];
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  nowState: string;
  setNowState: React.Dispatch<React.SetStateAction<any>>;
  adr1: string,
  adr2: string
}) => {
  return ( 
    <div className={styles.leftnav}>
      {props.list?.map((value) => (
        value.address.includes(props.adr1) && value.address.includes(props.adr2) && 
        <div key={`map-${value.academyId}-${value.academyName}`} className={styles.item}>
          <AcademyItem
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
