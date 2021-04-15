import React from "react";
//import cover from "../assets/images/horizonfwCover.jpg";

const OfferCard = ({ data }) => {
  const { header, image } = data;
  return (
    <div className="relative m-10 select-none">
      <img
        src={image}
        alt="GameImage"
        className="bg-gradient-to-b from-transparent to-gray-900"
        // onMouseOver={(e) => (e.currentTarget.src = cover)}
      />
      <h1 className="absolute inset-x-0 top-0 p-10 text-white text-4xl bg-gradient-to-t from-transparent to-gray-900 cursor-pointer">
        {header}
      </h1>
      <h2 className="absolute inset-x-0 bottom-0 text-center py-5 text-white text-2xl bg-gradient-to-b from-transparent to-gray-900">
        Go To Offer
      </h2>
    </div>
  );
};

export default OfferCard;
