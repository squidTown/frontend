import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import TeacherInfo from '../components/Teacher/TeacherInfo';

const TeachInfo = () => {
  const { id } = useParams();

  return (  
    <div>
      <Header location="과외선생님 정보" showPrevButton={true} />
      <TeacherInfo param={id}/>
    </div>
  );
}

export default TeachInfo;