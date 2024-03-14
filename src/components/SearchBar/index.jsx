import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';

function SearchBar({ jobs, setFilteredJobs }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    const filteredJobs = jobs.filter((job) => {
      // Convert all job properties to lowercase strings for case-insensitive search
      const jobData = Object.values(job).join(" ").toLowerCase();
      const query = searchQuery.toLowerCase();
      return jobData.includes(query);
    });
    setFilteredJobs(filteredJobs);
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Clear the search query
    // Additionally, you may want to clear the filtered jobs if needed
    setFilteredJobs(jobs); // Reset to display all jobs
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="py-2 px-4 bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring focus:ring-blue-400 rounded-md"
        placeholder="Search..."
      />
      {searchQuery && (
        <button
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
          style={{ right: '60px' }} // Adjust the position to make space for the search button
        >
          Clear
        </button>
      )}
      <button
        onClick={search}
        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
      >
        <BsSearch size={18} className="text-gray-600 cursor-pointer" />
      </button>
    </div>
  );
}

export default SearchBar;
