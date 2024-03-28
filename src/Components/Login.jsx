import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const Login = () => {
  return (
    <div className="flex">
      <div className="bg-blue-900 text-white p-8 w-1/2 h-screen flex flex-col justify-center">
        <h2 className="text-3xl mb-8 font-display">In a hostel, you don't just <br /> share a room; you share stories, laughter, and memories....</h2>
      </div>
      <form className="flex items-center justify-center flex-grow">
        <div className="w-96 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Welcome to My Hostel Portal</h3>
          <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
          <div className="w-full relative mb-4">
            <label className="font-semibold" htmlFor="College Email Id">College Email Id </label>
            <input type="text" name="College Email Id" placeholder="Enter Email Id" className="pl-10 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <MdEmail className="absolute mt-3 top-1/2 transform -translate-y-1/2 left-2 text-gray-400" />
          </div>
          <div className="w-full relative mb-6">
            <label className="font-semibold" htmlFor="Password">Password</label>
            <input type="text" name="Password" placeholder="Enter Password" className="pl-10 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <RiLockPasswordFill className="absolute top-1/2 transform translate-y-1/2 left-2 text-gray-400" />
          </div>
          <button className="text-lg w-96 font-semibold text-white bg-blue-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-blue-500 border-blue-500 transition duration-300 ease-in-out">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
