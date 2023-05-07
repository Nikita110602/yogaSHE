import React from 'react'
import "./components/navbar.css";
import "./index.css";
import "./components/signup.css";
import "./components/login.css";

import Navbar from "./components/Navbar";

import Home from "./components/Home"
import Learn from "./components/Learn"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
const App = () => {
  return (
    <>
  
  <Router>
  <Navbar/>
  
        <Routes>
        
            <Route path="/" element ={<Home/>}/>
            <Route path="/Learn" element={<Learn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<LogIn/>}/>
        </Routes>
        
        
    </Router>
    
    </>
  )
}

export default App 

 








