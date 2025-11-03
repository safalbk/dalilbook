import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import ImageCard from '/src/components/cards/ImageCard/ImageCard.jsx';
import { filterPhotos } from '/src/services/filterData.js';
import photosdata from "/src/dataset/photosdata.json"; // adjust path as needed

function ImagesListPage() {
  const { searchTerm } = useOutletContext();

  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-4  '>
      {filterPhotos(photosdata.data, searchTerm).map((topic, index) => (
        <div key={index} onClick={navTopic} className="cursor-pointer">
          <ImageCard
            title={topic.title}
            description={topic.description}
            tags={topic.tags}
            thumbnail={topic.url}
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
  )
}

export default ImagesListPage