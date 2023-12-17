import { iBoard } from "../boardgame/Board.controller";
import { iPosition } from "../boardgame/Position.controller";
import { ChessPosition } from "./ChessPosition.controller";
import { Color } from "./Color.controller";

export const ChessePieceController = (
  board: iBoard,
  color: Color,
  position: iPosition
) => {
  let moveCount: number = 0;
  const getColor = () => {
    return color;
  };
  const getMoveCount = (): number => {
    return moveCount;
  };
  const increaseMoveCount = (): void => {
    moveCount++;
  };
  const decreaseMoveCount = (): void => {
    moveCount--;
  };

  const getChessPosition = () => {
    return ChessPosition(position.column, position.row).fromPosition(position);
  };

  return {
    getColor,
    getMoveCount,
    decreaseMoveCount,
    increaseMoveCount,
    getChessPosition,
  };
};
