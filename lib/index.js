const Centipede = require('./Centipede.js');
const GameComponents = require('./GameComponents.js')


const game = document.getElementById('game');
const centipede = new Centipede(0, 0);
const context = game.getContext('2d');

centipede.populateSegments();

function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  centipede.move().draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
