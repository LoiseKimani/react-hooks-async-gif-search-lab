import React, { useState } from "react";

const GifSearch = ({ searchQuery }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    searchQuery(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Look for a GIF..."
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <button type="submit">Search </button>
    </form>
  );
};

export default GifSearch;
