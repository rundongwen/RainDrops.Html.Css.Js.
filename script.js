var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

raindrops = [];

function gameLoop() {
  ctx.fillStyle = "white";
  ctx.rect(0, 0, c.width, c.height);
  ctx.fill();
}
