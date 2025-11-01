import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = ({
  placeholder = "Search…",
  onChange,
  value,
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-170 ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={20} color="currentColor" className="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white
                   text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   sm:text-sm"
      />
    </div>
  );
};

export default SearchInput;
