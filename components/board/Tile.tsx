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
  let bgColor: string;
  switch (evaluation) {
    case "absent":
      bgColor = "bg-light-eval-absent dark:bg-dark-eval-absent";
      break;
    case "present":
      bgColor = "bg-light-eval-present dark:bg-dark-eval-present";
      break;
    case "correct":
      bgColor = "bg-light-eval-correct dark:bg-dark-eval-correct";
      break;
    default:
      bgColor = "";
  }

  let borderColor = "";
  if (evaluation) borderColor = "border-transparent";
  else if (letter) borderColor = "border-[#878A8C] dark:border-[#565758]";
  else borderColor = "border-light-gray dark:border-dark-gray";

  const textColor = evaluation ? "text-white" : "text-black dark:text-white";

  const onTransitionEnd = () => {
    if (onFlipEnd) onFlipEnd();
  };

  return (
    <div
      style={{
        transitionDelay: `${flipDelay}ms`,
        animationDelay: `${flipDelay}ms`,
      }}
      className={`w-[62px] h-[62.5px] md:w-16 md:h-16 ${borderColor} border-2 ${bgColor} ${textColor} ${
        evaluation && "flip"
      } font-bold text-[32px] select-none leading-8 flex justify-center items-center uppercase transition-[background-color] duration-200`}
      onTransitionEnd={onTransitionEnd}
    >
      {letter}
    </div>
  );
};

export default Tile;
