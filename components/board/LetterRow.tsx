import type { FunctionComponent } from "react";
import LetterContainer from "./LetterContainer";

const allowedLetters = 5;

interface LetterRowProps {}

const LetterRow: FunctionComponent<LetterRowProps> = () => {
  return (
    <div className="flex space-x-2">
      {Array.from(Array(allowedLetters).keys()).map((letter, idx) => (
        <LetterContainer key={idx} />
      ))}
    </div>
  );
};

export default LetterRow;
