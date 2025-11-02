import React from 'react'
import cardImage1 from "../../assets/images/CardImage.jpg";


const ImageCard = ({
  tags = ["Image Card", "Photography", "Inspiration"],
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
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 p-5 flex flex-col items-center">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl mb-4">
        <img
          src={cardImage1}
          alt="Image Card"
          className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
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
  );
};

export default ImageCard