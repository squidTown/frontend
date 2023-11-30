import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import BottomNavbar from '../components/BottomNavbar'

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
