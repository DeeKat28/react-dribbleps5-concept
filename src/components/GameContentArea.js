import React from "react";
import OfferCard from "./OfferCard";
import GameCard from "./GameCard";
import gtaV from "../assets/images/gta5.jpg";
import bridgeOfSpirits from "../assets/images/bridgeofspirits.jpg";
import Spider from "../assets/images/spiderman.jpg";
import Horizon from "../assets/images/horizonfw.jpg";
import Forza from "../assets/images/forzahorizon.jpg";
import SpidermanCover from "../assets/images/spidermanCover.jpg";

const OfferCardData = [
  { header: "Special Offer", image: Spider },
  { header: "Weekly Deal", image: Horizon },
  { header: "New Releases", image: Forza },
];

const gameCardImages = [gtaV, bridgeOfSpirits];

const GameContentArea = () => {
  return (
    <div
      className="grid grid-cols-4 grid-rows-2 h-full"
      style={{
        backgroundImage: `url(${SpidermanCover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="col-span-3">
        <h1 className="text-white text-6xl mx-20 mt-40">
          Horizon Forbidden West:
        </h1>
        <h1 className="text-white text-6xl mx-20 my-5">Steam CD Key</h1>
        <div
          className="inline-block ml-20 py-5 transform -skew-x-12"
          style={{ backgroundColor: "#ff9638", color: "#ff9638" }}
        >
          Meow
        </div>
        <div className="inline-block py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gray-300 transform -skew-x-12">
          <a
            className="text-center text-white hover:text-headend mx-20"
            href="/"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="row-span-2">
        <div className="grid grid-cols-1 gap-12 my-12 mx-28">
          {gameCardImages.map((content, index) => (
            <GameCard key={index} content={content} />
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3">
          {OfferCardData.map((data, index) => (
            <OfferCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameContentArea;
