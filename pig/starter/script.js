'use strict';

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // starting conditions
// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');

//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
// };

// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   currentScore = 0;
//   // toggle usuwa jak jest oraz dodaje jak nie ma
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
// };

// // rolling dice functionality

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // generate a random number
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // check for rolled 1
//     if (dice !== 1) {
//       // add dice to current score
//       currentScore += dice;
//       // przypisuje dla takiego ktory aktualnie jest aktywny, a aktywny jest 0
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // switch to the next player

//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player-active');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

////////////
/////////////
/////////////
/////////////

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// const current0 = document.getElementById('current--0');
// const current1 = document.getElementById('current--1');
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   diceEl.classList.add('hidden');
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
//   document.getElementById(`score--0`).textContent = 0;
//   document.getElementById(`score--1`).textContent = 0;
//   document.getElementById(`current--0`).textContent = 0;
//   document.getElementById(`current--1`).textContent = 0;
// };

// init();

// const switchPlayer = function () {
//   // wyzerowanie aktualnej wartosci
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   // zmiana gracza na przeciwnego
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   // zmiana na 0 rozpoczynajaca ture
//   currentScore = 0;
//   // zmieni active player'a / tło
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       // wybiera nam gracza ktory rzuca
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 100) {
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add(`player--winner`);
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove(`player--active`);
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

///////////////////////////////
//////////////////////////////
////////////// 01.05
//////////////////////////////
//////////////////////////////
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  currentScore = 0;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  activePlayer = 0;
  playing = true;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // checking if it is 1 and switching player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add currentscore to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if total = 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // finish
    // switch player
  }
});

btnNew.addEventListener('click', init);


/////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('no number! write some number and guess!');
    // document.querySelector('.message').textContent =
    //   'no number! write some number and guess!';
  } else if (guess === secretNumber) {
    displayMessage('correct number!');
    // document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high!' : 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
      // document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }