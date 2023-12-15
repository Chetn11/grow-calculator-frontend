import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import Calculator from '../pages/Calculator'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
      <Route path="/calculator" element={<PrivateRoute><Calculator/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes
