import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";



const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div>
        <div className='flex flex-row items-center h-16 w-[1190px] bg-neutral-100 border-y-2 border-blue-950'>
              <div className='flex-1 flex justify-center items-center text-2xl'>Hostel Name</div>
              <div className='mr-10 flex flex-row gap-5 text-2xl active:neutral-400 '>
                <Link className='text-black hover:text-stone-400'><MdNotificationsActive/></Link>
                <Link className='text-black hover:text-stone-400'><IoAlertCircle/></Link>
                <Link to='/profile' className='text-black hover:text-stone-400'><CgProfile /></Link>
              </div>
            </div>
            <div>{<Outlet />}</div>
        </div>
        
    </div>
  )
}

export default Layout