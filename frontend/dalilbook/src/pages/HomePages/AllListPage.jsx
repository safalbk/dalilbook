import React, { useState } from "react";
import { useEffect } from "react";

import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

import { HeartPlus } from "lucide-react";
import VideoCard from '/src/components/cards/VideoCard/VideoCard.jsx';
import SearchInput from '/src/components/SearchInput/SearchInput';
import ImageCard from '/src/components/cards/ImageCard/ImageCard.jsx';
import { useNavigate } from "react-router-dom";
import SideBar from '/src/components/SideBar/SideBar.jsx';
import Tags from '/src/components/Tags/Tags.jsx';
import TopicsCard from '/src/components/cards/TopicsCard/TopicsCard.jsx';
import NotesCard from '/src/components/cards/NotesCard/NotesCard.jsx';
import FilterButton from '/src/components/FilterButton/FilterButton.jsx';
import { filterNotes, filterPhotos, filterVideos } from '/src/services/filterData.js';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
import videodata from "/src/dataset/videodata.json"; // adjust path as needed
import photosdata from "/src/dataset/photosdata.json"; // adjust path as needed

import { getAllVideos } from '/src/services/videoService.js';
function AllListPage() {
  
  const { searchTerm } = useOutletContext();
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  const navTopic = () => {
    navigate("/topicpage");
  };

  const navVideoPlayer = (id,url) => {
    console.log("video id: " + id);
    navigate("/videopage/" + id );
  };


  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getAllVideos(); // 👈 calling your function here
      if (data) {
        console.log(data);
        
        setVideos(data);
      }
    };
    fetchVideos();

  }, []); 


  return (
    <div>


      {/* topic  section */}
      <div className="w-full  flex items-center gap-2 mt-10">
        <span className="font-medium text-gray-700">Topics</span>
        <Tags tags={['4']} />
      </div>


      {/* topic container */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2  '>

        {/* topic card */}
        {filterNotes(notesData.data, searchTerm).slice(0, 3).map((topic, index) => (
          <div key={index} onClick={navTopic} className="cursor-pointer">
            <TopicsCard
              title={topic.title}
              description={topic.description}
              stats={topic.stats}
            />
          </div>
        ))}


        {/* <TopicsCard
              title="Aisha's Marriage"
              description="The Prophet (ﷺ) married Aisha when she was six years old and consummated the marriage when she was nine. She remained with him for nine years until his death."
              stats={{
                notes: 4,
                videos: 2,
                photos: 5,
                ebooks: 1,
                files: 3,
              }}
            /> */}


      </div>

      {/* Notes  section */}
      <div className="w-full  flex items-center gap-2 mt-10">
        <span className="font-medium text-gray-700">Notes</span>
        <Tags tags={['2']} />
      </div>

      {/* notes container */}
      <div className='grid grid-cols-1 '>

        {/* notes card */}
        {filterNotes(notesData.data, searchTerm).slice(0, 2).map((topic, index) => (
          <div key={index} onClick={navTopic} className="cursor-pointer">
            <NotesCard
              title={topic.title}
              summary={topic.description}
              content={topic.text}
              tags={topic.tags}
            />
          </div>
        ))}
        {/* <NotesCard
              title="Aisha’s Marriage"
              summary="Brief overview of Aisha's marriage and related historical notes."
              content="Permitted to you, on the night of the fasts, is the approach to your wives. They are your garments and ye are their garments. Allah knoweth what ye used to do secretly among yourselves; but He turned to you and forgave you..."
              tags={["Quran", "Marriage", "Islamic History"]}
            /> */}


      </div>

      {/* Videos  section */}
      <div className="w-full  flex items-center gap-2 mt-10">
        <span className="font-medium text-gray-700">Videos</span>
        <Tags tags={['12']} />
      </div>

      {/* Video container */}
      <div className='grid grid-cols-1 md:grid-cols-3 3xl:bg-red-100 gap-4 md:gap-10  mt-4  '>

        {filterVideos(videos, searchTerm).slice(0, 3).map((video, index) => (
          <div key={index} className="cursor-pointer">
            <VideoCard
              title={video.title}
              description={video.description}
              tags={video.tags}
              thumbnail={video.url}
              onImageClick={() => navVideoPlayer(video.id,video.url)}
            />
 

          </div>
        ))}

        {/* <VideoCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            /> */}

      </div>
      {/* Images  section */}
      <div className="w-full  flex items-center gap-2 mt-10">
        <span className="font-medium text-gray-700">Images</span>
        <Tags tags={['14']} />
      </div>

      {/* Images container */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-4  '>
        {filterPhotos(photosdata.data, searchTerm).slice(0, 2).map((topic, index) => (
          <div key={index} className="cursor-pointer">
            <ImageCard
              title={topic.title}
              description={topic.description}
              tags={topic.tags}
              image={topic.url}
              onImageClick={navTopic}
            />
          </div>
        ))}
        {/* <ImageCard
              title="Learn React in 10 Minutes"
              description="Master the basics of React.js with this quick tutorial — covering components, props, and hooks."
              tags={["React", "Frontend", "JavaScript", "Tutorial"]}
              thumbnail="https://english.varthabharati.in/storage/uploads/karavali/kazi_vb_97.jpeg"
            />
         */}
      </div>
    </div>
  )
}

export default AllListPage