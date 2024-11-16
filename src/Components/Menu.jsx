import React from 'react'
import MessMenu from "./lib/const/MessMenu.json"
import Rightbar from './Rightbar';
import { MdOutlineRestaurantMenu } from "react-icons/md";



const Menu = () => {
    const colors = ['bg-purple-200', 'bg-[#ACC3FD]', 'bg-[#BAE5F5]', 'bg-[#CCEFBF]'];

  return (
   
        
    <div className='flex flex-row justify-between'  >
        
        <div className='flex flex-col w-full md:w-full mb-5 ml-5 mr-5'>
        <div className='mt-3 text-lg w-auto font-bold flex-1 flex justify-center items-center'>Weekly Mess Menu</div>
        {MessMenu.map((dayMenu, dayIndex) => (
          <div key={dayIndex} className='flex flex-col mt-2'>
            <h2 className='mb-2 font-bold w-full border-b flex items-center'>
              <MdOutlineRestaurantMenu className='mr-2' />
              {dayMenu[0].day}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-auto'>
              {dayMenu.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-md ${colors[index % colors.length]} shadow-md`}
                >
                  <ul>
                    <li className='font-semibold mb-1 text-lg'>{item.time}</li>
                    <li className='list-disc ml-4'>{item.item1}</li>
                    <li className='list-disc ml-4'>{item.item2}</li>
                    <li className='list-disc ml-4'>{item.item3}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
        <div >
            <Rightbar />
        </div>
    </div>
  
    
  )
}

export default Menu