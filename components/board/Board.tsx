import { FunctionComponent } from "react";
import { useAppSelector } from "../../state/hooks";
import Row from "./Row";

interface BoardProps {
  solution: string;
}

const Board: FunctionComponent<BoardProps> = ({ solution }) => {
  const game = useAppSelector((state) => state.game);

  const rows = game.boardState.map((letters, rowIndex) => ({
    letters,
    evaluation: game.evaluations[rowIndex],
  }));

  return (
    <div className="flex flex-col space-y-1">
      {rows.map(({ letters, evaluation }, index) => (
        <Row key={index} letters={letters} evaluation={evaluation} />
      ))}
    </div>
  );
};

export default Board;
