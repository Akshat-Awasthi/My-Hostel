import React from 'react'

const Complaint = () => {
  return (
    <div className='h-[100vh] w-[1180px] overflow-auto'>
      <div></div>
      <div>
      <form className="flex flex-grow">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mt-5 mb-7">Raise Complaint</h2>
          <div className='flex flex-row'>
            <div className="w-1/2 relative mr-40">
            <label className="font-semibold" htmlFor="topic">Select topic</label>
            <select name="Select-topic" id="topic" className='w-52 h-8 mt-1 border border-gray-300 rounded text-gray-400'>
                <option value="select">Select</option>
                <option value="Mess Food Problem">Mess Food Problem</option>
                <option value="Cleanliness Problem">Cleanliness Problem</option>
                <option value="Electricity Problem">Electricity Problem</option>
                <option value="Wifi Problem">Wifi Problem</option>
                <option value="others">Others</option>
              </select>
              
            </div>
            <div className='w-1/2'>
              <label className="font-semibold" htmlFor="email">Enter Subject</label>
              <input type="text" name="email" required autoComplete='off' placeholder="Subject" className="pl-2 mt-1 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              
            </div>

          </div>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Complaint