import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center space-x-2 mt-6 justify-center">

      {/* Prev Button */}
      <button
        className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-200 disabled:opacity-40"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-200 disabled:opacity-40"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
