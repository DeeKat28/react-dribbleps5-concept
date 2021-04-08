import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

const GameSearch = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden my-1 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-2 border-gray-500 mx-5 p-3 bg-gradient-to-r from-headend via-headmid to-headstart transform -skew-x-12">
            <ImSearch className="text-gray-400" />
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
