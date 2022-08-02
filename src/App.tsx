import React from "react";
import ActionButtons from "./components/ActionButtons";
import RoundResults from "./components/RoundResults";
import UnitCards from "./components/UnitCards";

const App = () => {
  return (
    <div className="game-window">
      <RoundResults />
      <UnitCards />
      <ActionButtons />
    </div>
  );
};

export default App;
