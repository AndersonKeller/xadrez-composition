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

  return { create, getColumns, getRows, positionIsExists };
};
export type iBoard = {
  rows: number;
  columns: number;
  getRows: () => number;
  getColumns: () => number;
};
