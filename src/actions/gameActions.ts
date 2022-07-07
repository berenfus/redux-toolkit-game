import { IUnit } from "../redusers/gameReduser";

export type Action = {
  type: string;
  payload: any;
};

export const startGame = (): Action => {
  return {
    type: "START_GAME",
    payload: true,
  };
};

export const endGame = (): Action => {
  return {
    type: "END_GAME",
    payload: false,
  };
};

export const setPlayerUnit = (unit: number): Action => {
  return {
    type: "PLAYER_UNIT",
    payload: unit,
  };
};

export const setComputerUnit = (unit: number): Action => {
  return {
    type: "COMPUTER_UNIT",
    payload: unit,
  };
};

export const nextRound = (): Action => {
  return {
    type: "NEXT_ROUND",
    payload: 1,
  };
};

export const updateScore = (result: number): Action => {
  return {
    type: "UPDATE_SCORE",
    payload: result,
  };
};

export const roundResult = (
  pUnit: IUnit | null,
  cUnit: IUnit | null,
  result: number
): Action => {
  return {
    type: "ROUND_RESULT",
    payload: {
      playersUnit: pUnit,
      computersUnit: cUnit,
      result: result,
    },
  };
};

export const restartGame = () => {
  return {
    type: "RESTART",
    payload: null,
  }
}
