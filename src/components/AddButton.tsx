import React from "react";
import styles from "../styles/components/AddButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddButton = (props: { path: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.wrap}
      onClick={() => {
        navigate(`/add/${props.path}`);
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default AddButton;
