import containers from '../styles/pages/Container.module.css';
import styles from '../styles/components/Message.module.css';
import ChatListItem from './ChatListItem';
import ChatLog from './ChatLog';

const Message = () => {
  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.inner}>
          <div className={styles.chatList}>
            <ChatListItem name={"전병우"} chat={"안녕하세요"} />
          </div>

          <div className={styles.withChat}>
            <div className={styles.chatUser}>
              <div className={styles.chatUserInner}>
                <div>전병우</div>
                <span>선생님</span>
              </div>
            </div>
            <div className={styles.chatLog}>
              <ChatLog userPosition={"right"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;