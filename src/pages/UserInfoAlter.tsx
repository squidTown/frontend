import React from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header'
import AlterUser from '../components/AlterUser'
import BottomNavbar from '../components/BottomNavbar'

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
