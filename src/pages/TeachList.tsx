import React from 'react'
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import TeacherList from '../components/TeacherList';

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