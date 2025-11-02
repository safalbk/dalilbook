import React from 'react'

const TextCard = ({
  description = "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements"
,
  tags = ["Text Card", "React", "TailwindCSS", "Responsive"],
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
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6">
      {/* Description (styled like a verse block) */}
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

export default TextCard