import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IGameState, IUnit } from "../redusers/gameReduser";
import {
  endGame,
  nextRound,
  restartGame,
  roundResult,
  setComputerUnit,
  startGame,
  updateScore,
} from "../actions/gameActions";

const ActionButtons = () => {
  const gameState = useSelector((state: IGameState) => state.game);
 
  const currentRound = useSelector((state: IGameState) => state.currentRound);
  const maxRounds = useSelector((state: IGameState) => state.maxRounds);

  const computersFavior = useSelector(
    (state: IGameState) => state.computersFavior
  );
  const computersSelection = [0, 1, 2, computersFavior];

  const unitsListLength = useSelector(
    (state: IGameState) => state.unitList.length
  );

  const playersUnit = useSelector((state: IGameState) => state.playersUnit);
  const computersUnit = useSelector((state: IGameState) => state.computersUnit);

  const dispatch = useDispatch();

  const handleStart = () => {
    const unitNum =
      computersSelection[Math.floor(Math.random() * (unitsListLength + 1))];
    dispatch(setComputerUnit(unitNum));

    dispatch(nextRound());
    dispatch(startGame());
  };

  const handleRound = () => {
    if (playersUnit === null) return;

    const result = fightResult(playersUnit, computersUnit);

    dispatch(roundResult(playersUnit, computersUnit, result));

    dispatch(nextRound());
    dispatch(updateScore(result));

    dispatch(
      setComputerUnit(
        computersSelection[Math.floor(Math.random() * (unitsListLength + 1))]
      )
    );
  };

  const fightResult = (pUnit: IUnit | null, cUnit: IUnit | null) => {
    if (pUnit?.unitName === cUnit?.unitName) {
      return 0;
    }

    if (pUnit?.defeats === cUnit?.unitName) {
      return 1;
    }

    return -1;
  };

  if((currentRound - 1) === maxRounds) {
    return (
      <div className="buttons-game">
        <Button variant="contained" onClick={() => dispatch(restartGame())}>
          Play again!
        </Button>
        <Button variant="contained" onClick={() => dispatch(endGame())}>
          Retreat...
        </Button>
      </div>
    );
  }

  if (gameState) {
    return (
      <div className="buttons-game">
        <Button variant="contained" onClick={() => handleRound()}>
          Fight!
        </Button>
        <Button variant="contained" onClick={() => dispatch(endGame())}>
          Retreat...
        </Button>
      </div>
    );
  }

  return (
    <div className="buttons-game">
      <Button variant="contained" onClick={() => handleStart()}>
        Start game!
      </Button>
    </div>
  );
};

export default ActionButtons;
