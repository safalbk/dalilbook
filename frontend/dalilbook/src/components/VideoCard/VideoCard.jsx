import React from "react";
import cardImage from "../../assets/images/CardImage.jpg";

const VideoCard = ({
  title = "Video Title",
  description = "This video card layout keeps the image on the left with a clean, modern text layout. The colorful tags below make topics stand out attractively.",
  thumbnail = cardImage,
  tags = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
}) => {
  const colors = [
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="md:w-1/3 w-full">
          <div className="overflow-hidden h-48 md:h-full">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="p-5 md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
              {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 ${
                  colors[index % colors.length]
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
