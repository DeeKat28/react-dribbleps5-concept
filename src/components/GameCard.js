import React from "react";

const GameCard = ({ content }) => {
  return (
    <div className="relative">
      <img
        src={content}
        alt="GameImage"
        className="bg-gradient-to-b from-transparent to-gray-900"
      />
      <div
        className="grid grid-cols-2 
                      absolute inset-x-0 bottom-0 
                      justify-items-center m-auto
                      bg-gradient-to-b from-transparent to-gray-900"
      >
        <div className="grid grid-flow-row grid-cols-4 grid-rows-2 gap-0 ml-4">
          <div className="text-white">03</div>
          <div className="text-white">08</div>
          <div className="text-white">12</div>
          <div className="text-white">34</div>
          <div className="text-white text-xs">Days</div>
          <div className="text-white text-xs">Hours</div>
          <div className="text-white text-xs">Mins</div>
          <div className="text-white text-xs">Secs</div>
        </div>
        <div className="justify-self-end self-end text-white">$59.99</div>
        <div className="col-span-2 inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gray-300 transform -skew-x-12">
          <a
            className="text-center my-5 mx-10 text-white hover:text-headend"
            href="/"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
