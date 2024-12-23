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
import Layout from "./pages/Layout";
import PageTest from "./pages/PageTest";
import PageTesting from "./pages/PageTesting";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import Equipment from "./pages/Equipment";
import Itinerary from "./pages/Itinerary";
import SignUp from "./pages/SignUp";
import Loading from "./pages/Loading";
import Unauthorized from "./pages/Unauthorized";
import Profile from "./pages/Profile";  
import Create from "./pages/Create";
import CreateEquipment from "./pages/CreateEquipment";
import CreateItinerary from "./pages/CreateItinerary";
import AdminPage from "./pages/AdminPage";


// Services
import { isLogin } from "./services/authService";



function App() {

  const [authState, setAuthState] = useState({
    isLoggedIn: null,
    role: null
  });

  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  return (
    <Router future={{
      v7_startTransition: true,  // 啟用 startTransition
      v7_relativeSplatPath: true // 啟用相對 Splat 路徑解析
    }}>

      <Routes>
        {/* 包含 Navbar 和 Footer 的全局佈局 */}
        <Route 
          path="/" 
          element=
            {<Layout 
              isLoggedIn={authState.isLoggedIn} 
              role={authState.role}
              updateAuthState={updateAuthState}/>}>

          {/* 公開路由 */}
          
          <Route index                element={<Home />} />
          <Route path="about"         element={<About />} />
          <Route path="signup"        element={<SignUp />}/>
          <Route path="login"         element={<Login />} />
          <Route path="equipment"     element={<Equipment />} />
          <Route path="itinerary"     element={<Itinerary />} />
          <Route path="loading"       element={<Loading />} />
          <Route path="unauthorized"  element={<Unauthorized />}/>
          <Route path="test"          element={<PageTest />}/>
          <Route path="testing"       element={<PageTesting />} />


          {/* 受保護路由 - 需要登入 */}
          <Route
            path="profile"
            element={
              <ProtectedRoute requireRole="ROLE_MEMBER">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* 受保護路由 - 需要 member 或更高 */}
          <Route
            path="create/*"
            element={
              <Create />
            //   <ProtectedRoute requireRole="ROLE_MEMBER">
            //     <Create />
            //   </ProtectedRoute>
            }
          />
          <Route
            path="create/equipment"
            element={
              <CreateEquipment/>
              // <ProtectedRoute requireRole="ROLE_MEMBER">
              //   <CreateEquipment/>
              // </ProtectedRoute>
            }
          />
          <Route
            path="create/itinerary"
            element={
              <ProtectedRoute requireRole="ROLE_MEMBER">
                <CreateItinerary/>
              </ProtectedRoute>
            }
          />

          {/* 受保護路由 - 需要 admin */}
          <Route
            path="admin"
            element={
              <ProtectedRoute requireRole="ROLE_ADMIN">
                <AdminPage />
              </ProtectedRoute>
            }
          />
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