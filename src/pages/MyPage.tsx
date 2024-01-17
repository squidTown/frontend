import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import MyPageContainer from "../components/MyPage/MyPageContainer";
import BottomNavbar from "../components/Navbar/BottomNavbar";

const MyPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header location='마이페이지' />
      <MyPageContainer id={id} />
      <BottomNavbar />
    </div>
  );
};

export default MyPage;
