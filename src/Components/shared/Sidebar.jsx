import classNames from 'classnames'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar_Links, Sidebar_Logout } from '../lib/const/Navigation'


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
function SideBottom({ item, onClick }) {
  const { pathname } = useLocation();
  return (
    <Link 
      to={item.path} 
      className={classNames(
        pathname === item.path ? 'text-white bg-blue-700' : 'text-slate-300',
        ClassLinks,
        'font-bold pl-14 text-red-500'
      )}
      onClick={item.key === 'logout' ? onClick : undefined} // Apply onClick handler conditionally
    >
      <span className='text-2xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
}

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Optionally, make a request to the logout endpoint (commented out if not needed)
      // await axios.post('http://localhost:8080/api/v1/auth/logout');

      // Clear the JWT token from localStorage
      localStorage.removeItem('token');

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
      // Handle logout failure (e.g., show an error message)
    }
  };

  return (
    <div className='flex flex-col bg-blue-950 w-64 p-3 text-white'>
      <div className='flex flex-row m-1'>
        <span>My-Hostel</span>
      </div>
      <div className='flex-1 flex flex-col py-5 gap-0.5'>
        {Sidebar_Links.map((item) => (
          <SideLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col py-3 pt-2 border-t border-gray-500'>
        {Sidebar_Logout.map((item) => (
          <SideBottom onClick={handleLogout} key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
