import React from 'react'
import BottomNavbar from '../components/Navbar/BottomNavbar'
import AcademyDetail from '../components/Academy/AcademyDetail'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <AcademyDetail param={id} />
      <BottomNavbar />
    </div>
  )
}

export default Detail
