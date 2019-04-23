

////// PLAYER ONE //////

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

function update() {
    ctx.clearRect(x, y, widthB, heightB)

    currentFrameb = currentFrameb % colsB;
    srcX = currentFrameb * widthB;
    srcY = vert*heightB;

    currentFrameb++
    frameCount++
// console.log(frameCount)

}

////idle loop player 1////
function idleUpdate() {
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
// console.log(frameCount)

}

const func = idleUpdate

function draw() {
    func();
    ctx.drawImage(segundo, srcX, srcY, widthB, heightB, x, y, widthB, heightB);
}

///update interval///
var int=80

var jumpAttack = function () {
    segundo.src = 'attacc.png';
    frameCount=0
    currentFrameb=0;
    vert=0;
    colsB = 12;
    int=100;
    setTimeout(function () {
        segundo.src = 'tripleSprite.png';
        vert=1;
        currentFrameb=0;
        frameCount=0;
        colsB = 18;
    },900)
}

var hurtOne = function() {
    segundo.src = 'angelHurt.png';
    frameCount = 0
    currentFrameb = 0;
    vert = 0;
    colsB = 12;
    setTimeout(function () {
        int=100;
        segundo.src = 'tripleSprite.png';
        vert = 1;
        currentFrameb = 0;
        frameCount = 0;
        colsB = 18;
    }, 1000)
}

setInterval(function () {
    draw();
},int);