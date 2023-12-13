import React, { useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from '../styles/components/AcademyList.module.css'
import location from "../assets/json/location.json";
import AcademyItem from "./AcademyItem";
import { useNavigate } from "react-router-dom";

const AcademyList = () => {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);

  const toggleContainer = (id: number) => {
    navigate(`/academy/${id}`);
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
