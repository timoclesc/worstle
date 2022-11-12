export type Evaluation = "correct" | "present" | "absent";

type ColorFromEvaluation = { [key in Evaluation]: string };
export const EvaluationColor: ColorFromEvaluation = {
  correct: "bg-green-700",
  present: "bg-amber-500",
  absent: "bg-gray-800",
};
