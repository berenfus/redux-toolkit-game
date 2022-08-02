import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILastRoundResult {
  playerUnitName: string;
  computerUnitName: string;
  result: -1 | 0 | 1;
  round: number;
}

const initialState: ILastRoundResult = {
  playerUnitName: "",
  computerUnitName: "",
  result: 0,
  round: 0
};

export const lastRoundSlice = createSlice({
  name: "lastRound",
  initialState,
  reducers: {
    writeRoundResults: (state, action: PayloadAction<ILastRoundResult>) => {
      Object.assign(state, action.payload);
    },
    setDefaultLastRound: () => initialState
  }
});

export const {
  writeRoundResults,
  setDefaultLastRound
} = lastRoundSlice.actions;

export default lastRoundSlice.reducer;
