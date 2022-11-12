import { FunctionComponent, useState } from "react";
import Key from "./Key";
import { IoBackspaceOutline } from "react-icons/io5";
import { Evaluation } from "../../app/evaluation";
import { useAppSelector } from "../../state/hooks";

const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
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
  const game = useAppSelector((state) => state.game);

  return (
    <div className="flex flex-col space-y-2 justify-center items-center pb-2 w-full px-2">
      {rows.map((row, idx) => (
        <div key={idx} className="flex space-x-2 w-full justify-center">
          {Array.from(row).map((letter, letterIdx) => {
            if (letter === "enter")
              return (
                <Key key={letterIdx} onClick={onEnter} large>
                  Enter
                </Key>
              );
            else if (letter === "bksp")
              return (
                <Key key={letterIdx} onClick={onBackspace} large>
                  <IoBackspaceOutline size={24} />
                </Key>
              );
            else if (letter === "-")
              return <div key={letterIdx} className="w-2" />;
            else {
              return (
                <Key
                  key={letterIdx}
                  onClick={() => onLetter(letter)}
                  evaluation={game.letterStatus[letter]}
                >
                  {letter}
                </Key>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
