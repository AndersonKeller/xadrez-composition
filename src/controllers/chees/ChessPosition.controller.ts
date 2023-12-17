import { Position, iPosition } from "../boardgame/Position.controller";

export const ChessPosition = (column: number, row: number) => {
  const getRow = () => {
    return row;
  };
  const getColumn = () => {
    return column;
  };
  const toPosition = () => {
    return Position(8 - row, +column - 8);
  };
  const fromPosition = (position: iPosition) => {
    return ChessPosition(position.getColumn(), position.getRow());
  };

  return {
    getColumn,
    getRow,
    toPosition,
    fromPosition,
  };
};
