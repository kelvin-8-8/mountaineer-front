import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Pics from "./components/Pics";
import Home from "./pages/Home";
import About from "./pages/About"
import PageTesting from "./pages/PageTesting"

function App() {

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
            path="/"/>



        </Routes>
      </main>

      <Footer />

      

    </Router>

  )
}

export default App;
