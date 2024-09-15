import React from 'react'
import { Sidebar_Links, Sidebar_Logout } from '../lib/const/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'


const ClassLinks = 'flex item-center gap-2 p-3 font-light px-3 hover:bg-blue-900 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
function SideLink({item}){
  const {pathname} = useLocation();
  return(
    <Link to={item.path} className={classNames(pathname === item.path ? 'text-white bg-blue-700': 'text-slate-300',ClassLinks)}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}
function SideBottom({item}){
  const {pathname} = useLocation();
  return(
    <Link to={item.path} className={classNames(pathname === item.path ? 'text-white bg-blue-700': 'text-slate-300',ClassLinks,'font-bold pl-14 text-red-500')}>
    <span className='text-2xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-blue-950 min-w-64 p-3 text-white'>
      <div className='flex flex-row m-1'>
          <span>My-Hostel</span>
        </div>
      <div className='flex-1 flex flex-col py-5 gap-0.5'>
        {Sidebar_Links.map((item)=>(
          <SideLink key={item.key} item={item}/>
        ))}
      </div>
      <div className='flex flex-col py-3 pt-2 border-t border-gray-500 '>
        {Sidebar_Logout.map((item)=>(
          <SideBottom key={item.key} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Sidebar