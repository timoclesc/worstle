import create from "zustand";

const maxLetters = 5;

interface GameState {
  currentGuess: string;
  addToCurrentGuess: (letter: string) => void;
  deleteFromCurrentGuess: () => void;
}

const useGameStore = create<GameState>((set) => ({
  currentGuess: "",
  addToCurrentGuess: (letter: string) =>
    set((state) => {
      let guess = state.currentGuess;
      if (state.currentGuess.length < maxLetters) guess += letter;
      return { ...state, currentGuess: guess };
    }),
  deleteFromCurrentGuess: () =>
    set((state) => {
      let guess = state.currentGuess;
      if (guess.length > 0) guess = guess.slice(0, -1);
      return { ...state, currentGuess: guess };
    }),
}));

export default useGameStore;
