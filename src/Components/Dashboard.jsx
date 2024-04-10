import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { PiHandWavingFill } from "react-icons/pi";
import { PiNotepadFill } from "react-icons/pi";
import { GrSemantics } from "react-icons/gr";
import { Link } from 'react-router-dom';
import DateTime from './DateTime';


import Feedback from "./lib/const/FeedbackData.json"
import WeekFeedback from "./lib/const/WeekFeedback.json"
import TodayMenu from "./lib/const/TodayMenu.json"
import Announcement from "./lib/const/Announcement.json"
import StudentProfile from "./lib/const/StudentProfile.json"

const name = StudentProfile.name;

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = "black";

const Dashboard = () => {
    const sem = parseInt(StudentProfile[0].semester); // Parse semester to integer for calculation
const semesterWidth = (sem / 8) * 100;

    const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentDay(date.toLocaleString('en-US', { weekday: 'long' }));
      setCurrentDate(date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const colors = ['bg-purple-200', 'bg-[#ACC3FD]', 'bg-[#BAE5F5]', 'bg-[#CCEFBF]'];
  const announceCol = ['bg-[#F2994A]', 'bg-state-100'];
  return (
    <div className='flex flex-row h-[100vh] overflow-y-auto bg-slate-100'>
        <div className='flex flex-col w-3/4'>
            <div className='flex flex-row pl-3 pb-16 text-xl'>
                <div className='text-xl pt-1'><PiHandWavingFill /></div>
                <h1 className='pl-1'>Welcome, Akshat!</h1>
            </div>
            <div className='flex flex-col pl-3'>
            <div className='h-[45vh] '>
                <Line 
                data={{
                    labels:WeekFeedback.map((data)=> data.label),
                    datasets:[
                        {label: "Positive",
                        data: WeekFeedback.map((data) => data.Positive),
                        backgroundColor: "#064FF0", 
                        borderColor: "#064FF0",
                    },
                        {label: "Negative",
                        data: WeekFeedback.map((data) => data.Negative),
                        backgroundColor: "#FF3030",
                        borderColor: "#FF3030",
                    },
                    ]
                }}
                options={{
                    elements:{
                        line:{
                            tension:0.4
                        },
                    },
                    plugins: {
                        title: {
                        text: "Weekly Feedback",
                        },
                    },
                }}
                />
            </div>
            <div className='flex flex-row'>
            <div className='flex flex-col h-[40vh] m-2 bg-slate-100'>
                <div className='flex flex-row mb-2 border-b-[1px] border-gray-300'>
                <h2 className='mb-2 font-bold flex-1'>Today's Menu</h2>
                <Link to='/Menu' className='mr-6'>View all</Link>
                </div>
                <div className='flex'>
                    {
                        TodayMenu.map((item, index) => (
                            <div key={item.time} className={`mr-6 w-48 h-52 p-6 pl-7 rounded-md ${colors[index % colors.length]}`}>
                                <ul className='flex flex-col gap-3'>
                                    <li className='font-semibold'>{item.time}</li>
                                    <li className='list-disc'>{item.item1}</li>
                                    <li className='list-disc'>{item.item2}</li>
                                    <li className='list-disc'>{item.item3}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

            </div>       
            </div>
            <div className='h-[100vh] mt-2'></div>
        </div>
        </div>
        
        <div className='h-[100vh] w-full ml-2 mr-4'>
            <div className='h-12'>
                {/* <div className='flex flex-row pl-3 pb-2 border-b border-gray-300'>
                    <BsFillCalendarDateFill size={15} style={{marginTop : "2px"}}/>
                    <h2 className='font-medium flex-1 pl-1'>Date</h2>
                    
                </div> */}
                <div className='flex flex-row m-1 p-2 ml-2 bg-[#F2994A] h-10 rounded-md border border-solid'>
                <div className='flex-1'>{currentDate}</div>
                <div className='pr-4'>{currentDay}</div>
                </div>
                
            </div>
            <div className='h-16 pb-3'>
                <div className='flex flex-row pl-3 pb-2 border-b border-gray-300'>
                        <GrSemantics size={15} style={{marginTop : "2px"}}/>
                        <h2 className='font-medium flex-1 pl-1'>Semester</h2>
                </div>
                <div className='ml-2 mb-5'>
                    <h3 className='pt-2 pb-1'>Semester {sem} of 8</h3>
                    <div className='h-3 bg-slate-400 rounded-md'>
                        <div style={{ width: `${semesterWidth}%` }} className='h-full w-1/2 bg-green-600 rounded-md'>
                            
                        </div>
                    </div>
                    
                </div>
            <div>
                <div className='flex flex-row pl-2 pb-2 border-b border-gray-300'>
                <PiNotepadFill size={20}/>
                <h2 className='font-medium flex-1 pl-1'>Announcements</h2>
                <Link className='text-sm mr-1'>View all</Link>
                </div>
            </div>

                
                <div className='flex flex-col ml-2 mt-2'>
                    {
                        Announcement.map((item,index) => (
                            <div key={item.name} className={`rounded-md border border-solid ${index === 0 ? 'border-none' : 'border-blue-500'} h-40 w-64 p-2 mb-2 ${index === 0 ? announceCol[0] : announceCol[1]}`}>

                                <ul>
                                    <li className='flex flex-row border-b border-slate-300'><div className='flex-1 font-medium  mb-2 pb-1'>{item.name}</div> <div className='mr-2 mb-1 pl-2 pt-1 h-7 w-14 rounded-md bg-[#D9DADB]'><DateTime /></div> </li>

                                    <li className='pt-2'>{item.message}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Dashboard