

////// PLAYER TWO MAIN IMAGE //////

var canvas2 = document.getElementById('canvas2');
var canWidthb = 900;
var canHeightb = 900;

//frame drawn position
var x = 0;
var y = 0;

//sheet coords    
var srcX;
var srcY;
var vert=1;

var sheetWidth = 16200;
var sheetHeight = 1800;

var colsB = 18;
var rows = 0;
var widthB = 900;
var heightB = 900;

var currentFrameb = 1;
var frameCount=0;

var segundo = new Image();
segundo.src = 'tripleSprite.png';


canvas2.width = canWidthb;
canvas2.height = canHeightb;
var ctx = canvas2.getContext('2d');


////idle loop player 1////
function update() {
    ctx.clearRect(x, y, widthB, heightB)

    if (frameCount == 36) {
        vert=0;
    }
    if (frameCount == 55) {
        vert = 1;
    }
    if (frameCount == 108) {
        vert = 0;
    } 
    if (frameCount == 126) {
        vert = 1;
        frameCount = 0;
    }

    currentFrameb = currentFrameb % colsB;
    srcX = currentFrameb * widthB;
    srcY = vert*heightB;

    currentFrameb++
    frameCount++
console.log(frameCount)

}

function draw() {
    update();
    ctx.drawImage(segundo, srcX, srcY, widthB, heightB, x, y, widthB, heightB);
}

setInterval(function () {
    draw();
}, 100);

var jumpAttack = function () {
    segundo.src = 'attacc.png';
    frameCount=0
    currentFrameb=0;
    vert=0;
    colsB = 12;
    setTimeout(function () {
        segundo.src = 'tripleSprite.png';
        vert=1;
        currentFrameb=0;
        frameCount=0;
        colsB = 18;
    },1400)
}

var hurtOne = function() {
    segundo.src = 'angelHurt.png';
    frameCount = 0
    currentFrameb = 0;
    vert = 0;
    colsB = 12;
    setTimeout(function () {
        segundo.src = 'tripleSprite.png';
        vert = 1;
        currentFrameb = 0;
        frameCount = 0;
        colsB = 18;
    }, 1250)
}

////// PLAYER TWO MAIN IMAGE //////

var canvas3=document.getElementById('canvas3');

var c_canWidth = 900;
var c_canHeight = 900;

var c_srcX = 0;
var c_srcY = 0;
var c_vert = 0;

var c_sheetWidth = 21600;
var c_sheetHeight = 900;

var c_cols =24 ;
var c_rows = 1;

var c_width= 900;
var c_height= 900;

var c_currentFrame=0;
var c_frameCount=0;

var cSprite = new Image();
cSprite.src = 'golem.png';

canvas3.height=c_canHeight;
canvas3.width=c_canWidth;
var c_ctx=canvas3.getContext('2d');

function c_update(){
    c_ctx.clearRect(x, y, c_width, c_height)

    c_currentFrame=c_currentFrame%c_cols;
    c_srcX=c_currentFrame*c_width;
    c_srcY=c_vert*c_height;

    c_currentFrame++
    c_frameCount++
}

function c_draw(){
c_update();
c_ctx.drawImage(cSprite, c_srcX, c_srcY, c_width, c_height, x, y, c_width, c_height);
}

setInterval(function(){
    c_draw();
}, 100);






    var c_jumpAttack = function(){
        c_frameCount=0
        c_currentFrame=0;
        c_vert=1;
        c_cols = 12;
        setTimeout(function(){
            c_vert=0;
            c_currentFrame=0;
            c_frameCount=0;
            c_cols = 18;
        },1400)
    }