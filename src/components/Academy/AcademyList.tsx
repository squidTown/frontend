import React, { useEffect, useState } from "react";
import containers from "../../styles/pages/Container.module.css";
import styles from "../../styles/components/Academy/AcademyList.module.css";
import AcademyItem from "./AcademyItem";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddButton from "../Button/AddButton";
import { AcademyType } from "../../App";
import { getAcademyListAll } from "../../api/academyAPI";
const AcademyList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const toggleContainer = (id: number) => {
    navigate(`/academy/${id}`);
  };

  const [academyList, setAcademyList] = useState<AcademyType[]>();

  const getList = async () => {
    const list = await getAcademyListAll();
    setAcademyList(list.data);
  };
  
  useEffect(() => {
    getList();
  }, []);


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
          {academyList?.map(
            (element) =>
              (element.academyName.includes(search) ||
                element.subject.includes(search)) && (
                <AcademyItem
                  key={`${element.academyId}item`}
                  list={element}
                  toggleContainer={toggleContainer}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademyList;