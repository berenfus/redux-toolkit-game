import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roundsJSON from "../constants/rounds.json";
import unitsJSON from "../constants/units.json";
import { IUnit } from "../types";

export interface IGameState {
  maxRounds: number;
  unitsList: IUnit[];
  isGame: boolean;
  сomputerPreferences: number[];
}

const initialState: IGameState = {
  maxRounds: roundsJSON.rounds,
  unitsList: unitsJSON.units,
  isGame: false,
  сomputerPreferences: []
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<number[]>) => {
      state.isGame = true;
      state.сomputerPreferences = action.payload;
    },
    endGame: state => {
      state.isGame = false;
    }
  }
});

export const { startGame, endGame } = gameSlice.actions;

export default gameSlice.reducer;
