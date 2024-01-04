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
import Review from "./review/Review";
import { getReviewList } from "../api/reviewAPI";
import { getAcademy } from "../api/academyAPI";
import ReviewItem from "./review/ReviewItem";

interface AcademyInfo {
  id: string;
  name: string;
  location: string;
  description: string;
  tags: string[];
}

export interface ReviewType {
  reviewId: string;
  rName: string;
  PostId: string;
  text: string;
  star: number;
}

const AcademyDetail = (props: { param?: string }) => {
  const navigate = useNavigate();
  const [reviewList, setReviewList] = useState<ReviewType[]>();
  const [contact, setContact] = useState<string[]>([
    "010-4134-1275",
    "mail@gmail.com",
    "kang._.m_w",
  ]);
  const [academy, setAcademy] = useState<AcademyInfo>({
    id: "23",
    name: "학원이름",
    location: "학원위치",
    description:
      "이것은 설명이sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd다!",
    tags: ["수학", "영어"],
  });
  const [academyInfo, setacademyInfo] = useState({
    count: "5 ~ 9",
    goal: ["입시", "수능", "성적향상"],
  });
  const [academyPrice, setAcademyPrice] = useState([
    {
      academySubject: "수학",
      academyPrice: 100000,
      academyData: "한 달",
    },
    {
      academySubject: "영어",
      academyPrice: 150000,
      academyData: "일 년",
    },
  ]);
  const goPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const data = await getAcademy(props.param);
    setAcademy({
      id: data.data.academyId,
      name: data.data.academyName,
      location: data.data.address,
      description: data.data.academyInfo,
      tags: data.data.subject,
    });
    setContact(data.data.sns);
    setacademyInfo({
      count: data.data.Personnel,
      goal: [data.data.purpose],
    });
    setAcademyPrice(JSON.parse(data.data.academyPrice));
    const review = await getReviewList(props.param);
    setReviewList(review.review);
  };

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
                {academy.tags.map((value, idx) => (
                  <TagItem key={`academyItem-${idx}`} tag={value} />
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
                  {academy.tags.map((value, idx) => (
                    <span key={`subject-${idx}`}>{value}</span>
                  ))}
                </div>
                <div id={styles.subtitle}>
                  <FontAwesomeIcon icon={faPencil} />
                  수강 목적
                </div>
                <div id={styles.txt}>
                  {academyInfo.goal.map((value, idx) => (
                    <span key={`academy-goal-${idx}`}>{value}</span>
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
                  {contact.map((value, idx) => (
                    <span key={`contact-${idx}`}>{value}</span>
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
                <tbody>
                  <tr>
                    <th>과목명</th>
                    <th>강습비</th>
                    <th>수강기간</th>
                  </tr>
                  {academyPrice.map((value, idx) => {
                    return (
                      <tr className={styles.itemLine} key={`price-${idx}`}>
                        <td>{value.academySubject}</td>
                        <td>{value.academyPrice.toLocaleString()}</td>
                        <td>{value.academyData}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h3>학원 후기</h3>
              <div className={styles.review}>
                <div className={styles.write}>
                  <Review param={props.param} />
                </div>
              </div>
              <hr />
              <div className={styles.reviewList}>
                <div className={styles.wrapList}>
                  {reviewList
                    ? reviewList?.map((value, idx) => (
                        <ReviewItem key={`review-${idx}`} value={value} />
                      ))
                    : <div>리뷰를 처음으로 작성해보세요</div>}
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
