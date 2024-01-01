import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/TeacherList.module.css";
import location from "../assets/json/location.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherItem from "./TeacherItem";

const TeacherList = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const toggleContainer = (id: number) => {
    navigate(`/teacher/${id}`);
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          {location.teachers.map((element) => (
            <TeacherItem
              key={`${element.id}item`}
              list={element}
              setShowInfo={setShowInfo}
              toggleContainer={toggleContainer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherList;