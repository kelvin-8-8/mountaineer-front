import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { Top } from "./components/Top";
import { Pics } from "./components/Pics";

function App() {

  return (
    <>
      <Top/>
      <img src="/Mountain.jpg" alt="image loss" />
    </>
  )
}

export default App;
