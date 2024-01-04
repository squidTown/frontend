import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import containers from "../styles/pages/Container.module.css";
import styles from "../styles/components/Message.module.css";
import UserListItem from "./UserListItem";
import chattingListData from "../assets/json/chatting.json";

const Message = (props: { id: any }) => {
  const [selectedUserName, setSelectedUserName] = useState(`${chattingListData.users[props.id - 1].name}`);
  const [message, setMessage] = useState("");
  const [chattingList, setChattingList] = useState(chattingListData);
  const chatLogRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    scrollToBottom();
  }, [chattingList, props.id])

  // 맨 밑으로 자동 스크롤
  const scrollToBottom = () => {
    const chatLog = chatLogRef.current;
    chatLog?.scrollTo(0, chatLog.scrollHeight);
  };

  const handleUserItemClick = (name: string, id: any) => {
    navigate(`/message/${id}`);
    setSelectedUserName(name);
  };

    // 로컬 채팅 추가
  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const updatedChattingList = { ...chattingList };
    const userIndex = props.id - 1;

    updatedChattingList.users[userIndex].messages.push({
      index: String(chattingList.users[userIndex].messages.length + 1),
      id: "1",
      chat: message,
    });

    setMessage("");
    setChattingList(updatedChattingList);
    scrollToBottom();
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.inner}>
          <div className={styles.chatList}>
            {chattingList.users.map((element) => {
              const lastMessage = element.messages.length > 0 ? element.messages[element.messages.length - 1].chat : '';

              return (
                <UserListItem
                  key={element.index}
                  name={element.name}
                  last={lastMessage}
                  onClick={() =>
                    handleUserItemClick(element.name, element.index)
                  }
                />
              );
            })}
          </div>

          <div className={styles.withChat}>
            <div className={styles.chatUser}>
              <div className={styles.chatUserInner}>
                <div className={styles.chatUserProfile}></div>
                <span className={styles.chatUserName}>{selectedUserName}</span>
              </div>
            </div>
            <div className={styles.chatLog} ref={chatLogRef}>
              {chattingListData.users[props.id - 1]?.messages.map(
                (element) => {
                  return (
                    <div
                      key={element.index}
                      className={styles.messageContainer}
                    >
                      {element.id === "1" ? (
                        <div className={styles.myMessageContainer}>
                          <div className={styles.myMessage}>{element.chat}</div>
                        </div>
                      ) : (
                        <div className={styles.yourMessageContainer}>
                          <div className={styles.yourMessage}>
                            {element.chat}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            <div className={styles.inputArea}>
              <form className={styles.inputContainer}>
                <input
                  placeholder="입력..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  aria-multiline={false}
                />
                <button
                  disabled={message === ""}
                  type="button"
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                >
                  전송
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;