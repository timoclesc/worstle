import type { FunctionComponent } from "react";
import { Evaluation, EvaluationColor } from "../../app/evaluation";

interface TileProps {
  letter?: string;
  evaluation?: Evaluation;
  flipDelay: number;
  onFlipEnd?: () => void;
}

const Tile: FunctionComponent<TileProps> = ({
  letter,
  evaluation,
  flipDelay,
  onFlipEnd,
}) => {
  let bgColor = "";
  let textColor = "";
  if (evaluation) {
    bgColor = EvaluationColor[evaluation];
    textColor = "text-white";
  }

  const onTransitionEnd = () => {
    if (onFlipEnd) onFlipEnd();
  };

  return (
    <div
      style={{
        transitionDelay: `${flipDelay}ms`,
        animationDelay: `${flipDelay}ms`,
      }}
      className={`w-16 h-16 border-gray-500 border-[1px] ${bgColor} ${textColor} ${
        evaluation && "flip"
      } font-bold text-3xl flex justify-center items-center uppercase transition-[background-color] duration-200`}
      onTransitionEnd={onTransitionEnd}
    >
      {letter}
    </div>
  );
};

export default Tile;
