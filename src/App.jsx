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

// Pages
import PageTesting from "./pages/PageTesting";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import Equipment from "./pages/Equipment";
import Itinerary from "./pages/Itinerary";
import SignUp from "./pages/SignUp";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Router >
      <Top />

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
            path="/equipment"
            element={<Equipment/>}
          />

          <Route 
            path="/itinerary"
            element={<Itinerary/>}
          />

          <Route 
            path="/login"
            element={<Login/>}
          />

          <Route 
            path="/signup" 
            element={<SignUp/>}
          />

        </Routes>
      </main>

      <ComponentTesting />

      

    </Router>

  )
}

export default App;
