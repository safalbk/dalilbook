import React, { useState } from "react";
import axios from "axios";
import { createImage } from "/src/services/imageService.js"; // <-- Make sure you create this service

const DirectS3ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  // Save Image Metadata to DB
  const updateDB = async (url) => {
    const tagList = tags.split(",").map((t) => t.trim());

    const data = {
      title,
      description,
      url,
      tags: tagList,
    };

    try {
      const response = await createImage(data);
      console.log("DB Save Success:", response.data);
      setMessage("✅ Image metadata saved to DB!");
    } catch (error) {
      console.error("DB Error:", error);
      setMessage("❌ Failed saving metadata.");
    }
  };

  // Upload to S3
  const handleUpload = async () => {
    if (!file) return alert("Select an image!");

    try {
      const { data: presignedUrl } = await axios.get(
        `http://localhost:4000/presign?filename=${file.name}`
      );

      await axios.put(presignedUrl, file, {
        headers: { "Content-Type": file.type },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded * 100) / e.total);
          setProgress(percent);
        },
      });

      const publicUrl = presignedUrl.split("?")[0];
      setImageUrl(publicUrl);

      await updateDB(publicUrl);
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed.");
    }
  };

  return (
    <div className="p-4 mt-20 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Image</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-3 p-2 border rounded h-24"
        required
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Image File Input */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3"
      />

      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Upload Image
      </button>

      {progress > 0 && (
        <div className="mt-3">
          <p>Uploading: {progress}%</p>
          <progress value={progress} max="100"></progress>
        </div>
      )}

      {imageUrl && (
        <div className="mt-3">
          <p className="font-medium">Uploaded Successfully:</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full max-h-60 object-cover mt-2 rounded border"
          />
        </div>
      )}

      {message && <p className="mt-4 font-semibold">{message}</p>}
    </div>
  );
};

export default DirectS3ImageUpload;
