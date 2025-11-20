import React, { useState } from "react";

const TagsInput = ({ tags, setTags }) => {
  tags = tags || [];
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Tags
      </label>

      <div className="flex flex-wrap items-center gap-2 p-2 border rounded-lg min-h-[48px] focus-within:ring-2 focus-within:ring-blue-500">

        {/* Existing Tags */}
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-blue-600 hover:text-blue-800"
            >
              ✕
            </button>
          </div>
        ))}

        {/* Input */}
        <input
          type="text"
          className="flex-1 border-none outline-none px-2"
          placeholder="Type and press Enter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TagsInput;
