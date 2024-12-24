import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AuthContext, AuthProvider } from "./route/AuthContext"; 

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
import { isLogin, checkRole } from "./services/authService";



function App() {

  // 狀態控制
  const [authState, setAuthState] = useState({
    isLoggedIn: null,
    role: null
  });
  const updateAuthState = (newState) => {
    setAuthState(prev => ({
      ...prev,
      ...newState
    }));
  };
  useEffect(() => {
    const fetchstats = async () => {
      try {
        const loginResponse = await isLogin();
        const roleResponse = await checkRole();
        setAuthState({
          isLoggedIn: loginResponse.data,
          role: roleResponse.data.role
        });
      } catch (error) {
        console.error("登入狀態檢查失敗", error);
        setAuthState({ isLoggedIn: null, role: null });
      }
    };

    fetchstats();

  }, [setAuthState]);

  // 購物車
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("加到購物車", item);
    setCart((prev) => {
      // 在原本的cart中尋找有沒有一樣的name
      const existingItemIndex = prev.findIndex(cartItem => cartItem.name === item.name);

      if (existingItemIndex !== -1) {
        // 商品已存在，更新數量
        const updatedCart = prev.map((cartItem, index) => 
          index === existingItemIndex
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
        );
      return updatedCart;
      }
      return [...prev, item];
    })
      
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter(cartItem => cartItem.name !== name));
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
}, [cart]);



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
              updateAuthState={updateAuthState} 
              cart={cart}
              addToCart={addToCart} 
              removeFromCart={removeFromCart} />}>

            {/* 公開路由 */}

            <Route index                element={<Home />} />
            <Route path="about"         element={<About />} />
            <Route path="signup"        element={<SignUp />} />
            <Route path="login"         element={<Login updateAuthState={updateAuthState} />} />
            <Route path="equipment"     element={<Equipment addToCart={addToCart} />} />
            <Route path="itinerary"     element={<Itinerary />} />
            <Route path="loading"       element={<Loading />} />
            <Route path="unauthorized"  element={<Unauthorized />} />
            <Route path="test"          element={<PageTest />} />
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
                <CreateEquipment />
                // <ProtectedRoute requireRole="ROLE_MEMBER">
                //   <CreateEquipment/>
                // </ProtectedRoute>
              }
            />
            <Route
              path="create/itinerary"
              element={
                <ProtectedRoute requireRole="ROLE_MEMBER">
                  <CreateItinerary />
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