import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

import { HeartPlus } from "lucide-react";
import VideoCard from '../components/cards/VideoCard/VideoCard.jsx';
import SearchInput from '../components/SearchInput/SearchInput';
import ImageCard from '../components/cards/ImageCard/ImageCard.jsx';
import { useNavigate } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar.jsx';
import Tags from '/src/components/Tags/Tags.jsx';
import TopicsCard from '../components/cards/TopicsCard/TopicsCard.jsx';
import NotesCard from '../components/cards/NotesCard/NotesCard.jsx';
import FilterButton from '../components/FilterButton/FilterButton.jsx';
import { filterNotes, filterPhotos, filterVideos } from '../services/filterData.js';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
import videodata from "/src/dataset/videodata.json"; // adjust path as needed
import photosdata from "/src/dataset/photosdata.json"; // adjust path as needed
function Home() {
  // console.log("haii");
  // console.log(notesData.data);

  const [searchTerm, setSearchTerm] = useState("");

  console.log(filterNotes(notesData.data, "ocean"));

  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  };

  const inputChanged = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  const allButtonClicked = () => {
    console.log("all button clicked");
    navigate("/dashboard");

  }
  const TopicButtonClicked = () => {
    console.log("topic button clicked");
    navigate("/alltopics");

  }
  const videoButtonClicked = () => {
    console.log("topic button clicked");
    navigate("/allvideos");

  }

  const NotesButtonClicked = () => {
    console.log("topic button clicked");
    navigate("/allnotes");

  }
  const ImagesButtonClicked = () => {
    console.log("topic button clicked");
    navigate("/allimages");

  }
  return (
    < >
      <div className='mt-20'></div>

      {/* main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-8  md:grid-cols-8  gap-4 p-4">

        {/* side bar section */}
        <SideBar />

        {/* main content section */}
        <div className="sm:col-span-5 md:col-span-7 bg-gray-100 p-4 min-h-screen">
          {/* Dashboard row  */}
          <div className='w-full h-10  flex items-center justify-center'>
            <h1 className='font-bold text-2xl text-gray-800 '>Dashboard </h1>
          </div>

          {/* search row */}
          <div className='w-full h-10  '>
            <SearchInput onChange={inputChanged} />
          </div>

          {/*Type button group  */}
          <div className='w-full h-20 md:h-12 my-3 '>

            <FilterButton onClick={allButtonClicked} text="All" />
            <FilterButton onClick={TopicButtonClicked} text="Topics" />
            <FilterButton onClick={videoButtonClicked} text="Videos" />
            <FilterButton onClick={NotesButtonClicked} text="Notes" />
            <FilterButton onClick={ImagesButtonClicked} text="Images" />

          </div>
          <Outlet context={{ searchTerm }} />
         

          {/* end main content   */}
        </div>

      </div>
    </>
  )


}

export default Home;
