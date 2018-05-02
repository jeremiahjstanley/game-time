 const Centipede = require('./Centipede');

 const game = document.getElementById('game');
 const centipede = new Centipede(0, 0, 50, 20);
 const context = game.getContext('2d');

function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  centipede.move().draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
