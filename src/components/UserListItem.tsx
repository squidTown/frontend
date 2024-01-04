import styles from '../styles/components/UserListItem.module.css';

const ChatListItem = (props: {name: string, onClick: () => void, last: string}) => {
  return (
    <div className={styles.listItemInner} onClick={props.onClick}>
      <div className={styles.listItem}>
        <div className={styles.user}>
          <div className={styles.prfInner}>
            <div className={styles.profile}></div>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <span>{props.name}</span>
            </div>
            <div className={styles.chat}>
              <span>{props.last}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;