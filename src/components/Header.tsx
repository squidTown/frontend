import styles from "../styles/components/Header.module.css"

const Header = (props: {location: string}) => {
  return (
    <div className={styles.container}>
      <span className={styles.location}>{props.location}</span>
    </div>
  );
};

export default Header;