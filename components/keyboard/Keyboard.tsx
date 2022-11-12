import type { FunctionComponent } from "react";
import Key from "./Key";
import { IoBackspaceOutline } from "react-icons/io5";

const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "bksp"],
];

interface KeyboardProps {
  onLetter: (letter: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
}

const Keyboard: FunctionComponent<KeyboardProps> = ({
  onLetter,
  onEnter,
  onBackspace,
}) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center pb-2 w-full px-4">
      {rows.map((row, idx) => (
        <div key={idx} className="flex space-x-2 w-full justify-center">
          {Array.from(row).map((letter) => {
            if (letter === "enter")
              return (
                <Key key={letter} onClick={onEnter} large>
                  Enter
                </Key>
              );
            else if (letter === "bksp")
              return (
                <Key key={letter} onClick={onBackspace} large>
                  <IoBackspaceOutline size={24} />
                </Key>
              );
            else
              return (
                <Key key={letter} onClick={() => onLetter(letter)}>
                  {letter}
                </Key>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
