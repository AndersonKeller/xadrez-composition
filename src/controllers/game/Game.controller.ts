import { Board } from "../boardgame/Board.controller";

export const Game = () => {
  const init = () => {
    const board = Board(8, 8);
    board.create();

    return board;
  };

  return { init };
};
