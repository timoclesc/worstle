import type { FunctionComponent } from "react";
import Key from "./Key";

const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "bksp"],
];

interface KeyboardProps {}

const Keyboard: FunctionComponent<KeyboardProps> = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center pb-2 w-full px-4">
      {rows.map((row, idx) => (
        <div key={idx} className="flex space-x-2 w-full justify-center">
          {Array.from(row).map((letter) => (
            <Key key={letter} letter={letter} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
