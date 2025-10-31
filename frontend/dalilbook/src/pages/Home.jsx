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
    <div className="bg-red-400 pt-16">
      Home Page
      <DescriptionCard />
      <FileUpload />
      <ImageCard />
      <NotesCard />
      <TextCard />
      <TopicsCard />
      <VideoCard/>
    </div>
  );
}

export default Home;
