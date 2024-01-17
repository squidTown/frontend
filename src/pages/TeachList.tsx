import React from 'react'
import Header from "../components/Header/Header";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import TeacherList from '../components/Teacher/TeacherList';

const TeachList = () => {
  return (
    <div>
      <Header location="과외선생님 찾아보기" />
      <TeacherList />
      <BottomNavbar />
    </div>
  );
}

export default TeachList;