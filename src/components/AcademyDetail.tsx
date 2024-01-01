import React, { useEffect, useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AcademyDetail.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChalkboard,
  faLocationDot,
  faPencil,
  faPeopleGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import TagItem from "./TagItem";
import Button from "./Button";

interface AcademyInfo {
  name: string;
  location: string;
  description: string;
  tags: string[];
}

const AcademyDetail = (props: { param?: string }) => {
  const navigate = useNavigate();
  const [contact, setContact] = useState<string[]>([
    "010-4134-1275",
    "mail@gmail.com",
    "kang._.m_w",
  ]);
  const [academy, setAcademy] = useState<AcademyInfo>({
    name: "학원이름",
    location: "학원위치",
    description:
      "이것은 설명이sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd다!",
    tags: ["수학", "영어"],
  });
  const [academyInfo, setacademyInfo] = useState({
    count: "5 ~ 9",
    subject: academy.tags,
    goal: ["입시", "수능", "성적향상"],
  });
  const [academyPrice, setAcademyPrice] = useState([
    {
      subject: "수학",
      price: 100000,
      date: "한 달",
    },
    {
      subject: "영어",
      price: 150000,
      date: "일 년",
    },
  ]);
  const goPrev = () => {
    navigate(-1);
  };

  useEffect(() => {}, []);

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.container}>
          <div className={styles.img}>
            <div className={styles.wrapImg}>
              <span className={styles.prev} onClick={goPrev}>
                {"<"}
              </span>
            </div>
          </div>
          <div className={styles.inner}>
            <div className={styles.header}>
              <span className={styles.title}>{academy.name}</span>
              <span className={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} />
                &emsp;{academy.location}
              </span>
              <span className={styles.tag}>
                {academy.tags.map((value) => (
                  <TagItem tag={value} />
                ))}
              </span>
            </div>
            <div className={styles.main}>
              <h3>학원 요약 정보</h3>
              <div className={styles.academyinfo}>
                <div id={styles.subtitle}>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  수강 인원
                </div>
                <div id={styles.txt}>{academyInfo.count}명</div>
                <div id={styles.subtitle}>
                  <FontAwesomeIcon icon={faBook} />
                  수강 과목
                </div>
                <div id={styles.txt}>
                  {academyInfo.subject.map((value) => (
                    <span>{value}</span>
                  ))}
                </div>
                <div id={styles.subtitle}>
                  <FontAwesomeIcon icon={faPencil} />
                  수강 목적
                </div>
                <div id={styles.txt}>
                  {academyInfo.goal.map((value) => (
                    <span>{value}</span>
                  ))}
                </div>
              </div>
              <hr />
              <h3>학원 소개</h3>
              <div className={styles.description}>
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  주소
                </div>
                <div className={styles.detail}>{academy.location}</div>
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faPhone} />
                  연락처
                </div>
                <div className={`${styles.detail} ${styles.contact}`}>
                  {contact.map((value) => (
                    <span>{value}</span>
                  ))}
                </div>
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faChalkboard} />
                  학원소개
                </div>
                <div className={styles.detail}>{academy.description}</div>
              </div>
              <hr />
              <h3>수업정보</h3>
              <table className={styles.table}>
                <tr>
                  <th>과목명</th>
                  <th>강습비</th>
                  <th>수강기간</th>
                </tr>
                {academyPrice.map((value) => (
                  <tr className={styles.itemLine}>
                    <td>{value.subject}</td>
                    <td>{value.price.toLocaleString()}</td>
                    <td>{value.date}</td>
                  </tr>
                ))}
              </table>
              <h3>학원 후기</h3>
              <div className={styles.review}>
                <div className={styles.opinion}>⭐4.7</div>
                <div className={styles.write}>
                  <div className={styles.writeWrap}>
                    <div className={styles.reviewOption}>매우좋음</div>
                    <div className={styles.reviewOption}>좋음</div>
                    <div className={styles.reviewOption}>보통</div>
                    <div className={styles.reviewOption}>별로</div>
                    <div className={styles.reviewOption}>매우별로</div>
                  </div>
                  <Button
                    clickEvent={() => {}}
                    size="middle"
                    txt="리뷰 작성하기"
                    type="full"
                  />
                </div>
              </div>
              <div className={styles.area} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetail;