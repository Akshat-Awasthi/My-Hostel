import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { PiHandWavingFill } from "react-icons/pi";

import { Link } from 'react-router-dom';
import Rightbar from './Rightbar';


import WeekFeedback from "./lib/const/WeekFeedback.json"
import TodayMenu from "./lib/const/TodayMenu.json"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = "black";

const Dashboard = () => {
  const colors = ['bg-purple-200', 'bg-[#ACC3FD]', 'bg-[#BAE5F5]', 'bg-[#CCEFBF]'];
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
            <Rightbar />
        </div>
        
    </div>
  )
}

export default Dashboard