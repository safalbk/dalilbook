
import React, { useState } from 'react';
import axios from 'axios';

function ThumGenerator() {
  const [video, setVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", video);

    const response = await axios.post("http://localhost:4000/api/video/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setThumbnails(response.data.thumbnails); // array of thumbnail URLs
  };

  return (
    <div className='mt-20'>
      <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <div style={{ display: "flex", gap: "10px" }}>
        {thumbnails.map((thumb, i) => (
          <img key={i} src={thumb} alt={`thumb-${i}`} width="200" />
        ))}
      </div>
    </div>
  );
}

export default ThumGenerator;
