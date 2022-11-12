import type { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { Evaluation, EvaluationColor } from "../../styles/evaluation";

interface LetterContainerProps {
  letter?: string;
  evaluation?: Evaluation;
  flipDelay: number;
  onFlipEnd?: () => void;
  darkMode?: boolean;
}

const LetterContainer: FunctionComponent<LetterContainerProps> = ({
  letter,
  evaluation,
  flipDelay,
  onFlipEnd,
  darkMode,
}) => {
  const [bgColor, setBgColor] = useState("");
  const [border, setBorder] = useState("border-[1px]");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (evaluation) {
      setTimeout(() => {
        setBgColor(EvaluationColor[evaluation]);
        setBorder("border-0");
        setTextColor("text-white");
        if (onFlipEnd) onFlipEnd();
      }, flipDelay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [evaluation]);

  return (
    <div
      className={`w-16 h-16 border-gray-500 ${bgColor} ${border} ${textColor} font-bold text-2xl flex justify-center items-center uppercase transition-colors duration-200`}
    >
      {letter}
    </div>
  );
};

export default LetterContainer;
