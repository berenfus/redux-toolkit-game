import { useState } from "react";
import { useSelector } from "react-redux";
import { IGameState } from "../redusers/gameReduser";

const RoundResults = () => {
  const gameState = useSelector((state:IGameState) => state.game);
  const currentScore = useSelector((state:IGameState) => state.currentScore);
  const roundResult = useSelector((state:IGameState) => state.roundResult);
  const maxRound = useSelector((state:IGameState) => state.maxRounds)

  const [open, setOpen] = useState(false);

  const textResult = (result: number) => {
    if(result === 1) return 'Victory!';
    
    if(result === 0 ) {
      return 'Draw.';
    } else {
      return 'Defeat!';
    }
  }

  if (gameState && !roundResult) {
    return (
      <div className="results-window">
        <h2>Score: {currentScore}</h2>
      </div>
    );
  }

  if(roundResult?.currentRound === maxRound) {
    if(currentScore > 0) {
      return (
        <div className="results-window">
          <h2>Score: {currentScore}</h2>
          <h2>You win! Congratulations!</h2>
        </div>
      );
    }

    if(currentScore === 0) {
      return (
        <div className="results-window">
          <h2>Score: {currentScore}</h2>
          <h2>This game ended in a draw</h2>
        </div>
      );
    }

    if(currentScore < 0) {
      return (
        <div className="results-window">
          <h2>Score: {currentScore}</h2>
          <h2>You lose... Try  again later!</h2>
        </div>
      );
    }
  } else

  if (roundResult) {
    return (
      <div className="results-window">
        <h2>Score: {currentScore}</h2>
        <h1>Round {roundResult.currentRound} result: {textResult(roundResult.result)} </h1>
        <h2>{roundResult.playersUnit?.unitName} (Player) vs. {roundResult.computersUnit?.unitName} (Computer)</h2>
      </div>
    );
  }

  return (
    <div className="results-window">
      <h1>Frontend challenge!</h1>
    </div>
  );
}

export default RoundResults;