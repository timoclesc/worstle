import type { FunctionComponent } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

interface DarkModeButtonProps {
  darkMode: boolean;
  onClick: () => void;
}

const DarkModeButton: FunctionComponent<DarkModeButtonProps> = ({
  darkMode,
  onClick,
}) => {
  const icon = darkMode ? <FaRegSun size={28} /> : <FaRegMoon size={28} />;
  return <button onClick={onClick}>{icon}</button>;
};

export default DarkModeButton;
