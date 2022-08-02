import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import { setComputerUnit, setResults } from "../../features/roundSlice";
import {
  ILastRoundResult,
  writeRoundResults
} from "../../features/lastRoundSlice";
import { RootState } from "../../store";
import { IUnit } from "../../types";
import useGame from "../hooks/useGame";

const GameButtons = () => {
  const { unitsList, сomputerPreferences } = useSelector(
    (state: RootState) => state.game
  );
  const { selectedUnit, computerUnit, currentRound } = useSelector(
    (state: RootState) => state.round
  );

  const dispatch = useDispatch();

  const { handleBreakGame } = useGame();

  const handleRound = () => {
    if ("unitName" in selectedUnit && "unitName" in computerUnit) {
      const result = fightResult(selectedUnit, computerUnit);

      const roundResult: ILastRoundResult = {
        playerUnitName: selectedUnit.unitName,
        computerUnitName: computerUnit.unitName,
        round: currentRound,
        result
      };

      dispatch(setResults(result));
      dispatch(writeRoundResults(roundResult));

      const computerChoise =
        сomputerPreferences[
          Math.floor(Math.random() * сomputerPreferences.length)
        ];

      dispatch(setComputerUnit(unitsList[computerChoise]));
    }
  };

  const fightResult = (pUnit: IUnit, cUnit: IUnit) => {
    if (pUnit.unitName === cUnit.unitName) {
      return 0;
    }

    if (pUnit.defeats === cUnit.unitName) {
      return 1;
    }

    return -1;
  };

  return (
    <div className="buttons-game">
      <Button
        variant="contained"
        disabled={!selectedUnit?.hasOwnProperty("unitName") ?? true}
        onClick={handleRound}
      >
        Fight!
      </Button>
      <Button variant="contained" onClick={() => handleBreakGame("end")}>
        Retreat...
      </Button>
    </div>
  );
};

export default GameButtons;
