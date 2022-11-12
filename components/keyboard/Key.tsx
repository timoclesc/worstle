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
      className={`${width} ${bgColor} rounded-sm font-mono uppercase font-bold h-14 flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Key;
