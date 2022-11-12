import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const maxLetters = 5;

interface GameState {
  solution: string;
  boardState: string[];
  currentRowIndex: number;
  status: "IN_PROGRESS" | "FAIL" | "WIN" | "EVALUATE_IN_PROGRESS";
}

const initialState: GameState = {
  solution: "",
  boardState: ["", "", "", "", "", ""],
  currentRowIndex: 0,
  status: "IN_PROGRESS",
};

export const gameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    setSolution: (state, action: PayloadAction<string>) => {
      state.solution = action.payload;
    },
    addLetter: (state, action: PayloadAction<string>) => {
      if (state.status !== "IN_PROGRESS") return;
      if (state.boardState[state.currentRowIndex].length === maxLetters) return;

      const letter = action.payload;
      state.boardState[state.currentRowIndex] += letter;
    },
    removeLetter: (state) => {
      if (state.status !== "IN_PROGRESS") return;
      if (!state.boardState[state.currentRowIndex].length) return;

      state.boardState[state.currentRowIndex] = state.boardState[
        state.currentRowIndex
      ].slice(0, -1);
    },
    evaluateRow: (state) => {
      if (
        state.boardState[state.currentRowIndex].length < 5 ||
        state.status !== "IN_PROGRESS"
      )
        return;

      state.status = "EVALUATE_IN_PROGRESS";
      state.currentRowIndex++;
    },
    lastTileReveal: (state) => {
      const guess = state.boardState[state.currentRowIndex - 1];
      if (guess === state.solution) state.status = "WIN";
      else if (state.currentRowIndex === state.boardState.length)
        state.status = "FAIL";
      else state.status = "IN_PROGRESS";
    },
  },
});

export const {
  setSolution,
  addLetter,
  removeLetter,
  evaluateRow,
  lastTileReveal,
} = gameSlice.actions;
export default gameSlice.reducer;
