import create from "zustand"

const maxLetters = 5;

interface GameState {
    currentGuess: string,
    addToCurrentGuess: (letter: string) => void,
    deleteFromCurrentGuess: () => void,
}

const useGameStore = create<GameState>((set) => ({
    currentGuess: "",
    addToCurrentGuess: (letter) => {
        if ()
    },
    deleteFromCurrentGuess: () => {}
}))