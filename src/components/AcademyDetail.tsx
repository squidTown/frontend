import React, { useEffect, useState } from "react";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/AcademyDetail.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface UserContact {
  tel: string;
  mail: string;
  instagram: string;
}

const AcademyDetail = (props: { param?: string }) => {
  const navigate = useNavigate();
  const [userCareer, setUserCareer] = useState<string[]>([]);
  const [price, setPrice] = useState<string>("100,000");
  const [contact, setContact] = useState<UserContact>({
    tel: "010-4134-1275",
    mail: "mail@gamil.com",
    instagram: "kang._.m_w",
  });
  const goPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    let careers = ["박사 취득", "16년차"];
    let arr = [...careers];
    setUserCareer(arr);
  }, []);

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
              <span className={styles.title}>학원이름</span>
              <span className={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} />
                &emsp;학원위치
              </span>
              <span className={styles.tag}>태그들</span>
            </div>
            <div className={styles.main}>
              <hr />
              <div className={styles.description}>이것은 설명이다 !</div>
              <hr />
              <h3>경력</h3>
              <div className={styles.career}>
                {userCareer.map((value: string) => (
                  <li>{value}</li>
                ))}
              </div>
              <hr />
              <h3>가격</h3>
              <div className={styles.price}>
                <div className={styles.label}>
                  <span>{price}원/월</span>
                  <div className={styles.a1} />
                  <div className={styles.a2} />
                </div>
              </div>
              <hr />
              <h3>연락처</h3>
              <ul className={styles.contact}>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  &emsp;
                  <a href={`tel:${contact.tel}`}>
                    {contact.tel}
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &emsp;
                  <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                  &emsp;
                  <a href={`https://www.instagram.com/${contact.instagram}/`}>
                    {contact.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetail;
