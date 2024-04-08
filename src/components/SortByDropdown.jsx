import React from 'react';

function SortByDropdown() {
  return (
    <div className="relative inline-block">
      <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 flex items-center space-x-2">
        <span>Sort By</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 stroke-current text-gray-500 transform transition-transform duration-300"
          viewBox="0 0 20 20"
        >
          <path
            fill="none"
            d="M8.293 9.293a1 1 0 011.414 0L12 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <p
            
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Featured
          </p>
          <p
          
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            New
          </p>
          <p
          
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Popular
          </p>
        </div>
      </div>
    </div>
  );
}

export default SortByDropdown;
