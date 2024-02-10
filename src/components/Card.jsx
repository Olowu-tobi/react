import React from "react";

function Card({singleMovie}) {
  return (
    <div className="bg-[#20283E] rounded-lg w-full h-auto ">
      <div className=" w-full h-[85%]">
        <img src={singleMovie.images.jpg.image_url}  className="w-full h-full object-cover " />
      </div>
      <p className="w-full h-auto p-4">{singleMovie.title}</p>
    </div>
  );
}

export default Card;
