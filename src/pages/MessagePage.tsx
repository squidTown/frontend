import React from 'react'
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import Message from '../components/Message';

const MessagePage = () => {
  return (
    <div>
      <Header location="메세지" />
      <Message />
      <BottomNavbar />
    </div>
  );
}

export default MessagePage;