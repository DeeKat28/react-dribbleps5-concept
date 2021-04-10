import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

const GameSearch = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex-auto">
        <form onSubmit={onSubmit} className="ml-2">
          <div className="flex items-center border-2 border-gray-500 bg-gradient-to-r from-headend via-headmid to-headstart transform -skew-x-12">
            <ImSearch className="flex-initial text-gray-400 cursor-pointer mx-2" />
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-auto bg-transparent text-gray-400 py-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default GameSearch;
