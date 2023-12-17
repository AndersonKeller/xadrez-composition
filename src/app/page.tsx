import { Game } from "@/controllers/game/Game.controller";
export default function Home() {
  const game = Game();
  const initial = game.init();

  console.log(initial);
  return (
    <main className="flex h-max max-w-sm flex-wrap m-auto w-full items-center justify-center"></main>
  );
}
