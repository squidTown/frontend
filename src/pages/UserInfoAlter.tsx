import React from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header'
import AlterUser from '../components/MyPage/AlterUser'
import BottomNavbar from '../components/Navbar/BottomNavbar'

const UserInfoAlter = () => {
  const { id } = useParams();

  return (
    <div>
      <Header location='내 정보 변경' />
      <AlterUser id={id} />
      <BottomNavbar />
    </div>
  )
}

export default UserInfoAlter
