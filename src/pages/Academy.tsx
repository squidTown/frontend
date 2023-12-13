import React from 'react'
import AcademyList from '../components/AcademyList'
import Header from '../components/Header'
import BottomNavbar from '../components/BottomNavbar'

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
