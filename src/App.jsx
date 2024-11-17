
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Complaint from './Components/Complaint';
import Dashboard from './Components/Dashboard';
import Feedback from './Components/Feedback';
import Login from './Components/Login';
import FoodFeedbackSentimentAnalyzer from './Components/MachineLearning/FoodFeedbackSentimentAnalyzer';
import Menu from './Components/Menu';
import PrivateRoute from './Components/PrivateRoute'; // Import the PrivateRoute component
import Profile from './Components/Profile';
import Layout from './Components/shared/Layout';
import Chart from "./Components/Chart"
import Attendence from "./Components/MachineLearning/Attendence"
import Sentiment from "./Components/MachineLearning/Sentiment"


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/sentiment" element={<FoodFeedbackSentimentAnalyzer />} />
            <Route path="/attendence" element={<Attendence/>} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/sentimentN" element={<Sentiment />} />

          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
