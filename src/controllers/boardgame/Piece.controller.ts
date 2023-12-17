import { iPosition } from "./Position.controller";

export const Piece = ({ position }: iPiece) => {
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
export type iPiece = {
  position: iPosition;
};
