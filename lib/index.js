const Game = require('./Game.js');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const game = new Game(context);
const startButton = document.querySelector('.start-button');
const score = document.querySelector('.score');
const lives = document.querySelector('.lives');
let pause = true;

document.addEventListener('keydown', moveShooter);
document.addEventListener('keyup', fireBullets);

startButton.addEventListener('click', startGame);


function updateScore() {
  score.innerText = ('score: ' + game.score);
}

function updateLives() {
  lives.innerText = ('lives: ' + game.lives);
  if (game.lives === 0) {
    pause = true;
    game.lives = 5;
    game.score = 0;
    startButton.removeAttribute('disabled');
  }
}

function startGame() {
  pause = !pause;
  game.initialize();
  gameLoop();
  startButton.setAttribute('disabled', true);
}

function moveShooter(event) {
  switch (event.keyCode) {
      case 37: //left
        game.moveShooter('left');
        break;
      case 39: //right
        game.moveShooter('right');
        break;
      case 38:  //up
        game.moveShooter('up');
        break;
      case 40: //down
        game.moveShooter('down');
        break; 
    }
}

function fireBullets(event) {
  switch (event.keyCode) {
      case 32: //space
        game.shooter.shoot();
        break;
    }
}

function gameLoop() {
  if (pause === false) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.procedure();
  updateScore();
  updateLives();
  requestAnimationFrame(gameLoop);
  };
}


window.requestAnimationFrame(gameLoop);
