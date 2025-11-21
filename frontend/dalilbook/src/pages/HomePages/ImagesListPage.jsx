import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import ImageCard from '/src/components/cards/ImageCard/ImageCard.jsx';
import { filterPhotos } from '/src/services/filterData.js';
import photosdata from "/src/dataset/photosdata.json"; // adjust path as needed
import { useEffect, useState } from 'react';
import { getallImages } from '/src/services/ImageService.js';
function ImagesListPage() {
  const { searchTerm } = useOutletContext();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  }

  const fetchImages = async () => {
    const data = await getallImages(1, 4, "title", "dec", searchTerm); // 👈 calling your function here
    if (data) {
      console.log(data);

      setImages(data);
    }
  };
  
  useEffect(() => {

    fetchImages();

  }, [searchTerm]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-4  '>
      {filterPhotos(images, searchTerm).map((topic, index) => (
        <div key={index} onClick={navTopic} className="cursor-pointer">
          <ImageCard
            title={topic.title}
            description={topic.description}
            tags={topic.tags}
            image={topic.url}
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