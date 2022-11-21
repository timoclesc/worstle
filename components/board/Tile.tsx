import { FunctionComponent, useEffect, useState } from "react";
import { Evaluation } from "../../app/evaluation";

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

  let borderColor = "border-light-gray dark:border-dark-gray";
  if (letter) borderColor = "border-[#878A8C] dark:border-[#565758]";

  const onAnimationEnd = () => {
    if (onFlipEnd) onFlipEnd();
  };

  const [evalClass, setEvalClass] = useState("not-evaluated");
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (evaluation) {
      timeout = setTimeout(() => {
        setEvalClass("evaluated");
      }, flipDelay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [evaluation]);

  return (
    <>
      <div
        className={`tile ${evalClass} uppercase text-[32px] font-bold`}
        onTransitionEnd={onAnimationEnd}
      >
        <div className="tile-inner">
          <div
            className={`tile-front flex items-center justify-center w-[58px] h-[58px] border-2 ${borderColor} text-black dark:text-white`}
          >
            {letter}
          </div>
          <div
            className={`tile-back flex items-center justify-center w-[62px] h-[62px] ${bgColor} text-white`}
            onAnimationEnd={onAnimationEnd}
          >
            {letter}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tile;
