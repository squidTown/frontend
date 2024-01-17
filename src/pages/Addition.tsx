import React from 'react'
import Header from '../components/Header/Header';
import BottomNavbar from '../components/Navbar/BottomNavbar';
import AddContainer from '../components/Academy/AddContainer';

const Addition = () => {
  return (
    <>
    <Header location='학원 등록'/>
    <AddContainer />
    <BottomNavbar />
    </>
  )
}

export default Addition
