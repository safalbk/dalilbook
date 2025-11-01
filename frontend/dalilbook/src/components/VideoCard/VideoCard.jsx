import React from 'react'
import cardImage from "../../assets/images/CardImage.jpg"

const VideoCard = () => {
  const tags = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];

  const colors = [
    "bg-pink-200 text-pink-800",
    "bg-green-200 text-green-800",
    "bg-blue-200 text-blue-800",
    "bg-yellow-200 text-yellow-800",
    "bg-purple-200 text-purple-800",
    "bg-orange-200 text-orange-800",
  ];

return (
    <div className="w-150 mx-auto bg-slate-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Top Section: Image + Text */}
      <div className="flex flex-col md:flex-row p-5 gap-4">
        {/* Image */}
        <div className="shrink-0">
          <div className="overflow-hidden rounded-xl">
            <img
              src={cardImage}
              alt="Card"
              className="w-70 h-50 object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-start text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Video Title
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            This horizontal card layout keeps the image on the left and aligns
            the title and description to the top right. The colorful tags span
            across the full bottom width, creating a clean and structured look.
          </p>
        </div>
      </div>

      {/* Bottom Section: Tags (Full Width) */}
      <div className="border-t border-gray-200 px-5 py-3 flex flex-wrap justify-center md:justify-start gap-2 bg-slate-50">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-sm font-medium px-3 py-1 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
              colors[index % colors.length]
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard