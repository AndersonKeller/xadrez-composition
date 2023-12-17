import { iBoard } from "./Board.controller";
import { iPosition } from "./Position.controller";

export const Piece = (board: iBoard, position: iPosition | null) => {
  const getBoard = () => {
    return board;
  };
  const possibleMoves = (row: number, column: number) => {
    // return board.columns;
  };
  const possibleMove = (position: iPosition): any => {
    return possibleMoves(position.row, position.column);
  };
  const isThereAnyPossibleMove = () => {
    // const {} = possibleMoves()
  };
  return {
    possibleMoves,
    possibleMove,
  };
};
