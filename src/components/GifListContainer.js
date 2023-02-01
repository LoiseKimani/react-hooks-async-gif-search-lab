import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [userSearch, setUserSearch] = useState("dolphin");

  const handleSearch = (value) => {
    setUserSearch(value);
    console.log(userSearch);
  };

  const [gifsData, setGifsData] = useState("");
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=kzTVQiwvVNYOcjnzEg8MRwESSiETrFm5&rating=g`
    )
      .then((r) => r.json())
      .then((d) => setGifsData(d.data.slice(0, 3)));
  }, [userSearch]);

  console.log(gifsData);
  return (
    <div className="gif-list-container">
      <GifSearch onSearch={handleSearch} />
      {gifsData !== "" ? (
        <GifList gifsList={gifsData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GifListContainer;
