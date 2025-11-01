import React from 'react'

const DescriptionCard = ({
  heading = "Card Heading",
  description = "This description card follows a clean, modern design — with the heading, description, and colorful tags arranged vertically and spanning the full width of the device.",
  tags = ["Design", "React", "TailwindCSS", "Responsive"],
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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
        {heading}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
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

export default DescriptionCard