import React, { useState, useEffect } from "react";
import styles from "../styles/components/EventMarkerContainer.module.css";
import { MapMarker, useMap } from "react-kakao-maps-sdk";
import { AcademyType } from "../App";

const EventMarkerContainer = (props: {
  positionLat: number;
  positionLng: number;
  content: string;
  id: string;
  tags: string[];
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleContainer: any;
  list?: AcademyType[];
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [academyAddress, setAcademyAddress] = useState<string>();
  const map = useMap();

  useEffect(() => {
    const matchingAcademy: AcademyType | undefined = props.list?.find((academy) => academy.Latitude === props.positionLat);
    if (matchingAcademy) {
      setAcademyAddress(matchingAcademy.address);
    }
  }, [props.list, props.positionLat, props.positionLng]);

  return (
    <MapMarker
      position={{
        lat: props.positionLat,
        lng: props.positionLng,
      }}
      onClick={(marker) => {
        map.panTo(marker.getPosition());
        props.setShowDetail(true);
        props.toggleContainer(props.id, props.content, academyAddress, props.tags);
      }}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && <span className={styles.title}>{props.content}</span>}
    </MapMarker>
  );
};

export default EventMarkerContainer;
