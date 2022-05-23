import styles from "../styles/chatView.module.css";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
// import MessageCard from "./MessageCard";

const ChatView = () => {                                                                      -
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messagesContainer}></div>
      <MessageForm />
    </div>
  );
};

export default ChatView;
