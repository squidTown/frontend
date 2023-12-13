import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import location from './assets/json/location.json'
import Map from './pages/Map'
import MyPage from './pages/MyPage'
import MainPage from './pages/MainPage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import UserInfoAlter from './pages/UserInfoAlter'
import { EmailCheck } from './pages/EmailCheck'
import TeachInfo from './pages/TeachInfo'
import Academy from './pages/Academy'
import Detail from './pages/Detail'
import TeachList from './pages/TeachList'

export interface UserInfo {
  userId: number;
  email: string;
  password: string;
  name: string;
  birth: string;
  sex: number;
  addressName: string;
  let: number;
  lnt: number;
}

export type AcademyType = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  location: string;
  tag: string[];
};

const App = () => {
  const [locations, setLocations] = useState("경북 의성군 봉양면 화전리");
  const academyList: AcademyType[] = location.positions;
  const [citation, setCitation] = useState<string>('인증번호 발송')

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage location={locations} />} />
        <Route path='/map' element={<Map academyList={academyList} location={locations} setLocation={setLocations} />} />
        <Route path='/mypage/:id' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register citation={citation} />} />
        <Route path='/alteruser/:id' element={<UserInfoAlter />} />
        <Route path='/emailCheck/:email' element={<EmailCheck setCitation={setCitation} />} />
        <Route path='/teacher' element={<TeachList />} />
        <Route path='/teacher/:id' element={<TeachInfo />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/academy/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;