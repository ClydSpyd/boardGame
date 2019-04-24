var canvasX=document.getElementById('canvasX');
var canvasY=document.getElementById('canvasY');
var xcanHeight=200;
var xcanWidth=200;

var x=0;
var y=0;

var x_srcX;
var x_srcY;

var x_sheetWidth=1800;
var x_sheetheight=200;

var x_cols=9;

var x_width=200;
var x_height=200;

var x_currentFrame=0;
var x_frameCount=0;

var xsheet = new Image();
xsheet.src ='xplsn.png';

canvasX.width=xcanWidth;
canvasX.height=xcanHeight;

var x_ctx=canvasX.getContext('2d');

canvasY.width=xcanWidth;
canvasY.height=xcanHeight;

var y_ctx=canvasY.getContext('2d');

function x_update() {
    x_ctx.clearRect(x, y, x_width, x_height)
    y_ctx.clearRect(x, y, x_width, x_height)

    x_currentFrame = x_currentFrame % x_cols;
    x_srcX = x_currentFrame * x_width;
    x_srcY = 0;

    x_currentFrame++
    x_frameCount++
}

function gogogo() {
    x_update();
    x_ctx.drawImage(xsheet, x_srcX, x_srcY, x_width, x_height, x, y, x_width, x_height);
    y_ctx.drawImage(xsheet, x_srcX, x_srcY, x_width, x_height, x, y, x_width, x_height);
    // console.log(x_frameCount)
}

setInterval(function () { 
    gogogo();
},100);