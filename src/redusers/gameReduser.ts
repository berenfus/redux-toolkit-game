import { Reducer } from "redux";
import { Action } from "../actions/gameActions";
import roundJSON from "../rounds.json";
import unitsJSON from "../units.json";

const MAX_ROUNDS = roundJSON.rounds;
const UNITS = unitsJSON.units;

const PREFERED_UNIT = Math.floor(Math.random() * UNITS.length);

export interface IUnit {
  unitName: string;
  defeats: string;
  defeatedBy: string;
}

export interface IRoundResults {
  playersUnit: IUnit | null;
  computersUnit: IUnit | null;

  currentRound: number;
  result: number;
}

export interface IGameState {
  maxRounds: number;
  unitList: IUnit[];

  currentRound: number;
  currentScore: number;

  roundResult: null | IRoundResults;

  playersUnit: IUnit | null;
  computersFavior: number;
  computersUnit: IUnit | null;

  game: boolean;
}

const initialState: IGameState = {
  maxRounds: MAX_ROUNDS,
  unitList: UNITS,

  currentRound: 0,
  currentScore: 0,

  roundResult: null,

  playersUnit: null,
  computersFavior: PREFERED_UNIT,
  computersUnit: null,
  game: false,
};

export const gameReduser: Reducer<IGameState, Action> = (
  state: IGameState = initialState,
  action: Action
): IGameState => {
  switch (action.type) {
    case "START_GAME": {
      return { ...state, game: action.payload };
    }
    case "END_GAME": {
      return {
        ...state,
        currentRound: 0,
        currentScore: 0,
        roundResult: null,
        game: action.payload,
      };
    }
    case "PLAYER_UNIT": {
      return { ...state, playersUnit: state.unitList[action.payload] };
    }
    case "COMPUTER_UNIT": {
      return { ...state, computersUnit: state.unitList[action.payload] };
    }
    case "NEXT_ROUND": {
      return { ...state, currentRound: state.currentRound + action.payload };
    }
    case "UPDATE_SCORE": {
      return { ...state, currentScore: state.currentScore + action.payload };
    }
    case "ROUND_RESULT": {
      return {
        ...state,
        roundResult: {
          playersUnit: action.payload.playersUnit,
          computersUnit: action.payload.computersUnit,
          currentRound: state.currentRound,
          result: action.payload.result,
        },
      };
    }
    case "RESTART": {
      return {
        ...state,
        currentScore: 0,
        currentRound: 1,
        roundResult: action.payload,
      };
    }
    default:
      return state;
  }
};
