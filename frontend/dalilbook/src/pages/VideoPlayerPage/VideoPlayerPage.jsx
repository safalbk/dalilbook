import SideBar from '../../components/SideBar/SideBar'
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";


import { getVideoById } from '/src/services/videoService.js';

function VideoPlayerPage() {
    const { id } = useParams(); // 👈 this gives you the `:id` from the URL
    const [videos, setVideos] = useState([]);
  
  
    useEffect(() => {
      const fetchVideos = async () => {
        const data = await getVideoById(id); // 👈 calling your function here
        if (data) {
          console.log(data);
          
          setVideos(data);
        }
      };
  
      fetchVideos();
    }, []); 
  
  return (
    <div className='mt-20'>

      <div className="grid grid-cols-1 sm:grid-cols-8  md:grid-cols-8  gap-4 p-4">

        {/* side bar section */}
        <SideBar />

        {/* main content section */}
        <div className="sm:col-span-5 md:col-span-7 bg-gray-100 p-4 min-h-screen">
          {id}
          <video src={videos.url}
            width={800}
            height={450}
            controls
          ></video>

          {/* end main content   */}
        </div>

      </div>
    </div>
  )
}

export default VideoPlayerPage
