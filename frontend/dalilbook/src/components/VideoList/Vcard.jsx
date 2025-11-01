import React from "react";
import { PlayCircle } from "lucide-react";
import defaultImage from "../../assets/images/CardImage.jpg"; // fallback image

const Vcard = ({ image = defaultImage, title, description, tags = [] }) => {
  const colors = [
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
    "bg-rose-100 text-rose-700",
    "bg-cyan-100 text-cyan-700",
    "bg-lime-100 text-lime-700",
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <PlayCircle className="text-white w-12 h-12" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
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

export default Vcard;
