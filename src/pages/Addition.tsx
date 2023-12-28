import React from 'react'
import Header from '../components/Header';
import BottomNavbar from '../components/BottomNavbar';
import AddContainer from '../components/AddContainer';

const Addition = () => {
  return (
    <>
    <Header location='학원 등록하기'/>
    <AddContainer />
    <BottomNavbar />
    </>
  )
}

export default Addition
