import React from "react";
import OfferCard from "./OfferCard";
import GameCard from "./GameCard";
import gtaV from "../assets/images/gta5.jpg";
import bridgeOfSpirits from "../assets/images/bridgeofspirits.jpg";

const OfferCardHeaders = ["Special Offer", "Weekly Deal", "New Releases"];

const gameCardImages = [gtaV, bridgeOfSpirits];

const GameContentArea = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 h-full">
      <div className="col-span-3 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-400">
        <h1 className="text-white text-6xl">Horizon Forbidden West:</h1>
        <h1 className="text-white text-6xl">Steam CD Key</h1>
        <div className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gray-300 transform -skew-x-12">
          <a
            className="text-center text-white hover:text-headend mx-20"
            href="/"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="row-span-2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500">
        <div className="grid grid-cols-1 gap-12 my-12 mx-28">
          {gameCardImages.map((content) => (
            <GameCard content={content} />
          ))}
        </div>
      </div>
      <div className="col-span-3 flex flex-row bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500">
        {OfferCardHeaders.map((header, index) => {
          return <OfferCard key={index} header={header} />;
        })}
      </div>
    </div>
  );
};

export default GameContentArea;
