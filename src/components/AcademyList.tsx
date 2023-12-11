import React, { useState } from "react";
import containers from "../styles/pages/Container.module.css";
import location from "../assets/json/location.json";
import AcademyItem from "./AcademyItem";

const AcademyList = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [academyName, setAcademyName] = useState<string>("name");
  const [academyAddress, setAcademyAddress] = useState<string>("address");
  const [nowState, setNowState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isPanto: true,
  });

  const toggleContainer = (name: string, address: string) => {
    setAcademyName(name);
    setAcademyAddress(address);
  };

  return (
    <div>
      <div className={containers.container}>
        <div className={containers.inner}>
          {location.positions.map((element) => (
            <AcademyItem
              list={element}
              setShowDetail={setShowDetail}
              toggleContainer={toggleContainer}
              setNowState={setNowState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyList;
