import React from "react";
import Tags from '/src/components/Tags/Tags.jsx';

const NotesCard = ({
  title = "Default Title",
  summary = "This is a short summary line for the note.",
  content = "This is the full note content. You can replace this with actual text or fetched data.",
  tags = ["General"],
}) => {
  return (
    <div className="w-full sm:w-full h-[280px] lg:h-[280px] bg-white rounded-md p-4 my-3 shadow hover:shadow-md transition-all duration-300">
      <div className="flex flex-col h-full justify-between">
        {/* Title & Description */}
        <div>
          <h1 className="text-gray-800 text-md font-semibold mb-2">
            Title: {title}
          </h1>

          {/* Short one-line summary */}
          <p className="line-clamp-1 text-gray-700 text-sm mb-3">
            {summary}
          </p>

          {/* Main content / excerpt */}
          <p className="line-clamp-6 text-gray-700 text-sm leading-relaxed">
            {content}
          </p>
        </div>

        {/* Tags Section */}
        <div className="mt-3">
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
