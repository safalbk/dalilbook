import React from 'react'
import {getAllNotes} from '/src/services/NoteService.js';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import NotesCard from '/src/components/cards/NotesCard/NotesCard.jsx';

function Notes() {

  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();
  const gotoNoteCreate = () => {
    navigate("create");
  };
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getAllNotes(); // 👈 calling your function here
      if (data) {
        console.log(data);
        
        setNotes(data);
      }
    };
    fetchVideos();

  }, []); 


  
  return (
    <div className='mt-20 p-4'>

      <button onClick={gotoNoteCreate} className='w-40 h-10 bg-green-200'>Create</button>
        {notes.map((note, index) => (
            // <div key={index} className='w-70 h-20 border mb-4 p-2'>
            //     <h1 className='font-bold'>{note.title}</h1>
            //     <p>{note.text}</p>
            //     <p>{note.description}</p>
            // </div>
             <NotesCard
                          title={note.title}
                          summary={note.description}
                          content={note.text}
                          tags={note.tags}
                        />
        ))}
        <div className='w-70 h-20'>
            <h1></h1>
        </div>

     


    </div>
  )
}

export default Notes