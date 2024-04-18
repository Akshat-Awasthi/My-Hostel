import React from 'react'

const Complaint = () => {
  return (
    <div>
      <div></div>
      <div>
      <form className="flex flex-grow">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Raise Complaint</h2>
          <h2 className="text-2xl font-semibold mb-6"></h2>
          <div className='flex flex-row'>
            <div className="w-1/2 relative mb-4">
              <label className="font-semibold" htmlFor="email">College Email Id </label>
              <input type="text" name="email" required autoComplete='off' placeholder="subject" className="pl-2 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className='w-1/2'>
              <label className="font-semibold" htmlFor="topic">Select topic</label>
              <select name="Select-topic" id="topic" className='w-52'>
                <option value="select">Select</option>
                <option value="Mess Food Problem">Mess Food Problem</option>
                <option value="Cleanliness Problem">Cleanliness Problem</option>
                <option value="Electricity Problem">Electricity Problem</option>
                <option value="Wifi Problem">Wifi Problem</option>
                <option value="others">Others</option>
              </select>
            </div>

          </div>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Complaint