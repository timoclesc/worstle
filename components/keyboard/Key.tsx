import type { FunctionComponent } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import useSettingsStore from "../../state/settings";

interface KeyProps {
  letter: string;
  guessed?: "incorrect" | "correct";
}

const Key: FunctionComponent<KeyProps> = ({ letter, guessed }) => {
  const { darkMode } = useSettingsStore();
  const large = letter === "enter" || letter === "bksp";
  const width = large ? "w-14" : "w-7";
  const textSize = letter === "enter" ? "text-sm" : "";

  const calcLetter =
    letter === "bksp" ? <IoBackspaceOutline size={24} /> : letter;
  return (
    <div
      className={`${width} ${textSize} rounded-sm font-mono uppercase font-bold h-14 flex justify-center items-center ${
        guessed
          ? guessed === "correct"
            ? "bg-green-500"
            : "bg-gray-800"
          : "bg-gray-500"
      }`}
    >
      {calcLetter}
    </div>
  );
};

export default Key;
