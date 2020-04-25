const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'sigh',
  'king',
  'airplane',
  'ball',
  'juice',
  'warlike',
  'steer',
  'silver',
];

let randomWord;
let score = 0;
let time = 10;

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time Ran Out</h1>
    <p>YOur Final Score : ${score}</p>
    <button onClick="location.reload()">Reload</button>
    `;
  endgameEl.style.display = 'flex';
  endgameEl.style.flexDirection = 'column';
}

addWordToDom();
text.addEventListener('input', (e) => {
  const typedText = e.target.value;
  if (typedText === randomWord) {
    addWordToDom();
    score++;
    scoreEl.innerHTML = score;
    e.target.value = '';
    if (difficultySelect.innerText === 'Hard') {
      time += 2;
    } else if (difficultySelect.innerText === 'Medium') {
      time += 3;
    } else {
      time += 5;
    }
    updateTime();
  }
});

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});
