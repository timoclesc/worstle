import type { FunctionComponent, ReactNode } from "react";
import { Evaluation, EvaluationColor } from "../../styles/evaluation";

interface KeyProps {
  children?: ReactNode;
  onClick: () => void;
  large?: boolean;
  evaluation?: Evaluation;
}

const Key: FunctionComponent<KeyProps> = ({
  children,
  onClick,
  large,
  evaluation,
}) => {
  const width = large ? "w-16" : "w-11";
  let bgColor = "bg-gray-500";
  if (evaluation) bgColor = EvaluationColor[evaluation];

  return (
    <button
      onClick={onClick}
      className={`${width} ${bgColor} text-white rounded-sm font-mono uppercase font-bold h-14 flex justify-center items-center transition-colors duration-[1500ms]`}
    >
      {children}
    </button>
  );
};

export default Key;
