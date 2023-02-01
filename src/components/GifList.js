import React from "react";

const GifList = ({ gifsList }) => {
  console.log(gifsList);
  const list = gifsList.map((element) => {
    return (
      <li key={element.id}>
        <img src={element.images.original.url} alt={element.title} />
      </li>
    );
  });

  return <ul className="gif-list">{list}</ul>;
};

export default GifList;
