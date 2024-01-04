import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Map from './pages/Map'
import MyPage from './pages/MyPage'
import MainPage from './pages/MainPage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import UserInfoAlter from './pages/UserInfoAlter'
import TeachInfo from './pages/TeachInfo'
import Academy from './pages/Academy'
import Detail from './pages/Detail'
import TeachList from './pages/TeachList'
import MessagePage from './pages/MessagePage'
import Addition from './pages/Addition'

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
  academyId: string;
  academyName: string;
  name: string;
  Personnel: string;
  subject: string[];
  purpose: string[];
  academyPrice: string;
  address: string;
  Latitude: number;
  longitude: number;
  academyInfo: string;
  sns: string[];
  img: string;
};

export type TeacherType = {
  id: number;
  name: string;
  actRange: string[];
  tag: string[];
};

const App = () => {
  const [locations, setLocations] = useState("경북 의성군 봉양면 화전리");

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage location={locations} />} />
        <Route path='/map' element={<Map location={locations} setLocation={setLocations} />} />
        <Route path='/message/:id' element={<MessagePage />} />
        <Route path='/mypage/:id' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/alteruser/:id' element={<UserInfoAlter />} />
        <Route path='/teacher' element={<TeachList />} />
        <Route path='/teacher/:id' element={<TeachInfo />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/academy/:id' element={<Detail />} />
        <Route path='/add/academy' element={<Addition />} />
      </Routes>
    </div>
  )
}

export default App;