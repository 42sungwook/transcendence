const canvas = document.getElementById("pongCanvas");
const context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

function drawGame(state) {
  // 배경
  context.fillStyle = "#eee";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 왼쪽 바
  context.fillStyle = "#000";
  context.fillRect(state.leftBar.x, state.leftBar.y, state.leftBar.width, state.leftBar.height);

  // 오른쪽 바
  context.fillStyle = "#000";
  context.fillRect(state.rightBar.x, state.rightBar.y, state.rightBar.width, state.rightBar.height);

  // 공
  context.fillStyle = "#000";
  context.beginPath();
  context.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
  context.fill();
}

// WebSocket 연결 및 게임 상태 업데이트
const socket = new WebSocket("ws://localhost:8000/ws/game/");

socket.onmessage = function (event) {
  const state = JSON.parse(event.data);
  drawGame(state);
};

// 서버에서 받은 게임 상태로 화면을 갱신합니다.
