import { iPiece } from "./Piece.controller";
import { iPosition } from "./Position.controller";

export const Board = (rows: number, columns: number) => {
  const create = () => {
    const board = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        board.push({ row: i, colum: j });
      }
    }

    return board;
  };

  const getColumns = () => {
    return columns;
  };
  const getRows = () => {
    return rows;
  };

  const positionExists = (row: number, column: number): boolean => {
    return row > 0 && row < rows && column >= 0 && column < columns;
  };
  const positionIsExists = (position: iPosition): boolean => {
    return positionExists(position.getRow(), position.getColumn());
  };

  const placePiece = (piece: iPiece, position: iPosition) => {
    if (thereIsAPiece(position)) {
      return "There is already a piece on position " + position;
    }

    piece.position = position;
  };

  const thereIsAPiece = (position: iPosition) => {
    if (!positionIsExists(position)) {
      return false;
    }
    return;
  };

  return { create, getColumns, getRows, positionIsExists, placePiece };
};
export type iBoard = {
  rows: number;
  columns: number;
  getRows?: () => number;
  getColumns?: () => number;
};
