import React from "react";
import { Button } from "@mui/material";
import useGame from "../hooks/useGame";

const StartButtons = () => {
  const { handlePrepare } = useGame();

  return (
    <div className="buttons-game">
      <Button variant="contained" onClick={handlePrepare}>
        Start game!
      </Button>
    </div>
  );
};

export default StartButtons;
