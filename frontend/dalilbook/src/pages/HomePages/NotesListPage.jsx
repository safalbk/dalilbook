import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import NotesCard from '/src/components/cards/NotesCard/NotesCard.jsx';
import { filterNotes } from '/src/services/filterData.js';
import notesData from "/src/dataset/notesdata.json"; // adjust path as needed
import { getAllNotes } from '/src/services/NoteService.js';
import { useEffect, useState } from 'react';
import Pagination from '/src/components/Pagination/Pagination.jsx';

function NotesListPage() {
  const { searchTerm } = useOutletContext();
  const [notes, setNotes] = useState([]);

  // pagiination variables
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const navigate = useNavigate();

  const navTopic = () => {
    navigate("/topicpage");
  };

  const gotoNoteCreate = () => {
    navigate("create");
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getAllNotes(1, 4, "title", "dec", searchTerm); // 👈 calling your function here
      if (data) {
        console.log(data);

        setNotes(data);
      }
    };
    fetchNotes();

  }, [searchTerm]);


  return (
    <div>

      {filterNotes(notes, searchTerm).map((topic, index) => (
        <div key={index} className="cursor-pointer">
          <NotesCard
            title={topic.title}
            summary={topic.description}
            content={topic.text}
            tags={topic.tags}
          />
        </div>
      ))}

      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
    </div>
  )
}

export default NotesListPage