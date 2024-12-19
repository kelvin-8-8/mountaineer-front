import React, { useState,useEffect } from 'react'
import { isLogin, checkRole } from '../services/authService';
import { Navigate } from "react-router-dom";

const ROLE_HIERARCHY = {
  "ROLE_GUEST": 1,
  "ROLE_MEMBER": 2,
  "ROLE_ADMIN": 3,
  };

const ProtectedRoute = ({ children, requireRole }) => {

  const [status, setStatus] = useState({isLoggedIn: null, role: null, isLoading: true});

  // ******* useEffect
  useEffect(() => {

    setStatus({isLoggedIn: true, role: "ROLE_GUEST", isLoading: false});

      // const checkAuthority = async () => {
      //     try {
      //         const isLoginResponse = await isLogin();
      //         console.log(isLoginResponse.data);
              
      //         if (isLoginResponse.data) {
      //           const roleResponse = await checkRole();
      //           setStatus({isLoggedIn: true, role: roleResponse.data.data.role, isLoading: false});
      //           console.log(status.isLoggedIn, status.role, status.isLoading);
      //         } else {
      //           setStatus({isLoggedIn: false, role: null, isLoading: false});
      //           console.log("不應該啊!??怎麼登入了還沒身分??")
      //         }

      //     } catch (error) {
      //         setStatus({isLoggedIn: null, role: null, isLoading: false});
      //     }
      // }

      // checkAuthority();
  }, []);
  // ******* useEffect

  useEffect(() => {
    console.log('Status 更新:', status.isLoggedIn, status.role, status.isLoading);
  }, [status]);

  // if (status.isLoading) {
  //   return <Navigate to="/loading" replace />;
  // }

  // if (status.isLoggedIn === null) {
  //     return(<Navigate to="/loading" replace />);
  // }

  // // 未登入，導向首頁頁
  // if (!status.isLoggedIn) {
  //   return <Navigate to="/" replace />;
  // }

  // if (requireRole && ROLE_HIERARCHY[status.role] < ROLE_HIERARCHY[requireRole]) {
  //   return <Navigate to="/equipment" replace />;
  // }

  return (
    <div></div>
  )
}

export default ProtectedRoute;

