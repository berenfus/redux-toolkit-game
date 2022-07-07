import { createStore } from "redux"
import { gameReduser } from "../redusers/gameReduser";

export const store = createStore(gameReduser);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch