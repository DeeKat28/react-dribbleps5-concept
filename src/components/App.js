import React from "react";
import NavBar from "./NavBar";
import GameContentArea from "./GameContentArea";

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <GameContentArea />
    </div>
  );
};

export default App;
