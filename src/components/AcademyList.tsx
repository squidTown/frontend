import React, { useEffect, useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AcademyList.module.css";
import location from "../assets/json/location.json";
import AcademyItem from "./AcademyItem";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddButton from "./AddButton";

const AcademyList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  const toggleContainer = (id: number) => {
    navigate(`/academy/${id}`);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <AddButton path="academy" />
        <div className={styles.search}>
          <div className={styles.input}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              id={styles.search}
              placeholder="검색할 학원의 이름이나 태그를 입력해주세요"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.container}>
          {location.positions.map((element) => (
            (element.name.includes(search) ||
            element.tag.includes(search)) &&
            <AcademyItem
              key={`${element.id}item`}
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
