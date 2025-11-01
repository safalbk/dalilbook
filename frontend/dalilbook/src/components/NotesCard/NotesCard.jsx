import React from "react";

const NotesCard = ({
  description = `“Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. 
Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'”

(Quran 39:53)`,
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
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6">
      {/* Description (styled like a verse block) */}
      <blockquote className="relative text-gray-700 text-base md:text-lg leading-relaxed italic pl-6 border-l-4 border-blue-200 mb-6 whitespace-pre-line">
        <span className="absolute left-0 top-0 text-4xl text-blue-300 font-serif select-none -ml-2 -mt-2">
          “
        </span>
        {description}
      </blockquote>

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

export default NotesCard;
