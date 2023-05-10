import React from 'react'
import "./components/navbar.css";
import "./index.css";
import "./components/signup.css";
import "./components/thyroid.css";
import "./components/login.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Learn from "./components/Learn"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import Periods from "./components/Periods"
import Pcod from "./components/Pcod"
import Thyroid from "./components/Thyroid"
import  "./components/pcod.css"
import  "./components/periods.css"


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
            <Route path="/Periods" element={<Periods/>}/>
            <Route path="/Pcod" element={<Pcod/>}/>
            <Route path="/Thyroid" element={<Thyroid/>}/>
        </Routes>
        
        
    </Router>
    
    </>
    )
}
    

export default App 

 








