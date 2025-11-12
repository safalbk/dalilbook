import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file!");
      return;
    }

    // Convert tags string ("spring, java, backend") to array
    const tagList = tags.split(",").map((t) => t.trim());

    // Create the JSON part (VideoRequestDto)
    const data = {
      title,
      description,
      url:"test",
      tags: tagList,
    };

    // Create FormData
    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:4000/api/videoapi/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload success:", response.data);
      setMessage("✅ Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      setMessage("❌ Upload failed.");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", width: "100%", height: 80 }}
        />

        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
          style={{ display: "block", margin: "10px 0" }}
        />

        <button type="submit">Upload</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default VideoUpload;
