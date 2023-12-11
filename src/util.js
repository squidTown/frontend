import { faBullhorn, faHeadset, faNewspaper, faPenToSquare, faBan, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getIconById = (targetId) => {
  const targetIconId = String(targetId);
  switch (targetIconId) {
    case "0": 
      return <FontAwesomeIcon icon={faBullhorn} />
    case "1":
      return <FontAwesomeIcon icon={faPenToSquare} />
    case "2": 
      return <FontAwesomeIcon icon={faBarsStaggered} />
    case "3":
      return <FontAwesomeIcon icon={faHeadset} />
    case "4":
      return <FontAwesomeIcon icon={faBan} />
    case "5":
      return <FontAwesomeIcon icon={faNewspaper} />
    default: 
      return null;
  }
}