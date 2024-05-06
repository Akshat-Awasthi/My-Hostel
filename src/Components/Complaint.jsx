import React from 'react'
import { MdEmail } from 'react-icons/md';
import { GrSelect } from "react-icons/gr";
import { MdSubject } from "react-icons/md";


const Complaint = () => {
  return (
    <div className='h-[100vh] w-[1180px] overflow-auto flex justify-center'>
      <div className='flex justify-center border mt-7 border-gray-500 w-[600px] h-[700px] shadow-lg shadow-gray-500'>
      <form className="flex flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mt-5 mb-7">File Complaint</h2>
          <div className='flex flex-col'>
          <div>
              <label className="font-medium text-sm" htmlFor="email">College Email</label>
              <input type="email" name="email" required autoComplete='off' placeholder="Email" className="pl-7 mt-1 py-2 w-full border border-gray-300 placeholder:text-sm rounded focus:outline-none focus:border-blue-500 hover:shadow-md" />
              <MdEmail className='absolute top-[194px] mt-6 ml-2' />
              
            </div>
            <div className="mt-3 relative mr-40">
            <label className="font-medium text-sm" htmlFor="topic">Select topic</label>
            <select name="Select-topic" id="topic" required className='w-full pl-7 h-8 mt-1 border border-gray-300 rounded font-medium text-sm text-gray-400 hover:shadow-md focus:outline-none focus:border-blue-500'>
                <option value="select">Select</option>
                <option value="Mess Food Problem">Mess Food Problem</option>
                <option value="Cleanliness Problem">Cleanliness Problem</option>
                <option value="Electricity Problem">Electricity Problem</option>
                <option value="Wifi Problem">Wifi Problem</option>
                <option value="others">Others</option>
              </select>
              <GrSelect  className='absolute top-9 ml-2'/>
              
            </div>
            <div className='mt-3'>
              <label className="font-medium text-sm" htmlFor="subject">Enter Subject</label>
              <input type="text" name="subject" required autoComplete='off' placeholder="Subject" className="pl-7 mt-1 py-2 w-full hover:shadow-md placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              <MdSubject className='absolute top-[363px] ml-2'/>
            </div>
            <div className='flex flex-col mt-3'>
              <label htmlFor="complaint-text">Complaint</label>
              <textarea name="complaint-text" required  cols="6" rows="6" type="hidden" placeholder='Express your problem in details....' className='mt-1 pl-2 py-2 hover:shadow-md placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500'></textarea>
            </div>
            <div>
            <button type='submit' className="text-base w-52 font-medium text-white bg-blue-500 border border-transparent px-6 py-2 mt-5 rounded hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">File Complain</button>
            </div>

          </div>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Complaint