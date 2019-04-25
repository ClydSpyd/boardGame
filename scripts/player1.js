var canvas = document.getElementById('canvas2');

var canWidth = 900;
var canHeight = 900;

var x = 0;
var y = 0;
   
var srcX;
var srcY;

var sheetWidth = 48600;
var sheetHeight = 1800;

var cols = 54;
var width = 900;
var height = 900;

var currentFrame = 0;
var frameCount = 0;

var sheetIdle = new Image();
sheetIdle.src = 'assets/1row.png';
var sheetAttack = new Image();
sheetAttack.src = 'assets/angelJumpAttack.png';
var sheetHurt = new Image();
sheetHurt.src = 'assets/angelHurt.png';


var sheet = sheetIdle;

canvas.width = canWidth;
canvas.height = canHeight;
var ctx = canvas.getContext('2d');

function update() {
    ctx.clearRect(x, y, width, height)

    currentFrame = currentFrame % cols;
    srcX = currentFrame * width;
    srcY = 0;

    currentFrame++
    frameCount++
}

function draw() {
    update();
    ctx.drawImage(sheet, srcX, srcY, width, height, x, y, width, height)
    if(sheet==sheetAttack && frameCount==12){
        sheet=sheetIdle;
        cols = 54;
    } else if(sheet==sheetHurt && frameCount==12){
        sheet=sheetIdle;
        cols = 54;
    }
}



var angelJumpAttack = function(){
    currentFrame=0;
    frameCount = 0;
    cols=12;
    sheet=sheetAttack;
 }
 var hurtOne = function(){
    currentFrame=0;
    frameCount = 0;
    cols=12;
    sheet=sheetHurt;
 }

 setInterval(function(){
    draw()
},70)