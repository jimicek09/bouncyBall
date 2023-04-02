var Canvas = document.getElementById("myCanvas");
console.log(Canvas)
var ctx = Canvas.getContext("2d")
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(1, 1, 720, 1600);
