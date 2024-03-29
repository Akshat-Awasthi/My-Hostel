import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { PiHandWavingFill } from "react-icons/pi";


import Feedback from "./lib/const/FeedbackData.json"
import WeekFeedback from "./lib/const/WeekFeedback.json"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Dashboard = () => {
  return (
    <div className='flex flex-row h-[1000px]'>
        <div className='flex flex-col w-3/4'>
            <div className='flex flex-row h-40'>
                <PiHandWavingFill />
                <h1>Welcome, Akshat!</h1>
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
                <div className='w-1/2 h-[40vh] m-2 bg-slate-100'>
                    <Bar 
                    data={{
                        labels:Feedback.map((data)=>data.label),
                    datasets: [
                        {
                            label:"No. of Students",
                            data: Feedback.map((data)=>data.Value),
                            backgroundColor:[
                                "rgb(0,128,0)",
                                "rgb(220,20,60)",
                            ],
                            borderRadius:5,
                        },
                    ]}} />
                </div>
                <div className='w-1/2 m-2'>chart 3</div>
            </div>
            <div className='h-72 mt-2 bg-blue-700'></div>
        </div>
        </div>
        
        <div>right side</div>
        
    </div>
  )
}

export default Dashboard