 const CentipedeSegment = require('./CentipedeSegment');

 const game = document.getElementById('game');
 const centipedeSegment = new CentipedeSegment(0, 0);
 const context = game.getContext('2d');

function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  centipedeSegment.move().draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
