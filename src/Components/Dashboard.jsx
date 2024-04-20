import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { PiHandWavingFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import Rightbar from './Rightbar';
import StudentProfile from "./lib/const/StudentProfile.json"
import WeekFeedback from "./lib/const/WeekFeedback.json"
import TodayMenu from "./lib/const/TodayMenu.json"
import P5Sketch from './Animation/P5Sketch';


defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = "black";




function Dashboard() {
    const [LoadingTime,setLoadingTime] = useState(false);
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
    
    const colors = ['bg-purple-200', 'bg-[#ACC3FD]', 'bg-[#BAE5F5]', 'bg-[#CCEFBF]'];
    const name = StudentProfile[0].name;
    return (
        <div className='flex flex-row h-[100vh] overflow-y-auto bg-slate-100'>
            <div className='flex flex-col w-3/4'>
                <div className='flex flex-row pl-3 pb-16 text-xl'>
                    <div className='text-xl pt-1'><PiHandWavingFill /></div>
                    <h1 className='pl-1'>Welcome, {name} !</h1>
                </div>
                <div>
                    <div className='flex flex-col mb-1'>
                        <h2 className='flex-1 ml-4 text-xl pb-1 border-b-[1px] font-semibold'>Sentiment Analysis</h2>
                    </div>
                    <div className='flex flex-row'>
                        <button type='button' className="text-lg w-56 h-12 ml-7 mt-6 font-semibold text-white bg-green-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-green-500 hover:border-green-500 hover:cursor-not-allowed  transition duration-300 ease-in-out">Positive</button>
                        <div><P5Sketch /></div>
                        <button type='button' className="text-lg w-56 h-12 mt-6 font-semibold text-white bg-red-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-red-500 hover:border-red-500 hover:cursor-not-allowed transition duration-300 ease-in-out">Negative</button>
                    </div>
                    <div className='ml-2'>
                    <button type='button' onClick={handleButton} className={`text-lg w-56 h-16 ml-64 font-semibold text-white bg-blue-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-blue-500 hover:border-blue-500 ${LoadingTime ? 'cursor-progress' : 'cursor-default'} transition duration-300 ease-in-out`}>Press to Analyse</button>
                    </div>

                </div>
                <div className='flex flex-col pl-3'>
                    <div className='h-[45vh] '>
                        <Line
                            data={{
                                labels: WeekFeedback.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Positive",
                                        data: WeekFeedback.map((data) => data.Positive),
                                        backgroundColor: "#064FF0",
                                        borderColor: "#064FF0",
                                    },
                                    {
                                        label: "Negative",
                                        data: WeekFeedback.map((data) => data.Negative),
                                        backgroundColor: "#FF3030",
                                        borderColor: "#FF3030",
                                    },
                                ]
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.4
                                    },
                                },
                                plugins: {
                                    title: {
                                        text: "Weekly Feedback",
                                    },
                                },
                            }} />
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col h-[40vh] m-2 bg-slate-100'>
                            <div className='flex flex-row mb-2 border-b-[1px] border-gray-300'>
                                <h2 className='mb-2 font-bold flex-1'>Today's Menu</h2>
                                <Link to='/Menu' className='mr-6'>View all</Link>
                            </div>
                            <div className='flex'>
                                {TodayMenu.map((item, index) => (
                                    <div key={item.time} className={`mr-6 w-48 h-52 p-6 pl-7 rounded-md ${colors[index % colors.length]}`}>
                                        <ul className='flex flex-col gap-3'>
                                            <li className='font-semibold'>{item.time}</li>
                                            <li className='list-disc'>{item.item1}</li>
                                            <li className='list-disc'>{item.item2}</li>
                                            <li className='list-disc'>{item.item3}</li>
                                        </ul>
                                    </div>
                                ))}
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
    );
}

export default Dashboard