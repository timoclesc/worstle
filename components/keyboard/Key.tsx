import type { FunctionComponent, ReactNode } from "react";
import type { Evaluation } from "../../types";

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
  let bgColor = "bg-light-gray dark:bg-[#818384]";
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
  }

  let textColor = evaluation ? "text-white" : "text-black dark:text-white";

  let animateClass = Math.random() > 0.5  ? 'animate-drift-slow' : 'animate-drift-reverse';

  return (
    <button
      onClick={onClick}
      className={`${width} ${bgColor} ${textColor} ${animateClass} flex h-14 select-none items-center justify-center rounded fill-current text-[13.333px] font-bold uppercase`}
      style={{animationDelay: `${Math.floor(Math.random() * -3000)}ms`}}
    >
      {children}
    </button>
  );
};

export default Key;
