var canvasX=document.getElementById('canvasX');
var canHeight=200;
var canWidth=200;

var x=0;
var y=0;

var srcX;
var srcY;

var sheetWidth=1800;
var sheetheight=200;

var cols=9;

var width=200;
var height=200;

var currentFrame=0;
var frameCount=0;

var sheet = new Image();
sheet.src ='xplsn.png';

canvasX.width=canWidth;
canvasX.height=canHeight;

var ctx=canvasX.getContext('2d');

function x_update() {
    ctx.clearRect(x, y, width, height)

    currentFrame = currentFrame % cols;
    srcX = currentFrame * width;
    srcY = 0;

    currentFrame++
    frameCount++
}

function gogogo() {
    x_update();
    ctx.drawImage(sheet, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function () { 
    gogogo();
},100);