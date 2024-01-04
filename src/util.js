import {
  faBullhorn,
  faHeadset,
  faNewspaper,
  faPenToSquare,
  faBan,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner1 from "./assets/img/slider-item1.png";
import banner2 from "./assets/img/slider-item2.png";
import banner3 from "./assets/img/slider-item3.png";
import banner4 from "./assets/img/slider-item1.png";
import banner5 from "./assets/img/slider-item2.png";
import banner6 from "./assets/img/slider-item3.png";

export const getIconById = (targetId) => {
  const targetIconId = String(targetId);
  switch (targetIconId) {
    case "0":
      return <FontAwesomeIcon icon={faBullhorn} />;
    case "1":
      return <FontAwesomeIcon icon={faPenToSquare} />;
    case "2":
      return <FontAwesomeIcon icon={faBarsStaggered} />;
    case "3":
      return <FontAwesomeIcon icon={faHeadset} />;
    case "4":
      return <FontAwesomeIcon icon={faNewspaper} />;
    case "5":
      return <FontAwesomeIcon icon={faBan} />;
    default:
      return null;
  }
};

export const getBannerImgById = (targetId) => {
  const targetImgId = String(targetId);
  switch (targetImgId) {
    case "1":
      return banner1;
    case "2":
      return banner2;
    case "3":
      return banner3;
    case "4":
      return banner4;
    case "5":
      return banner5;
    case "6":
      return banner6;
    default:
      return null;
  }
};
