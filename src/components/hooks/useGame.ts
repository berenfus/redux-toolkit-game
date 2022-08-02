import { useDispatch, useSelector } from "react-redux";
import { endGame, startGame } from "../../features/gameSlice";
import { setDefaultLastRound } from "../../features/lastRoundSlice";
import { setComputerUnit, setNewGame } from "../../features/roundSlice";
import { RootState } from "../../store";

const usePrepareNewGame = () => {
  const { unitsList } = useSelector((state: RootState) => state.game);

  const dispatch = useDispatch();

  const handlePrepare = () => {
    const computersFavoritIndex = Math.floor(Math.random() * unitsList.length);

    const newProferences = [];
    for (let i = 0; i < unitsList.length; i++) {
      newProferences.push(i);
    }
    newProferences.push(computersFavoritIndex);
    dispatch(startGame(newProferences));

    const computerChoise = Math.floor(Math.random() * unitsList.length);
    dispatch(setComputerUnit(unitsList[computerChoise]));
  };

  const handleBreakGame = (type: "end" | "restart") => {
    if (type === "end") dispatch(endGame());

    if (type === "restart") handlePrepare();

    dispatch(setDefaultLastRound());
    dispatch(setNewGame());
  };

  return { handlePrepare, handleBreakGame };
};

export default usePrepareNewGame;
