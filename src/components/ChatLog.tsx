import React from 'react'
import styles from '../styles/components/ChatLog.module.css'

const ChatLog = (props: {userPosition: string;}) => {
  return (
    <div className={styles.right}>
      <div className={styles.profile}></div>
      <div className={styles.textBox}>
        <div className={styles.tail}></div>
        <div className={styles.body}>안녕하세요</div>
      </div>
    </div>
  );
}

export default ChatLog;