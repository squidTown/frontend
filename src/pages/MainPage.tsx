import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/MainPage/Main'
import BottomNavbar from '../components/Navbar/BottomNavbar'

const MainPage = (props: {location: string}) => {
  return (
    <div>
      <Header location={props.location} />
      <Main />
      <BottomNavbar />
    </div>
  )
}

export default MainPage
