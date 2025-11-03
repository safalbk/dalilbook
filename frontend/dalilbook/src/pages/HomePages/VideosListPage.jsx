import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import VideoCard from '/src/components/cards/VideoCard/VideoCard.jsx';
import { filterVideos } from '/src/services/filterData.js';
import videodata from "/src/dataset/videodata.json"; // adjust path as needed

function VideosListPage() {
  const { searchTerm } = useOutletContext();

  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  };
  return (

    <>
      <div className='grid grid-col-1 md:grid-cols-3 gap-3 mt-10'>
        {filterVideos(videodata.data, searchTerm).map((topic, index) => (
          <div key={index} onClick={navTopic} className="cursor-pointer">
            <VideoCard
              title={topic.title}
              description={topic.description}
              tags={topic.tags}
              thumbnail={topic.thumbnail}
            />
          </div>
        ))}
      </div>



    </>
  )
}

export default VideosListPage