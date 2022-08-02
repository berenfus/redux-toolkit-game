import React from "react";
import { Button } from "@mui/material";

import useGame from "../hooks/useGame";

const EndButtons = () => {
  const { handleBreakGame } = useGame();

  return (
    <div className="buttons-game">
      <Button variant="contained" onClick={() => handleBreakGame("restart")}>
        Play again!
      </Button>
      <Button variant="contained" onClick={() => handleBreakGame("end")}>
        Retreat...
      </Button>
    </div>
  );
};

export default EndButtons;
