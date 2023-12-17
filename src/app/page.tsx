import { Game } from "@/controllers/game/Game.controller";
export default function Home() {
  const game = Game();
  const initial = game.init();
  console.log(initial);

  return (
    <main className="flex h-max max-w-sm flex-wrap m-auto w-full items-center justify-center">
      {initial.map((item) => {
        return (
          <div
            key={item.row}
            className={`${
              (item.row + item.colum) % 2 == 0 ? "bg-gray-50" : "bg-gray-700"
            } w-12 h-12 `}
          ></div>
        );
      })}
    </main>
  );
}
