import React, { useState, useEffect } from 'react';
import Rightbar from './Rightbar';
import MessMenu from './lib/const/MessMenu.json';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Import only the like and dislike icons

const Feedback = () => {
  const [mealDay, setMealDay] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [mealItem, setMealItem] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);

  const [mealData, setMealData] = useState([]);
  const [mealTimes, setMealTimes] = useState([]);
  const [mealItems, setMealItems] = useState([]);

  useEffect(() => {
    const days = MessMenu.map((week) => week.map((menu) => menu.day)).flat();
    setMealData([...new Set(days)]);
  }, []);

  useEffect(() => {
    if (mealDay) {
      const dayData = MessMenu.flat().filter((menu) => menu.day === mealDay);
      const times = dayData.map((menu) => menu.time);
      setMealTimes(times);
    }
  }, [mealDay]);

  useEffect(() => {
    if (mealDay && mealTime) {
      const selectedItems = MessMenu.flat().find(
        (menu) => menu.day === mealDay && menu.time === mealTime
      );
      setMealItems([selectedItems.item1, selectedItems.item2, selectedItems.item3]);
    }
  }, [mealDay, mealTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ mealDay, mealTime, mealItem, rating, review });
  };

  // Animation style when an icon is clicked
  const animatedStyle = {
    transform: 'scale(1.2)',
    transition: 'transform 0.2s ease-in-out',
  };

  return (
    <div className="flex justify-between">
      {/* Feedback Form */}
      <div className="relative w-2/3 mx-auto top-6 p-12 bg-gradient-to-r from-[#E1D2FF] to-[#BAE5F5] rounded-lg shadow-lg">
        <div>
          <h3 className="text-2xl text-center text-black font-bold mb-2">
            Food Feedback Form
          </h3>
          <h3 className="text-base text-center text-[#0C1E33A0] mb-4">
            Your Feedback Matters A Lot!
          </h3>
        </div>
        <div className="max-w-[28rem] mx-auto p-12 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Meal Day */}
            <div className="flex flex-col">
              <label className="text-[#000000B3] mb-2 font-bold">Meal Day</label>
              <select
                value={mealDay}
                onChange={(e) => setMealDay(e.target.value)}
                className="p-2 rounded-md border border-[#0000001A] shadow-md"
              >
                <option value="">Select Meal Day</option>
                {mealData.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            {/* Meal Time */}
            <div className="flex flex-col">
              <label className="text-[#000000B3] mb-2 font-bold">Meal Time</label>
              <select
                value={mealTime}
                onChange={(e) => setMealTime(e.target.value)}
                className="p-2 rounded-md border border-[#0000001A] shadow-md"
                disabled={!mealDay}
              >
                <option value="">Select Meal Time</option>
                {mealTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Meal Item */}
            <div className="flex flex-col">
              <label className="text-[#000000B3] mb-2 font-bold">Meal Item</label>
              <select
                value={mealItem}
                onChange={(e) => setMealItem(e.target.value)}
                className="p-2 rounded-md border border-[#0000001A] shadow-md"
                disabled={!mealTime}
              >
                <option value="">Select Meal Item</option>
                {mealItems.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="flex flex-col">
              <label className="text-[#000000B3] mb-2 font-bold">Share Your Experience in Scaling</label>
              <div className="flex gap-8">
                {/* Like Button */}
                <div
                  onClick={() => setRating(2)}
                  className={`flex items-center justify-center w-10 h-10 ${rating === 2 ? 'bg-[#86FEB8]' : 'bg-[#f0f0f0]'} rounded-full cursor-pointer transition-all duration-300 ${rating === 2 ? 'scale-110' : ''}`}
                >
                  <FaThumbsUp className="text-[#10b981] text-2xl" />
                </div>

                {/* Dislike Button */}
                <div
                  onClick={() => setRating(0)}
                  className={`flex items-center justify-center w-10 h-10 ${rating === 0 ? 'bg-[#FFAAAA]' : 'bg-[#f0f0f0]'} rounded-full cursor-pointer transition-all duration-300 ${rating === 0 ? 'scale-110' : ''}`}
                >
                  <FaThumbsDown className="text-[#ef4444] text-2xl" />
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="flex flex-col">
              <label className="text-[#000000B3] mb-2 font-bold">Share Your Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Add your review..."
                className="p-2 rounded-md border border-[#0000001A] shadow-md min-h-[100px]"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button
                type="button"
                className="px-4 py-2 text-[#3b82f6] font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-[#3b82f6] rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Rightbar */}
      <div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Feedback;
