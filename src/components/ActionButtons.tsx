import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import StartButtons from "./buttons/StartButtons";
import GameButtons from "./buttons/GameButtons";
import EndButtons from "./buttons/EndButtons";

const ActionButtons = () => {
  const { isGame, maxRounds } = useSelector((state: RootState) => state.game);
  const { round } = useSelector((state: RootState) => state.lastRound);

  if (maxRounds === round) {
    return <EndButtons />;
  }

  if (isGame) {
    return <GameButtons />;
  }

  return <StartButtons />;
};

export default ActionButtons;
