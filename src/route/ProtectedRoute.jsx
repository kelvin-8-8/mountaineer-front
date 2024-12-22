import React, { useState, useEffect } from 'react'
import { isLogin, checkRole } from '../services/authService';
import { Navigate } from "react-router-dom";
import Loading from '../pages/Loading';

const ROLE_HIERARCHY = {
  "ROLE_GUEST": 1,
  "ROLE_MEMBER": 2,
  "ROLE_ADMIN": 3
}


const ProtectedRoute = ({ children, requiredRole}) => {

  const [state, setState] = useState({isLoggedIn: null, role: null})

  useEffect(() => {
    const fetchstats = async () => {
      try {
        const loginResponse = await isLogin();
        const roleResponse = await checkRole();
        setState({isLoggedIn: loginResponse.data, role: roleResponse.data.role})
        
        
      } catch (error) {
        setState({isLoggedIn: null, role: null});
      }
    };

    fetchstats();

  }, []);

  if (state.isLoggedIn === null) {
    return <Loading />
  } else if (state.isLoggedIn === false) {
    return <Navigate to="/signup" replace />
  } else {
    if (requiredRole && ROLE_HIERARCHY[requiredRole] < ROLE_HIERARCHY[state.role]) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return children
};

export default ProtectedRoute;

