import React from "react";

const OfferCard = ({ header }) => {
  return (
    <div className="m-auto bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 select-none">
      <h1 className="text-white text-6xl">{header}</h1>
      <h2 className="text-white text-2xl">Go To Offer</h2>
    </div>
  );
};

export default OfferCard;
