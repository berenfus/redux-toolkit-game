import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import roundReducer from "../features/roundSlice";
import lastRoundReducer from "../features/lastRoundSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    round: roundReducer,
    lastRound: lastRoundReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
