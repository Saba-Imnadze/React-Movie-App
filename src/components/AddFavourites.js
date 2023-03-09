import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const AddFavourites = () => {
  return (
    <>
      <span className="mr-2">Add to Favourites</span>
      <BsFillHeartFill style={{ color: "red" }} />
    </>
  );
};

export default AddFavourites;
