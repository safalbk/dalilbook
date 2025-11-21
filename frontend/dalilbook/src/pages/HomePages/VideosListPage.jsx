import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import VideoCard from '/src/components/cards/VideoCard/VideoCard.jsx';
import { filterVideos } from '/src/services/filterData.js';
import videodata from "/src/dataset/videodata.json"; // adjust path as needed
import { getAllVideos } from '/src/services/VideoService.js';
import { useEffect, useState } from 'react';

function VideosListPage() {
  const { searchTerm } = useOutletContext();
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
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

  }, [searchTerm]);
  return (

    <>
      <div className='grid grid-col-1 md:grid-cols-3 gap-3 mt-10'>
        {filterVideos(videos, searchTerm).map((topic, index) => (
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