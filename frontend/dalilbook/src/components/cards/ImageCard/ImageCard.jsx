import React from 'react'
import cardImage1 from "/src/assets/images/CardImage.jpg";
const ImageCard = ({
  title = "Beautiful Sunset",
  image = cardImage1,
  tags = ["Photography", "Nature", "Inspiration"],
    onImageClick,

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
    <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image with hover overlay */}
      <div onClick={onImageClick}  className="relative w-full h-[180px] overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay (title + tags) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 transition-all duration-500">
          <h2 className="text-white text-lg font-semibold text-center px-2">
            {title}
          </h2>

          <div className="flex flex-wrap justify-center gap-2 px-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105 ${
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


export default ImageCard