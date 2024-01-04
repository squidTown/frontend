import React from 'react'
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import Message from '../components/Message';
import { useParams } from 'react-router-dom';

const MessagePage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header location="메세지" />
      <Message id={id}/>
      <BottomNavbar />
    </div>
  );
}

export default MessagePage;