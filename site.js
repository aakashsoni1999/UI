var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
window.onload = function () {
    var img = new Image(500, 500);
    img.src = "../../photo2.jpg";
    ctx.drawImage(img,0,0);
}
var cnt = 0;
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return [x, y];
}
function handleup(e) {
    var values = getMousePosition(c, e);
    x2 = values[0];
    y2 = values[1];
    console.log("x=" + x2 + " y=" + y2);
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
function handledown(e)
{
    var values = getMousePosition(c, e);
    x1 = values[0];
    y1 = values[1];
    console.log("x=" + x1 + " y=" + y1);
    document.getElementById("mycanvas").addEventListener("mouseup",handleup)
}
document.getElementById("mybtn").addEventListener("click", function () {
    cnt = cnt + 1;
    console.log("cnt="+cnt);
    if (cnt % 2 == 1) {
        document.getElementById("mycanvas").addEventListener("mousedown",handledown)
    }
    else {
        document.getElementById("mycanvas").removeEventListener("mouseup",handleup)
        document.getElementById("mycanvas").removeEventListener("mousedown",handledown)
    }
})