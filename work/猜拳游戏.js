function getRandomComputerResult() {
  const options = ["石头", "布", "剪刀"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "石头" && computer === "剪刀") ||
    (player === "剪刀" && computer === "布") ||
    (player === "布" && computer === "石头")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `玩家胜出！ ${userOption} 胜 ${computerResult}`;
  } else if (computerResult === userOption) {
    return `这是平局！两人都选择了 ${userOption}`;
  } else {
    computerScore++;
    return `电脑胜出！ ${computerResult} 胜 ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "玩家" : "电脑"
    } 赢得比赛!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("石头");
});

paperBtn.addEventListener("click", function () {
  showResults("布");
});

scissorsBtn.addEventListener("click", function () {
  showResults("剪刀");
});
