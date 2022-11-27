import { z } from "zod";
import { gameState } from "../types";

const key = "next-wordle-clone-state";

export function loadState() {
  const serializedState = localStorage.getItem(key);
  if (!serializedState) return null;
  try {
    const state = gameState.parse(JSON.parse(serializedState));
    return state;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function saveState(state: z.infer<typeof gameState>) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(key, serializedState);
}
