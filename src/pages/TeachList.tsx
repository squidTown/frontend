import React from 'react'
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import TeacherList from '../components/TeacherList';

const TeachList = () => {
  return (
    <div>
      <Header location="선생님 목록" />
      <TeacherList />
      <BottomNavbar />
    </div>
  );
}

export default TeachList;