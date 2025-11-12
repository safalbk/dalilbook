import React, { useState } from "react";
import cardImage from "/src/assets/images/CardImage.jpg";
const VideoCard = ({
  title = "Video Title",
  description = "This is a short description for the video. Click 'More' to expand and see the full text if available.",
  thumbnail = "https://scienceandfilm.org/uploads/videos/files/Druid_Peak_%5bTrailer%5d_-_Florida_Film_Festival_2014.mp4",
  tags = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
  onImageClick,

}) => {
  const [expanded, setExpanded] = useState(false);

  const colors = [
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
  ];
  return (
    <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Thumbnail */}
      <div  onClick={onImageClick} className="relative w-full h-[140px] overflow-hidden">
        <video
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
         
        />
      </div>

      {/* Text Section */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h2>

          {/* Description with 'More' toggle */}
          <div>
            <p
              className={`text-gray-600 text-sm leading-relaxed ${expanded ? "" : "line-clamp-1"
                }`}
            >
              {description}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 text-xs mt-1 hover:underline focus:outline-none"
            >
              {expanded ? "Show Less" : "More"}
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 ${colors[index % colors.length]
                }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default VideoCard;
