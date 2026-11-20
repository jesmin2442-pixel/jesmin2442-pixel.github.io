/*
 * 신호 버튼 클릭 횟수 증가, 진행 표시, 3회 도달 안내 변경, 초기화를 처리한다.
 */

const gameContainer = document.querySelector('.game-container');
const actionButton = gameContainer.querySelector('.click-target');
const resetButton = gameContainer.querySelector('.reset-button');
const clickCountEl = gameContainer.querySelector('.click-count');
const gameStateEl = gameContainer.querySelector('.game-state');
const lastActionEl = gameContainer.querySelector('.last-action');
const progressFill = gameContainer.querySelector('.progress-fill');
const progressText = gameContainer.querySelector('.progress-text');
const gameMessage = gameContainer.querySelector('.game-message');
const choiceButtons = gameContainer.querySelectorAll('.choice-button');
const initialGameMessage = gameMessage.textContent;

let clickCount = 0;

function updateClickDisplay() {
  clickCountEl.textContent = String(clickCount);
  progressFill.style.width = `${Math.min(clickCount, 3) / 3 * 100}%`;
  progressText.textContent = `${Math.min(clickCount, 3)} / 3`;
  gameStateEl.textContent = clickCount > 0 ? 'ACTIVE' : 'READY';
}

actionButton.addEventListener('click', () => {
  clickCount += 1;
  updateClickDisplay();
  lastActionEl.textContent = `${clickCount}번째 신호를 보냈습니다.`;

  if (clickCount === 3) {
    gameMessage.textContent = '다음 단계가 열렸습니다';
    choiceButtons.forEach((button) => {
      button.disabled = false;
    });
  } else if (clickCount > 3) {
    gameMessage.textContent = '이미 다음 단계가 열렸습니다';
  }
});

resetButton.addEventListener('click', () => {
  clickCount = 0;
  updateClickDisplay();
  lastActionEl.textContent = '횟수가 초기화되었습니다.';
  gameMessage.textContent = initialGameMessage;
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });
});

updateClickDisplay();
