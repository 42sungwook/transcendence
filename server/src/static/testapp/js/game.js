// 엘리먼트 참조
const gameBoard = document.getElementById("game-board");
const leftPaddle = document.getElementById("left-paddle");
const rightPaddle = document.getElementById("right-paddle");
const ball = document.getElementById("ball");

// 게임 변수

const boardWidth = gameBoard.offsetWidth;
const boardHeight = gameBoard.offsetHeight;
const paddleHeight = leftPaddle.offsetHeight;
const ballRadius = ball.offsetWidth / 2;
let ballX = boardWidth / 2;
let ballY = boardHeight / 2;
let ballSpeedX = 3;
let ballSpeedY = 3;
let leftPaddleY = boardHeight / 2 - paddleHeight / 2;
let rightPaddleY = boardHeight / 2 - paddleHeight / 2;
let paddleSpeed = 10;

// 패들 이동 함수

function resetBallPosition() {
  ballX = boardWidth / 2;
  ballY = boardHeight / 2;
  ballSpeedX = -ballSpeedX; // 반대 방향으로 이동
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (leftPaddleY > 0) {
        leftPaddleY -= paddleSpeed;
        leftPaddle.style.top = `${leftPaddleY}px`;
      }
      break;
    case "ArrowDown":
      if (leftPaddleY < boardHeight - paddleHeight) {
        leftPaddleY += paddleSpeed;
        leftPaddle.style.top = `${leftPaddleY}px`;
      }
      break;
    case "w":
      if (rightPaddleY > 0) {
        rightPaddleY -= paddleSpeed;
        rightPaddle.style.top = `${rightPaddleY}px`;
      }
      break;
    case "s":
      if (rightPaddleY < boardHeight - paddleHeight) {
        rightPaddleY += paddleSpeed;
        rightPaddle.style.top = `${rightPaddleY}px`;
      }
      break;
  }
});

// 공 움직임 함수
function moveBall() {
  // 공의 위치 업데이트
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // 벽과 충돌 감지 및 반사
  if (ballY <= 0 || ballY >= boardHeight - ballRadius) {
    ballSpeedY = -ballSpeedY;
  }

  // 패들과 충돌 감지 및 반사
  if (ballX <= ballRadius + 10 && ballY >= leftPaddleY && ballY <= leftPaddleY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
  } else if (ballX >= boardWidth - ballRadius - 10 && ballY >= rightPaddleY && ballY <= rightPaddleY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
  } else if (ballX <= 0 || ballX >= boardWidth) {
    // 공이 게임보드를 벗어났을 경우
    resetBallPosition();
  }

  // 공의 위치 업데이트
  ball.style.left = `${ballX - ballRadius}px`;
  ball.style.top = `${ballY - ballRadius}px`;

  requestAnimationFrame(moveBall);
}

moveBall();
