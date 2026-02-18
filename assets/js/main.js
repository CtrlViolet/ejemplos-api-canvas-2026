function drawRect() {
  const c = document.getElementById("canvas1");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#22c55e";
  ctx.fillRect(20, 20, 100, 80);
}

function drawCombined() {
  const c = document.getElementById("canvas2");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "pink";
  ctx.fillRect(20, 20, 120, 80);
  ctx.clearRect(50, 30, 40, 40);
  ctx.strokeRect(60, 40, 40, 40);
}

function drawShadow() {
  const c = document.getElementById("canvas3");
  const ctx = c.getContext("2d");
  ctx.shadowColor = "red";
  ctx.shadowBlur = 10;
  ctx.fillStyle = "blue";
  ctx.fillRect(30, 30, 100, 60);
}

function drawTriangle() {
  const c = document.getElementById("canvas4");
  const ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(90, 20);
  ctx.lineTo(30, 100);
  ctx.lineTo(150, 100);
  ctx.closePath();
  ctx.fillStyle = "orange";
  ctx.fill();
}

function drawFace() {
  const c = document.getElementById("canvas5");
  const ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(90, 60, 40, 0, Math.PI * 2);
  ctx.moveTo(110, 70);
  ctx.arc(90, 70, 20, 0, Math.PI);
  ctx.stroke();
}

function drawBezier() {
  const c = document.getElementById("canvas6");
  const ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(20, 80);
  ctx.bezierCurveTo(50, 10, 130, 10, 160, 80);
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", () => {
  drawRect();
  drawCombined();
  drawShadow();
  drawTriangle();
  drawFace();
  drawBezier();
});
