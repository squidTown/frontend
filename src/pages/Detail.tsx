import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import AcademyDetail from '../components/AcademyDetail'
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
