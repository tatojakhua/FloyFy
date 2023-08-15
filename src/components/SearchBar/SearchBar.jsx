import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`Search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600 max-w-sm"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center max-w-sm">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 max-w-sm" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4 max-w-sm"
          placeholder="Which artist do you want to listen to?"
          type="search"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
