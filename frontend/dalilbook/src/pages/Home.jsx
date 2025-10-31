import React from 'react'
import { HeartPlus } from "lucide-react";
import React from "react";
import DescriptionCard from "../components/DescriptionCard/DescriptionCard";
import FileUpload from "../components/FileUploadCard/FileUpload";
import ImageCard from "../components/ImageCard/ImageCard";
import NotesCard from "../components/NotesCard/NotesCard";
import TextCard from "../components/TextCard/TextCard";
import TopicsCard from "../components/TopicsCard/TopicsCard";
import VideoCard from "../components/VideoCard/VideoCard";

function Home() {
  return (
    < >
      <div className='mt-20'></div>

      {/* main grid */}
      <div class="grid grid-cols-8 gap-4 p-4">

        {/* side bar section */}
        <div class="col-span-1 bg-gray-100 p-1 min-h-screen">

          <div className="px-2 flex items-center">
            <h1 className="font-inter text-lg font-normal text-gray-800">
              Favorite Topics
            </h1>
            <span className="ml-3">
              <HeartPlus />
            </span>
          </div>

          <div class="border-t-1 border-gray-300 w-full my-4"></div>
          <div className='w-full h-12 bg-white text-sm rounded-md px-2 py-2 my-2'>
            <p className='text-gray-700'>Topic one ayish amarriage</p>

          </div>
          <div className='w-full h-12 bg-white text-sm rounded-md px-2 py-2'>
            <p className='text-gray-700'>Topic one ayish amarriage</p>

          </div>
        </div>

        {/* main content section */}
        <div class="col-span-7 bg-gray-100 p-4 min-h-screen"><div>
          main content
          <div className='w-80 h-40 bg-white rounded-md'></div>
        </div></div>
      </div>


    </>


  )
   

}

export default Home;
