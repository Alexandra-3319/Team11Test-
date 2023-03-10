import Cleaners from './CoinEarner.js';
import { GameLoop } from './GameLoop.js';

const game = new Cleaners(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
