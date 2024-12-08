import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import PageTesting from "./pages/PageTesting";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import ComponentTesting from "./components/ComponentTesting";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Router >
      <Top/>

      <main>
        <Routes>
          <Route
            path="/"
            element={ <Home/>}
          />

          <Route
            path="/about"
            element={ <About/>}
          />

          <Route 
            path="/feature"/>

          <Route 
            path="/login"
            element={<Login/>}
          />



        </Routes>
      </main>

      <ComponentTesting />

      

    </Router>

  )
}

export default App;
