

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
  const {providerState}=useContext(AuthContext);
  if(!providerState.state.isAuth){
    return <Navigate to='/login'/>
  }
  return children;
}

export default PrivateRoute
