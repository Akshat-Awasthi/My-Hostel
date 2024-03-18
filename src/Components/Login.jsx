import React from 'react'
import "../Style/login.css"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className='body'>
    <div className='blue'>
        <h2>In a hostel, you don't just <br /> share a room; you share stories, laughter, and memories....</h2>
    </div>
    <form>
    <div className='form-wrapper'>
        <h3>Welcome to My Hostel Portal</h3>
        <h2>Sign in</h2>
        <div className="sign">
            <label className='label' htmlFor="College Email Id">College Email Id </label>
            <input type="text" name='College Email Id' placeholder='Enter Email Id' />
            <MdEmail className='email-icon'/>
            <label  className='label' htmlFor="Password">Password</label>
            <input type="text" name='Password' placeholder='Enter Password' />
            <RiLockPasswordFill className='password-icon'/>

        </div>
        <button>Sign in</button>
    </div>
    </form>
    </div>
  )
}

export default Login