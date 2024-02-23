'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;

function clickCheck() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⚠️ Please, insert a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct! 🎉';
    document.querySelector('.message').style.fontSize = '4rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = '⚠️ Invalid number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high number!';
    scoreValue--;
    document.querySelector('.score').textContent = scoreValue;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low number!';
    scoreValue--;
    document.querySelector('.score').textContent = scoreValue;
  }

  gameOver();
}

function clickAgain() {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;

  document.querySelector('.score').textContent = scoreValue;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').style.fontSize = '2rem';
  if (!guess) {
    document.querySelector('.message').textContent =
      '⚠️ Please, insert a number!';
  }
}

function gameOver() {
  if (scoreValue === 0) {
    document.querySelector('.message').textContent = '💥 GAME OVER!!! 💥';
    document.querySelector('body').style.backgroundColor = 'rgb(255, 40, 40)';
  } else if (scoreValue < 0) {
    clickAgain();
  }
}
