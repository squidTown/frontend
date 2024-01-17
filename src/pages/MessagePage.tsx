import React from 'react'
import Header from "../components/Header/Header";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Message from '../components/Message/Message';
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