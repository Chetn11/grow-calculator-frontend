import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function NavBar() {
  const {providerState}=useContext(AuthContext);
    const navigate=useNavigate();
  return (
    <div className='navbar' style={{padding:"20px",display:"flex", justifyContent:"center", gap:"100px", }}>
     <Link to='/profile' style={{textDecoration:"none",fontSize:"large"}}>Profile</Link>
      <Link to='/calculator' style={{textDecoration:"none", fontSize:"large"}}>Calculator</Link>
      <Link to='/login' style={{textDecoration:"none",fontSize:"large"}}>Login</Link>
      <Link to='/signup' style={{textDecoration:"none", fontSize:"large"}}>Signup</Link>
      
    </div>
  )
}

export default NavBar
