const Game = require('./Game.js');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const game = new Game();
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
        game.detectShooterMushroomCollision('left');
        break;
      case 39: //right
        game.moveShooter('right');
        game.detectShooterMushroomCollision('right');
        break;
      case 38:  //up
        game.moveShooter('up');
        game.detectShooterMushroomCollision('up');
        break;
      case 40: //down
        game.moveShooter('down');
        game.detectShooterMushroomCollision('down');
        break; 
    }
}

function fireBullets(event) {
  let shootAudio = new Audio('/audio/laser.wav');
  switch (event.keyCode) {
    case 32: //space
      game.shooter.shoot();
      shootAudio.play();
      break;
  }
}

function gameLoop() {
  if (pause === false) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.procedure(context);
  updateScore();
  updateLives();
  requestAnimationFrame(gameLoop);
  };
}

window.requestAnimationFrame(gameLoop);
