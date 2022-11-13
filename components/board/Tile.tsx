import type { FunctionComponent } from "react";
import { Evaluation, EvaluationColor } from "../../app/evaluation";

interface TileProps {
  letter?: string;
  evaluation?: Evaluation;
  flipDelay: number;
  onFlipEnd?: () => void;
  darkMode?: boolean;
}

const Tile: FunctionComponent<TileProps> = ({
  letter,
  evaluation,
  flipDelay,
  onFlipEnd,
  darkMode,
}) => {
  let bgColor = "";
  let border = "border-[1px]";
  let textColor = "";
  if (evaluation) {
    bgColor = EvaluationColor[evaluation];
    border = "border-0";
    textColor = "text-white";
  }

  const onTransitionEnd = () => {
    if (onFlipEnd) onFlipEnd();
  };

  return (
    <div
      style={{ transitionDelay: `${flipDelay}ms` }}
      className={`w-16 h-16 border-gray-500 ${bgColor} ${border} ${textColor} font-bold text-3xl flex justify-center items-center uppercase transition-[background-color] duration-200`}
      onTransitionEnd={onTransitionEnd}
    >
      {letter}
    </div>
  );
};

export default Tile;