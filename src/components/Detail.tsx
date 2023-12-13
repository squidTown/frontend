import React from "react";
import styles from "../styles/components/Detail.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import TagItem from "./TagItem";

const Detail = (props: {
  name: string;
  address: string;
  id: number;
  tag: string[];
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const click = () => {
    navigate(`/academy/${props.id}`);
  };

  return (
    <div className={styles.detail}>
      <div
        className={styles.back}
        onClick={() => {
          props.setShowDetail(false);
        }}
      >
        {` < `} 뒤로가기
      </div>
      <div className={styles.img}></div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.address}>{props.address}</div>
      <div className={styles.tagList}>
        {props.tag.map((value) => (
          <TagItem tag={value} />
        ))}
      </div>
      <Button
        size={"big"}
        txt={`자세한 정보 보러가기 >`}
        clickEvent={click}
        type="full"
      />
    </div>
  );
};

export default Detail;
