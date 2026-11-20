// class11 Part 4의 선택 분기를 세 가지 맛의 누적 선택으로 확장한다.
// 선택한 맛은 한 번만 기록하며, 모두 선택하면 추천 문구를 표시한다.
(() => {
  const game = document.querySelector(".game-container");
  const sceneText = game.querySelector(".scene-text");
  const choiceButtons = game.querySelectorAll(".choice-group button");
  const recommendation = game.querySelector(".menu-recommendation");
  const resetButton = game.querySelector(".menu-reset-button");
  const initialMessage = sceneText.textContent;
  const selectedFlavors = new Set();

  // 제목을 누르면 선택 기록과 결과를 처음 상태로 되돌린다.
  resetButton.addEventListener("click", function () {
    selectedFlavors.clear();
    sceneText.textContent = initialMessage;
    recommendation.hidden = true;
  });

  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const flavor = button.textContent.trim();

      if (selectedFlavors.has(flavor)) {
        return;
      }

      selectedFlavors.add(flavor);
      sceneText.textContent = Array.from(
        selectedFlavors,
        (selectedFlavor) => `${selectedFlavor}을 선택했습니다`
      ).join(", ");

      recommendation.hidden = selectedFlavors.size < choiceButtons.length;
    });
  });
})();
