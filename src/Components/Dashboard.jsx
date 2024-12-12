import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { PiHandWavingFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import Rightbar from './Rightbar';
import WeekFeedback from './lib/const/WeekFeedback.json';
import TodayMenu from './lib/const/TodayMenu.json';
import P5Sketch from './Animation/P5Sketch';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = 'black';

function Dashboard() {
  const [name, setName] = useState(''); // State to store the fetched name
  const [LoadingTime, setLoadingTime] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = React.useRef(null);

  const handleButton = () => {
    setLoadingTime(true);
    timeoutRef.current = setTimeout(() => {
      setLoadingTime(false);
    }, 5000);
    setTimeout(() => {
      navigate('/sentiment');
    }, 1000);
  };

  useEffect(() => {
    // Fetch name from backend API using token
    const fetchName = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage

      if (!token) {
        console.error('Auth token is missing');
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/api/v1/users/getUser', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        setName(data.username);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchName();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const colors = ['bg-purple-200', 'bg-blue-200', 'bg-blue-100', 'bg-green-200'];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-3 min-h-screen gap-4">
      <div className="flex flex-col gap-6 w-full lg:w-3/4 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-4 rounded-lg shadow-lg">
        <div className="flex flex-row items-center text-lg font-semibold text-gray-700">
          <div className="text-2xl pr-2">
            <PiHandWavingFill />
          </div>
          <h1>Welcome, {name}!</h1>
        </div>

        {/* Today's Menu */}
        <div className="p-6 rounded-lg bg-white shadow-md">
          <div className="flex flex-row justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-bold text-gray-700">Today's Menu</h2>
            <Link to="/Menu" className="text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TodayMenu.map((item, index) => (
              <div key={item.time} className={`p-4 rounded-md ${colors[index % colors.length]} shadow-md`}>
                <ul className="space-y-2">
                  <li className="font-bold text-lg">{item.time}</li>
                  <li>{item.item1}</li>
                  <li>{item.item2}</li>
                  <li>{item.item3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="p-6 rounded-lg bg-white shadow-md flex-1">
            <h1 className="text-lg font-semibold mb-4 text-gray-700">Write a Complaint</h1>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Click here to proceed
              <span className="ml-2">→</span>
            </button>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-md flex-1">
            <h1 className="text-lg font-semibold mb-4 text-gray-700">Check Leave Status</h1>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Click here to proceed
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Sentiment Analysis</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="text-lg w-full sm:w-48 font-semibold text-white bg-green-500 px-6 py-2 rounded-2xl hover:bg-white hover:text-green-500 hover:border-green-500 transition duration-300">
              Positive
            </button>
            <P5Sketch />
            <button className="text-lg w-full sm:w-48 font-semibold text-white bg-red-500 px-6 py-2 rounded-2xl hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300">
              Negative
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleButton}
              className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 ${
                LoadingTime ? 'cursor-progress' : 'cursor-pointer'
              } transition duration-300`}
            >
              Press to Analyse <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Weekly Feedback Chart */}
        <div className="p-6 rounded-lg bg-white shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">Weekly Feedback</h2>
            <Link to="/chart" className="text-blue-600 hover:underline">
              Click Here
            </Link>
          </div>
          <div className="h-64 sm:h-80 lg:h-[50vh]">
            <Line
              data={{
                labels: WeekFeedback.map((data) => data.label),
                datasets: [
                  {
                    label: 'Positive',
                    data: WeekFeedback.map((data) => data.Positive),
                    borderColor: '#64b5f6',
                    tension: 0.4,
                  },
                  {
                    label: 'Negative',
                    data: WeekFeedback.map((data) => data.Negative),
                    borderColor: '#ef5350',
                    tension: 0.4,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-1/4">
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
