import React from "react";
import { TiDelete } from "react-icons/ti";

const RemoveFavourites = () => {
  return (
    <>
      <span className="mr-2">Remove from favourites</span>
      <TiDelete size={28} />
    </>
  );
};

export default RemoveFavourites;
