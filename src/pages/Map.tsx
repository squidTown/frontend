import React, { useState } from "react";
import styles from "../styles/pages/Map.module.css";
import BasicMap from "../components/BasicMap";
import LeftNavbar from "../components/LeftNavbar";
import { AcademyType } from "../App";
import Header from "../components/Header";
import Detail from "../components/Detail";
import BottomNavbar from "../components/BottomNavbar";

const Map = (props: { academyList: AcademyType[], location: string, setLocation: any }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [academyName, setAcademyName] = useState<string>("name");
  const [academyAddress, setAcademyAddress] = useState<string>("address");
  const [academyId, setAcademyId] = useState<number>(1);
  const [academyTags, setAcademyTags] = useState<string[]>([]);
  const [nowState, setNowState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isPanto: true,
  })

  const toggleContainer = (id: number, name: string, address: string, tag: string[]) => {
    setAcademyName(name);
    setAcademyAddress(address);
    setAcademyId(id);
    setAcademyTags(tag)
  };

  return (
    <>
      <Header location={props.location} />
      <div className={styles.map}>
        <BasicMap
          list={props.academyList}
          setShowDetail={setShowDetail}
          toggleContainer={toggleContainer}
          nowState={nowState}
          setNowState={setNowState}
          setLocation={props.setLocation}
        />
      </div>
      <BottomNavbar />
      <LeftNavbar
        list={props.academyList}
        setShowDetail={setShowDetail}
        toggleContainer={toggleContainer}
        setNowState={setNowState}
      />
      {showDetail && (
        <Detail
          name={academyName}
          address={academyAddress}
          id={academyId}
          tag={academyTags}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default Map;
