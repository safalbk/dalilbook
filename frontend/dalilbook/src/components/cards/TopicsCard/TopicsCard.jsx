import React from 'react'
import Tags from '/src/components/Tags/Tags.jsx';

const TopicsCard = ({
  title = "Default Title",
  description = "This is a short default description for the topic card.",
  stats = {
    notes: 0,
    videos: 0,
    photos: 0,
    ebooks: 0,
    files: 0,
  },
}) => {
  return (
    <div className="w-full sm:w-[410px] h-[220px] lg:h-[190px] bg-white rounded-md p-3 my-2 shadow hover:shadow-md transition-all duration-300">
      <div className="flex flex-col h-full justify-between">
        {/* Title & Description */}
        <div>
          <h1 className="text-gray-800 text-md font-semibold">
            Title: {title}
          </h1>

          <p className="line-clamp-4 lg:line-clamp-3 text-gray-700 text-sm my-2">
            {description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex gap-3 flex-wrap text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Notes</span>
            <Tags tags={[stats.notes.toString()]} />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Videos</span>
            <Tags tags={[stats.videos.toString()]} />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Photos</span>
            <Tags tags={[stats.photos.toString()]} />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">E-Books</span>
            <Tags tags={[stats.ebooks.toString()]} />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Files</span>
            <Tags tags={[stats.files.toString()]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsCard;