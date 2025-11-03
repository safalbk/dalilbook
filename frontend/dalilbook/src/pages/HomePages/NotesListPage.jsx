import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import NotesCard from '/src/components/cards/NotesCard/NotesCard.jsx';
import { filterNotes } from '/src/services/filterData.js';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
function NotesListPage() {
    const { searchTerm } = useOutletContext();

  const navigate = useNavigate();
  const navTopic = () => {
    navigate("/topicpage");
  };
  return (
    <div>

      {filterNotes(notesData.data, searchTerm).map((topic, index) => (
        <div key={index} onClick={navTopic} className="cursor-pointer">
          <NotesCard
            title={topic.title}
            summary={topic.description}
            content={topic.text}
            tags={topic.tags}
          />
        </div>
      ))}
    </div>
  )
}

export default NotesListPage