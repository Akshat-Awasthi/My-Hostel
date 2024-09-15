import React, { useEffect, useRef, useState } from 'react';
import * as ml5 from 'ml5';

const Attendence = () => {
  const videoRef = useRef(null); 
  const [model, setModel] = useState(null); 
  const [name, setname] = useState(''); 

  useEffect(() => {
    // Load the Teachable Machine model
    const loadModel = async () => {
      const classifier = await ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_HwM05XJT/model.json');
      setModel(classifier);
    };

    loadModel();

    // Access the user's webcam and attach it to the video element
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startVideo();

    // Cleanup function: Stop the webcam stream when navigating away
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null; 
      }
    };

  }, []);

  // Function to classify the image from the webcam
  const classifyImage = () => {
    if (model && videoRef.current) {
      model.classify(videoRef.current)
        .then(results => {
          console.log(results);
          setname(results[0].label);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-[74rem] bg-gray-100">
      <h1 className="text-3xl font-bold m-5 mb-3">Facial Attendence System</h1>
      
      {/* Webcam video feed */}
      <video
        ref={videoRef}
        className="border-4 border-blue-500 mb-5 m-5"
        width="400"
        height="300"
      ></video>

      {/* Button to start classification */}
      <div className='flex flex-row gap-3 m-4 ml-16'>
      <button 
        onClick={classifyImage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Recognize Face
      </button>
      <button 
        // onClick={classifyImage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
      </div>
      

      {/* Display the prediction label */}
      {name && (
        <div className="mt-5 text-xl text-green-600 font-bold ml-24">
          {name} : Present
        </div>
      )}
    </div>
  );
};

export default Attendence;
