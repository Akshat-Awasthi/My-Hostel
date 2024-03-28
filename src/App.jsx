import React from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Login from "./Components/Login"
import Layout from "./Components/shared/Layout"
import Dashboard from "./Components/Dashboard"
import Menu from "./Components/Menu"
import Profile from "./Components/Profile"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/profile" element={<Profile/>} /> 
        </Route>
        <Route path="/login" element={<Login/>} />  
         
      </Routes>
    </Router>
  )
}

export default App
