import React, { useState } from "react";

const FileUpload = ({
  heading = "Upload Your Files",
  tags = ["Documents", "Images", "Videos", "Others"],
}) => {
  const [fileName, setFileName] = useState(null);

  const colors = [
    "bg-pink-100 text-pink-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
        {heading}
      </h2>

      {/* Upload Area */}
      <label
        htmlFor="file-upload"
        className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-400 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 0l-3 3m3-3l3 3M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
          />
        </svg>
        <span className="text-gray-600 text-sm md:text-base">
          {fileName ? (
            <span className="font-medium text-blue-600">{fileName}</span>
          ) : (
            <>
              <span className="font-medium text-blue-600">Click to upload</span>{" "}
              or drag and drop
            </>
          )}
        </span>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 ${
              colors[index % colors.length]
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FileUpload