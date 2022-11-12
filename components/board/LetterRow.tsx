import { FunctionComponent } from "react";
import { lastTileReveal } from "../../state/gameSlice";
import { useAppDispatch } from "../../state/hooks";
import { Evaluation } from "../../app/evaluation";
import LetterContainer from "./LetterContainer";

const maxLetters = 5;

interface LetterRowProps {
  letters: string;
  evaluation?: Evaluation[];
}

const LetterRow: FunctionComponent<LetterRowProps> = ({
  letters,
  evaluation,
}) => {
  const dispatch = useAppDispatch();
  let letterArray = Array.from(letters);
  const letterCount = letterArray.length;
  if (letterArray.length < maxLetters) {
    for (let i = 0; i < maxLetters - letterCount; i++) {
      letterArray.push("");
    }
  }

  return (
    <div className="flex space-x-1">
      {letterArray.map((letter, index) => {
        let onFlipEnd: (() => void) | undefined;
        if (index === letterArray.length - 1)
          onFlipEnd = () => {
            dispatch(lastTileReveal());
          };
        return (
          <LetterContainer
            key={index}
            letter={letter}
            flipDelay={index * 300}
            evaluation={evaluation?.at(index)}
            onFlipEnd={onFlipEnd}
          />
        );
      })}
    </div>
  );
};

export default LetterRow;
