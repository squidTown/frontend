import styles from '../styles/components/ChatListItem.module.css';

const ChatListItem = (props: {name: string; chat: string;}) => {
  return (
    <div className={styles.listItemInner}>
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
              <span>{props.chat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;