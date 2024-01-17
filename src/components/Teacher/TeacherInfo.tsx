import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import containers from '../../styles/pages/Container.module.css';
import styles from '../../styles/components/Teacher/TeacherInfo.module.css'
import { Link } from 'react-router-dom';
import PriceList from '../Price/PriceList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

interface UserContact {
  tel: string;
  mail: string;
  instagram: string;
}

interface TInfo {
  name: string;
  actRange: string[];
  description: string;
  tags: string[];
}

const TeacherInfo = (props: { param?: any }) => {
  const [userCareer, setUserCareer] = useState<string[]>([]);
  const [price, setPrice] = useState<string>("160,000");
  const [contact, setContact] = useState<UserContact>({
    tel: "010-1234-1234",
    mail: "thisismail@gmail.com", 
    instagram: "@thisis.insta"
  });
  const [teacher, setTeacher] = useState<TInfo>({
    name: "임현준",
    actRange: ["지역1", "지역2"],
    description: 
    `안녕하세요! 과외 선생님 임현준 입니다.
    만나서 반가워요.`,
    tags: ["국어", "수학"]
  });

  useEffect(() => {
    let careers = ["OO대학 OO학과 재학", "OO검정능력시헙 2급"];
    let arr = [...careers];
    setUserCareer(arr);
  }, []);

  const navigate = useNavigate();

  const goMessage = () => {
    navigate(`/message/1`);
  }

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.profile}></div>

            <div className={styles.mainInfo}>
              <div className={styles.teachName}>
                <div>{teacher.name}</div>
                <span>선생님</span>
              </div>

              <div className={styles.actRange}>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.loIcon}
                  />
                  &nbsp;활동범위 :
                </span>
                <span className={styles.loText}>
                  {teacher.actRange.map(
                    (value, index, array) =>
                      `${value}${index === array.length - 1 ? "" : ", "}`
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.introContainer}>
            <div className={styles.intro}>{teacher.description}</div>
          </div>

          <hr className={styles.contour} />

          <div className={styles.priceLists}>
            <div className={styles.infoInner}>
              <div className={styles.infoTitle}>수업 가격</div>
              {teacher.tags.map((value: any) => (
                <PriceList
                  key={`${value}`}
                  classTitle={`${value}과외`}
                  price={price}
                />
              ))}
            </div>
          </div>

          <hr className={styles.contour} />

          <div className={styles.infoInner}>
            <div className={styles.infoTitle}>경력사항</div>
            <div className={styles.content}>
              {userCareer.map((value: string) => (
                <div>{value}</div>
              ))}
            </div>
          </div>

          <hr className={styles.contour} />

          <div className={`${styles.infoInner} ${styles.lastInner}`}>
            <div className={styles.infoTitle}>연락처</div>
            <div className={styles.content}>
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.snsIcon}
                />
                <Link
                  to={`https://www.instagram.com/${contact.instagram}/`}
                  className={styles.snsText}
                >
                  {contact.instagram}
                </Link>
              </div>

              <div>
                <FontAwesomeIcon icon={faPhone} className={styles.snsIcon} />
                <Link to={`tel:${contact.tel}`} className={styles.snsText}>
                  {contact.tel}
                </Link>
              </div>

              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.snsIcon} />
                <Link to={`mailto:${contact.mail}`} className={styles.snsText}>
                  {contact.mail}
                </Link>
              </div>
            </div>
          </div>

          <hr className={styles.contour} />
          <div onClick={goMessage} className={styles.startMessage} >
            메세지 시작하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherInfo;