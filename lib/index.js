const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const GameComponents = require('./GameComponents.js')


const game = document.getElementById('game');
const centipede = new Centipede(0, 0);
const shooter = new Shooter(350, 690, 10, 'red')
const context = game.getContext('2d');

centipede.populateSegments();

function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  // shooter.draw(context);
  centipede.move().draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
