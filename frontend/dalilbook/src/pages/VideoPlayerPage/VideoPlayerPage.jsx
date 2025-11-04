import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useParams } from "react-router-dom";

function VideoPlayerPage() {
    const { id } = useParams(); // 👈 this gives you the `:id` from the URL

  return (
    <div className='mt-20'>

      <div className="grid grid-cols-1 sm:grid-cols-8  md:grid-cols-8  gap-4 p-4">

        {/* side bar section */}
        <SideBar />

        {/* main content section */}
        <div className="sm:col-span-5 md:col-span-7 bg-gray-100 p-4 min-h-screen">
          {id}
          <video src="https://scienceandfilm.org/uploads/videos/files/Druid_Peak_%5bTrailer%5d_-_Florida_Film_Festival_2014.mp4"
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
