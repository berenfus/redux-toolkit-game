import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUnit } from "../types";

export interface IRoundState {
  computerUnit: IUnit | {};
  selectedUnit: IUnit | {};
  score: number;
  currentRound: number;
}

const initialState: IRoundState = {
  computerUnit: {},
  selectedUnit: {},
  score: 0,
  currentRound: 1
};

export const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setComputerUnit: (state, action: PayloadAction<IUnit>) => {
      state.computerUnit = action.payload;
    },
    setPlayerUnit: (state, action: PayloadAction<IUnit>) => {
      state.selectedUnit = action.payload;
    },
    setResults: (state, action: PayloadAction<-1 | 0 | 1>) => {
      state.score += action.payload;
      state.currentRound += 1;
    },
    setNewGame: state => {
      state.score = 0;
      state.currentRound = 1;
    }
  }
});

export const {
  setComputerUnit,
  setPlayerUnit,
  setResults,
  setNewGame
} = roundSlice.actions;

export default roundSlice.reducer;
