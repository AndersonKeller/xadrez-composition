export const Position = (row: number, column: number) => {
  const getRow = (): number => {
    return row;
  };
  const getColumn = (): number => {
    return column;
  };

  return { getColumn, getRow };
};
export type iPosition = {
  row: number;
  column: number;
  getRow: () => number;
  getColumn: () => number;
};
