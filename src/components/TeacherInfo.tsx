import React from 'react'
import containers from '../styles/pages/Container.module.css';
import styles from '../styles/components/TeacherInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const TeacherInfo = (props: { id: any }) => {
  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.profile}></div>

            <div className={styles.mainInfo}>
              <div className={styles.teachName}>
                <div>임현준</div>
                <span>선생님</span>
              </div>

              <div className={styles.location}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} className={styles.loIcon}/>
                </span>
                <span className={styles.loText}>경상남도 김해시 내외동</span>
              </div>

              <div className={styles.actRange}>
                활동범위 : 동상동, 회현동, 부원동, 내외동, 북부동
              </div>
            </div>
          </div>

          <div className={styles.introContainer}>
            <div className={styles.intro}>
            낭만 코선생입니다. 
            앞으로 잘 부탁드려요.
            </div>
          </div>

          <hr className={styles.contour} />
          

        </div>
      </div>
    </div>
  );
}

export default TeacherInfo;
