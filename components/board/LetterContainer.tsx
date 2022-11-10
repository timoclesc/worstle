import type { FunctionComponent } from "react";
import useSettingsStore from "../../state/settings";

interface LetterContainerProps {
  letter?: string;
}

const LetterContainer: FunctionComponent<LetterContainerProps> = ({
  letter,
}) => {
  const { darkMode } = useSettingsStore();
  return (
    <div
      className={`w-16 h-16 ${
        darkMode ? "border-white" : "border-gray-500"
      } border-2 font-bold text-2xl flex justify-center items-center`}
    ></div>
  );
};

export default LetterContainer;
