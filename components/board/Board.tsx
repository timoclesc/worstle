import type { FunctionComponent } from "react";
import LetterRow from "./LetterRow";

const allowedGuesses = 5;

interface BoardProps {}

const Board: FunctionComponent<BoardProps> = () => {
  return (
    <div className="flex flex-col space-y-2">
      {Array.from(Array(allowedGuesses).keys()).map((guessNumber) => (
        <LetterRow key={guessNumber} />
      ))}
    </div>
  );
};

export default Board;
