var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

myCanvas.width = window.innerWidth*(80/100);
myCanvas.height = myCanvas.width*(55/100);

var mouse;

var cursorX = 0;
var cursorY = 0;

function update() {
    
}


var thingyX = 200;
var thingyY = 100;
var sizeX = 45;
var sizeY = 150;

var distScale = 2;

function draw() {
    context.fillStyle = "gray";
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);

    var backposX = sizeX/distScale;
    var backposY = sizeY/distScale;

    if (cursorX > thingyX) {
    
    
        // left side
        context.fillStyle = "green";
        context.beginPath();
        context.moveTo(thingyX, thingyY);
        context.lineTo(cursorX, cursorY);
        context.lineTo(cursorX, cursorY+sizeY);
        context.lineTo(thingyX, thingyY+sizeY);
        context.closePath();
        context.fill();
    }
    if (cursorX < thingyX) {
        // right side
        context.fillStyle = "purple";
        context.beginPath()
        context.moveTo(thingyX+sizeX, thingyY);
        //context.lineTo(cursorX, 50);
        context.lineTo(cursorX+sizeX, cursorY);
        context.lineTo(cursorX+sizeX, cursorY+sizeY);
        context.lineTo(thingyX+sizeX, thingyY+sizeY);
        context.closePath();
        context.fill();
    }

    if (cursorY > thingyY) {
        // top
        context.fillStyle = "red";
        context.beginPath()
        context.moveTo(thingyX, thingyY);
        //context.lineTo(cursorX, 50);
        context.lineTo(cursorX, cursorY);
        context.lineTo(cursorX+sizeX, cursorY);
        context.lineTo(thingyX+sizeX, thingyY);
        context.closePath();
        context.fill();
        //context.fillRect(50, 50, cursorX, cursorY);
    }
    
    if (cursorY < thingyY){

        // bottom
        context.fillStyle = "blue";
        context.beginPath()
        context.moveTo(thingyX, thingyY+sizeY);
        context.lineTo(cursorX, cursorY+sizeY);
        context.lineTo(cursorX+sizeX, cursorY+sizeY);
        context.lineTo(thingyX+sizeX, thingyY+sizeY);
        context.closePath();
        context.fill();
    }
    




    context.fillStyle = "yellow";
    context.fillRect(cursorX, cursorY, sizeX, sizeY);
}



var FPS = 60;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

document.onmousemove = function(e){
    var rect = myCanvas.getBoundingClientRect();
    cursorX = e.pageX - rect.left;
    cursorY = e.pageY - rect.top;
}