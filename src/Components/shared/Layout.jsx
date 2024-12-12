import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsActive } from 'react-icons/md';
import { IoAlertCircle } from 'react-icons/io5';

const Layout = () => {
  const [name, setName] = useState(''); // State to store the fetched name


  useEffect(() => {
    // Fetch name and hostelName from backend API using token
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage

      if (!token) {
        console.error('Auth token is missing');
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/api/v1/users/getUser', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setName(data.username); // Assuming the API returns { name: "John Doe", hostel: "Hostel A" }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-row bg-gray-100 h-screen overflow-hidden w-screen fixed ">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="h-[7vh] w-full bg-neutral-100 border-y-[1px] border-blue-950 flex items-center px-4 ">
          {/* Main content goes here */}
          <div className="ml-auto flex items-center gap-5 mb-2 mt-2">
            {/* Notifications */}
            <Link
              className="text-gray-600 hover:text-gray-400 text-xl"
              to="/notifications"
            >
              <MdNotificationsActive />
            </Link>

            {/* Alerts */}
            <Link
              className="text-gray-600 hover:text-gray-400 text-xl"
              to="/alerts"
            >
              <IoAlertCircle />
            </Link>

            {/* User Info */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col text-right leading-tight">
                <span className="block text-xs font-semibold  ">{name || 'Guest'}</span>
                <span className="block text-[12px] text-gray-600">Aryabhatt Hostel</span>
              </div>
              <Link
                className="text-gray-600 hover:text-gray-400 text-[35px]"
                to="/profile"
              >
                <CgProfile />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
