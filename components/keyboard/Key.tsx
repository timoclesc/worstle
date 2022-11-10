import type { FunctionComponent } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import useGameStore from "../../state/game";
import useSettingsStore from "../../state/settings";

interface KeyProps {
  letter: string;
  guessed?: "incorrect" | "correct";
}

const Key: FunctionComponent<KeyProps> = ({ letter, guessed }) => {
  const { darkMode } = useSettingsStore();
  const { addToCurrentGuess, deleteFromCurrentGuess, currentGuess } =
    useGameStore();
  const large = letter === "enter" || letter === "bksp";
  const width = large ? "w-14" : "w-7";
  const textSize = letter === "enter" ? "text-sm" : "";

  const calcLetter =
    letter === "bksp" ? <IoBackspaceOutline size={24} /> : letter;

  const handleClick = () => {
    if (letter === "bksp") deleteFromCurrentGuess();
    else if (letter === "enter") console.log(currentGuess);
    else addToCurrentGuess(letter);
  };

  return (
    <button
      onClick={handleClick}
      className={`${width} ${textSize} rounded-sm font-mono uppercase font-bold h-14 flex justify-center items-center ${
        guessed
          ? guessed === "correct"
            ? "bg-green-500"
            : "bg-gray-800"
          : "bg-gray-500"
      }`}
    >
      {calcLetter}
    </button>
  );
};

export default Key;
