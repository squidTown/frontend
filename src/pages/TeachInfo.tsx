import React from 'react'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import TeacherInfo from '../components/TeacherInfo';

const TeachInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <Header location="과외선생님 정보" showPrevButton={true} />
      <TeacherInfo id={id}/>
    </div>
  );
}

export default TeachInfo;