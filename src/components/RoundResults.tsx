import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const RoundResults = () => {
  const { isGame, maxRounds } = useSelector((state: RootState) => state.game);
  const { score } = useSelector((state: RootState) => state.round);
  const { round, playerUnitName, computerUnitName } = useSelector(
    (state: RootState) => state.lastRound
  );

  const textResult = (isLast: boolean) => {
    if (score > 0) return isLast ? "You win! Congratulations!" : "Victory!";

    if (score === 0) {
      return isLast ? "This game ended in a draw" : "Draw.";
    }

    return isLast ? "You lose... Try again!" : "Defeat!";
  };

  if (round) {
    return (
      <div className="results-window">
        <h2>Score: {score}</h2>
        <h1>
          Round {round} result: {textResult(maxRounds === round)}
        </h1>
        <h2>
          {playerUnitName} (Player) vs. {computerUnitName} (Computer)
        </h2>
      </div>
    );
  }

  if (isGame) {
    return (
      <div className="results-window">
        <h2>Score: {score}</h2>
      </div>
    );
  }

  return (
    <div className="results-window">
      <h1>Frontend challenge!</h1>
    </div>
  );
};

export default RoundResults;
