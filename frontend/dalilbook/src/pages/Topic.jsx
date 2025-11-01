import React from "react";
// import VideoCard from '../components/VideoCard/VideoCard';
import VideoCard from "/src/components/VideoCard/VideoCard.jsx";
import VideoList from "../components/VideoList/VideoList";
import DescriptionCard from "../components/DescriptionCard/DescriptionCard";
import FileUpload from "../components/FileUploadCard/FileUpload";
import ImageCard from "../components/ImageCard/ImageCard";
import NotesCard from "../components/NotesCard/NotesCard";
import TextCard from "../components/TextCard/TextCard";

function Topic() {
  return (
    <div className="mt-20 gap-5">
      {/* <VideoList /> */}
      <VideoCard />
      <DescriptionCard/>
      <FileUpload/>
      <ImageCard/>
      <NotesCard/>
      <TextCard/>
    </div>
  );
}

export default Topic;
