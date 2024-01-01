import React, { useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKaKaoLoader";
import location from "../assets/json/location.json";
import EventMarkerContainer from "./EventMarkerContainer";
import { AcademyType } from "../App";
import styles from "../styles/pages/Map.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const BasicMap = (props: {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  list: AcademyType[];
  nowState: any;
  setNowState: React.Dispatch<React.SetStateAction<any>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setAdr1: any;
  setAdr2: any;
}) => {
  useKakaoLoader();

  const mapRef = useRef<kakao.maps.Map>(null);
  const [positions, setPositions] = useState<any>([]);
  const [now, setNow] = useState<any>({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    setPositions(location.positions);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          props.setNowState((prev: any) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
          setNow({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          getAddr(position.coords.latitude, position.coords.longitude)
        },
        (err) => {
          props.setNowState((prev: any) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      props.setNowState((prev: any) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const getAddr = (lat: number, lng: number) => {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    const callback = (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        props.setLocation(
            result[0].address.region_1depth_name +
            " " +
            result[0].address.region_2depth_name +
            " " +
            result[0].address.region_3depth_name
        );
        props.setAdr1(result[0].address.region_1depth_name);
        props.setAdr2(result[0].address.region_2depth_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const toggleNowPoint = () => {
    const newCenter = new kakao.maps.LatLng(now.lat, now.lng);
    mapRef.current?.panTo(newCenter);
  };

  return (
    <>
      <Map
        center={props.nowState.center}
        isPanto={props.nowState.isPanto}
        style={{ width: "100%", height: "100%" }}
        level={5}
        ref={mapRef}
      >
        {positions.map((pos: AcademyType) => (
          <EventMarkerContainer
            key={`EventMarker-${pos.lat}-${pos.lng}-${pos.id}`}
            positionLat={pos.lat}
            positionLng={pos.lng}
            content={pos.name}
            id={pos.id}
            tags={pos.tag}
            setShowDetail={props.setShowDetail}
            toggleContainer={props.toggleContainer}
            list={props.list}
          />
        ))}
      </Map>
      <div className={styles.now} onClick={toggleNowPoint}>
        <span>
          <FontAwesomeIcon icon={faCrosshairs} />
        </span>
      </div>
    </>
  );
};

export default BasicMap;
