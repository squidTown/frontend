import React from 'react'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import TeacherInfo from '../components/TeacherInfo';

const TeachInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <Header location="과외선생님 정보" />
      <TeacherInfo id={id}/>
      <BottomNavbar />
    </div>
  );
}

export default TeachInfo;