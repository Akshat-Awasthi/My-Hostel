import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { PiHandWavingFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import Rightbar from './Rightbar';
import StudentProfile from './lib/const/StudentProfile.json';
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
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const colors = ['bg-purple-200', 'bg-blue-200', 'bg-blue-100', 'bg-green-200'];
  const name = StudentProfile[0].name;

  return (
    <div className='flex flex-row justify-between w-full p-3  min-h-screen '>
      <div className='flex flex-col gap-4 w-full bg-gradient-to-r from-blue-100 to-purple-100 mr-2 px-7 py-3 rounded-lg shadow-lg'>
        <div className='flex flex-row items-center pl-3 text-xl font-semibold text-gray-700'>
          <div className='text-xl pr-2'><PiHandWavingFill /></div>
          <h1>Welcome, {name}!</h1>
        </div>

        {/* Today's Menu */}
        <div className='p-6 rounded-lg  bg-white shadow-md w-full'>
          <div className='flex flex-row justify-between items-center border-b pb-2 mb-2  relative'>
            <h2 className='text-lg font-bold text-gray-700'>Today's Menu</h2>
            <Link to='/Menu' className='text-blue-600 hover:underline'>View all</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {TodayMenu.map((item, index) => (
              <div key={item.time} className={`w-full h-auto p-6 rounded-md ${colors[index % colors.length]} shadow-md`}>
                <ul className='flex flex-col gap-3'>
                  <li className='font-bold text-lg'>{item.time}</li>
                  <li className='list-disc'>{item.item1}</li>
                  <li className='list-disc'>{item.item2}</li>
                  <li className='list-disc'>{item.item3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-row justify-between gap-4'>
          <div className='p-6 rounded-lg  bg-white shadow-md w-full'>
            <h1 className='text-lg font-semibold mb-4 text-gray-700'>Write a Complaint</h1>
            <button className='flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>
              Click here to proceed
              <span className='ml-2'>→</span>
            </button>
          </div>
          <div className='p-6 rounded-lg bg-white shadow-md w-full'>
            <h1 className='text-lg font-semibold mb-4 text-gray-700'>Check Leave Status</h1>
            <button className='flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300'>
              Click here to proceed
              <span className='ml-2'>→</span>
            </button>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className='bg-white p-6 rounded-lg  shadow-md'>
          <h2 className='text-lg font-bold mb-2 text-gray-700'>Sentiment Analysis</h2>
          <div className='flex flex-row justify-between items-center ml-9 mr-9'>
            <button type='button' className='text-lg w-56 h-12 font-semibold text-white bg-green-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-green-500 hover:border-green-500 transition duration-300 ease-in-out'>Positive</button>
            <div className=''><P5Sketch /></div>
            <button type='button' className='text-lg w-56 h-12 font-semibold text-white bg-red-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 ease-in-out'>Negative</button>
          </div>
          <div className='flex justify-center mt-6'>
            <button type='button' onClick={handleButton} className={`flex items-center px-4 py-2 bg-blue-500 text-white font-medium h-[3rem] rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300 ${LoadingTime ? 'cursor-progress' : 'cursor-pointer'} transition duration-300 ease-in-out`}>Press to Analyse <span className='ml-2'>→</span></button>
          </div>
        </div>

        {/* Weekly Feedback Chart */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold text-gray-700'>Weekly Feedback</h2>
            <Link to='/chart' className='text-blue-600 hover:underline'>Click Here</Link>
          </div>
          <div className='h-[50vh]'>
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
      <div>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;