import React from "react";
// import VideoCard from '../components/VideoCard/VideoCard';
import VideoCard from "/src/components/cards/VideoCard/VideoCard.jsx";
import VideoList from "../components/VideoList/VideoList";
import DescriptionCard from "../components/cards/DescriptionCard/DescriptionCard";
import FileUpload from "../components/cards/FileUploadCard/FileUpload";
import ImageCard from "../components/cards/ImageCard/ImageCard";
import NotesCard from "../components/cards/NotesCard/NotesCard";
import TextCard from "../components/cards/TextCard/TextCard";

function Topic() {
  return (
    <div className="mt-20 gap-5">
      {/* <VideoList /> */}
      <h1>videocard</h1>
      <VideoCard />
      <h1>Description Card</h1>
      <DescriptionCard />
      <h1>File Upload Card</h1>
      <FileUpload />
      <h1>Image Upload Card</h1>
      <ImageCard />
      <h1> Notes Card</h1>
      <NotesCard />
      <h1>Text Card</h1>
      <TextCard />
    </div>
  );
}

export default Topic;
