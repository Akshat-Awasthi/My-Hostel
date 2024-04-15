import React from 'react'
import MessMenu from "./lib/const/MessMenu.json"
import Rightbar from './Rightbar';
import { FaBookOpen } from "react-icons/fa6";



const Menu = () => {
    const colors = ['bg-purple-200', 'bg-[#ACC3FD]', 'bg-[#BAE5F5]', 'bg-[#CCEFBF]'];

  return (
    <div className='flex flex-row overflow-auto pb-5' style={{ maxHeight: '750px' }}>
        <div className='flex flex-col w-3/4 mb-5'>
            {
                MessMenu.map((dayMenu,dayIndex) => (
                    <div key={dayIndex} className='flex flex-col ml-10 mt-4 '>
                        <h2 className='mb-2 font-bold w-full border-b flex flex-row'><FaBookOpen style={{marginRight : '7px', marginTop : '2px'}} />{dayMenu[0].day}</h2>
                        <div className='flex flex-row'>
                            {
                                dayMenu.map((item,index) => (
                                    <div key={index} className={`mr-6 w-48 h-48 p-6 pl-7 rounded-md ${colors[index % colors.length]}`}>
                                        <ul>
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
                ))
            }
        </div>
        <div className='h-[100vh] w-full ml-2 mr-4'>
            <Rightbar />
        </div>
    </div>
    
  )
}

export default Menu