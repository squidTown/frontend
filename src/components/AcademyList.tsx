import React, { useState, useEffect } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from '../styles/components/AcademyList.module.css'
import location from "../assets/json/location.json";
import AcademyItem from "./AcademyItem";

const AcademyList = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [academyName, setAcademyName] = useState<string>("name");
  const [academyAddress, setAcademyAddress] = useState<string>("address");

  useEffect(() => {
    if (showDetail) {
      console.log(academyName, academyAddress);
    }
  }, [showDetail, academyName, academyAddress]);

  const toggleContainer = (name: string, address: string) => {
    setAcademyName(name);
    setAcademyAddress(address);
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          {location.positions.map((element) => (
            <AcademyItem
              list={element}
              setShowDetail={setShowDetail}
              toggleContainer={toggleContainer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyList;
