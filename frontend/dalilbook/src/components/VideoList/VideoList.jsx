import React, { useState } from "react";
import { Search } from "lucide-react"; // Lucide icon
import Vcard from "/src/components/VideoList/Vcard.jsx";
const VideoList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data (replace with real data)
  const videos = [
    { id: 1, title: "Learn React Basics", tags: ["React", "JavaScript"] },
    { id: 2, title: "Spring Boot Tutorial", tags: ["Java", "Backend"] },
    { id: 3, title: "Node.js Crash Course", tags: ["Node", "API"] },
    { id: 4, title: "Tailwind CSS Tips", tags: ["CSS", "Design"] },
  ];

  // Filter logic
  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-md bg-white shadow-sm rounded-full px-4 py-2 mb-4">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <Vcard key={video.id} title={video.title} tags={video.tags} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No videos found.
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoList;
