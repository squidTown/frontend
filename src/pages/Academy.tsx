import React from 'react'
import AcademyList from '../components/Academy/AcademyList'
import Header from '../components/Header/Header'
import BottomNavbar from '../components/Navbar/BottomNavbar'

const Academy = () => {
  return (
    <div>
      <Header location={"학원 찾아보기"} />
      <AcademyList />
      <BottomNavbar />
    </div>
  )
}

export default Academy
