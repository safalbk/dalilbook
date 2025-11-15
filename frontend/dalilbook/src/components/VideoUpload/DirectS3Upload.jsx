import React, { useState } from "react";
import axios from "axios";
import { createVideo } from "/src/services/videoService.js";

const DirectS3Upload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Save Video Metadata to DB
const updateDB = async (url) => {
  const tagList = tags.split(",").map((t) => t.trim());

  const data = {
    title:title,
    description:description,
    url, // USE DIRECT URL
    tags: tagList,
  };

  try {
    const response = await createVideo(data);
    console.log("DB Save Success:", response.data);
    setMessage("✅ Video metadata saved to DB!");
  } catch (error) {
    console.error("Error saving to DB:", error);
    setMessage("❌ Failed saving metadata.");
  }
};

  // ✅ Upload file to S3
  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");

    try {
      // 1️⃣ Get pre-signed URL
      const { data: presignedUrl } = await axios.get(
        `http://localhost:4000/presign?filename=${file.name}`
      );

      // 2️⃣ Upload file to S3
      await axios.put(presignedUrl, file, {
        headers: { "Content-Type": file.type },
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        },
      });

      // 3️⃣ Extract public S3 file URL
      const publicUrl = presignedUrl.split("?")[0];
      setVideoUrl(publicUrl);

      console.log("Uploaded file URL:", publicUrl);

      // 4️⃣ Save metadata to backend DB
    await updateDB(publicUrl);  // PASS DIRECTLY
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Upload failed.");
    }
  };

  return (
    <div className="p-4 mt-20 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Video</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded mb-3"
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded mb-3 h-24"
      />

      {/* Tags */}
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-3"
      />

      {/* File Input */}
      <h2 className="text-lg font-semibold mb-2">Upload Video File</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3"
      />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="mt-3">
          <p>Uploading: {progress}%</p>
          <progress value={progress} max="100"></progress>
        </div>
      )}

      {/* Show URL */}
      {videoUrl && (
        <div className="mt-3">
          <p className="font-medium">File Uploaded Successfully:</p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {videoUrl}
          </a>
        </div>
      )}

      {/* DB Response Message */}
      {message && <p className="mt-4 font-semibold">{message}</p>}
    </div>
  );
};

export default DirectS3Upload;
