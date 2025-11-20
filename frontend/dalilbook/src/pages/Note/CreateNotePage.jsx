import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TagsInput from "../../components/InputTag/TagsInput";
import { createNote, getNoteById, updateNote } from "../../services/NoteService";


const CreateNotePage = () => {

  const { id } = useParams();             // <-- If id exists → Edit mode
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    description: "",
    tags: []
  });

  // Load existing note when editing
  useEffect(() => {
    if (isEdit) {
      getNoteById(id).then((data) => {
        setFormData(data); // must return {title, text, description, tags}
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateNote(id, formData);
        alert("Note updated successfully");
      } else {
        await createNote(formData);
        alert("Note created successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save note");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {isEdit ? "Edit Note" : "Create Note"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text
          </label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <TagsInput
            tags={formData.tags}
            setTags={(newTags) =>
              setFormData({ ...formData, tags: newTags })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          {isEdit ? "Update Note" : "Create Note"}
        </button>
      </form>
    </div>
  );
};

export default CreateNotePage;
