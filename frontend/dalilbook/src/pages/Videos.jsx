import React from 'react'
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
const NotesList = ({ count }) => {
  // Take only the first `count` notes (if count is passed)
  const notesToShow = count ? notesData.data.slice(0, count) : notesData.data;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {notesToShow.map((note) => (
        <div
          key={note.id}
          className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {note.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">{note.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {note.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Full text */}
          <p className="text-gray-700 text-sm">{note.text}</p>
        </div>
      ))}
    </div>
  );
};
function Videos() {
  return (
    <div className='mt-20'>
        <NotesList count={4} />

    </div>
  )
}

export default Videos