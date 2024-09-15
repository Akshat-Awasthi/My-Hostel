import React from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Login from "./Components/Login"
import Layout from "./Components/shared/Layout"
import Dashboard from "./Components/Dashboard"
import Menu from "./Components/Menu"
import Chart from "./Components/Chart"
import Profile from "./Components/Profile"
import Feedback from "./Components/Feedback"
import Complaint from "./Components/Complaint"
import FoodFeedbackSentimentAnalyzer from "./Components/MachineLearning/FoodFeedbackSentimentAnalyzer"
import Attendence from "./Components/MachineLearning/Attendence"

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/profile" element={<Profile/>} /> 
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/sentiment" element={<FoodFeedbackSentimentAnalyzer />} />
          <Route path="/attendence" element={<Attendence/>} />
          <Route path="/chart" element={<Chart />} />
        </Route>
        <Route path="/login" element={<Login/>} />  
      </Routes>
    </Router>
  )
}

export default App
