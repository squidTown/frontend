import styles from "../../styles/components/Header/Header.module.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = (props: {location: string, showPrevButton?: boolean}) => {
  const navigate = useNavigate();

  const goPrev = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      {props.showPrevButton && (
        <div className={styles.pageWidth}>
          <div className={styles.prev} onClick={goPrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div>
      )}
      <span className={styles.location}>{props.location}</span>
    </div>
  );
};

export default Header;