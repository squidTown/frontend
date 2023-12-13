import React from 'react'
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import TeacherInfo from '../components/TeacherInfo';

const TeachInfo = () => {

  return (
    <div>
      <Header location="과외선생님 정보" />
      <TeacherInfo />
      <BottomNavbar />
    </div>
  );
}

export default TeachInfo;