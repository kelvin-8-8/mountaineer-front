import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components 
import Top from "./components/Top";
import Footer from "./components/Footer";
import ComponentTesting from "./components/ComponentTesting";
import ProtectedRoute from "./route/ProtectedRoute";

// Pages
import PageTesting from "./pages/PageTesting";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import Equipment from "./pages/Equipment";
import Itinerary from "./pages/Itinerary";
import SignUp from "./pages/SignUp";
import Loading from "./pages/Loading";
import Profile from "./pages/Profile";  
import Layout from "./pages/Layout";

// Services
import { isLogin } from "./services/authService";



function App() {
  
  isLogin().then(result => {
    console.log("isLoggedIn:", result);
  }).catch(error => {
    console.error("發生錯誤:", error);
  });
  

  return (
    <Router future={{
      v7_startTransition: true,  // 啟用 startTransition
      v7_relativeSplatPath: true // 啟用相對 Splat 路徑解析
    }}>

      <Routes>
        {/* 包含 Navbar 和 Footer 的全局佈局 */}
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn}/>}>

          {/* 公開路由 */}
          <Route index                element={<Home />} />
          <Route path="login"         element={<Login />} />
          <Route path="loading"       element={<Loading />} />
          <Route path="equipment"     element={<Equipment/>} />
          <Route path="itinerary"     element={<Itinerary/>} />

          {/* 受保護路由 - 需要登入 */}
          <Route
            path="profile"
            element={
              <ProtectedRoute requireRole="user">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* 受保護路由 - 需要 member 或更高 */}
          {/* <Route
            path="create"
            element={
              <ProtectedRoute requireRole="member">
                <Create />
              </ProtectedRoute>
            }
          /> */}

          {/* 受保護路由 - 需要 admin */}
          {/* <Route
            path="admin"
            element={
              <ProtectedRoute requireRole="admin">
                <AdminPage />
              </ProtectedRoute>
            }
          /> */}
        </Route>
      </Routes>
      

    </Router>

  )
}

export default App;


//<Routes>
//        {/* <Route path="/admin/*" element={<AdminRouter />}></Route> */}
//       <Route path="/boss/*" element={<BossRouter userData={userData} />}></Route>
//        <Route path="/member/*" element={<MemberRouter userData={userData} />}></Route>
//        <Route path="/*" element={<VisitorRouter userData={ userData} />}></Route>
//</Routes>