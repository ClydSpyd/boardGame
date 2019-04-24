

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
    sheetWidth = 18000;
    colsB = 12;
    int=100;
    setTimeout(function () {
        segundo.src = 'tripleSprite.png';
        vert=1;
        currentFrameb=0;
        frameCount=0;
        sheetWidth = 16200;
        colsB = 18;
    },900)
}

var hurtOne = function() {
    segundo.src = 'angelHurt.png';
    frameCount = 0
    currentFrameb = 0;
    sheetWidth = 18000;
    colsB = 12;
    setTimeout(function () {
        int=100;
        segundo.src = 'tripleSprite.png';
        vert = 1;
        currentFrameb = 0;
        sheetWidth = 16200;
        colsB = 18;
    }, 1000)
}

setInterval(function () {
    document.getElementById('canvas3').classList.remove('canvas3bg')
    draw();
},int);
////// PLAYER TWO MAIN IMAGE //////

var canvas3=document.getElementById('canvas3');

var c_canWidth = 900;
var c_canHeight = 900;

var c_srcX = 0;
var c_srcY = 0;
var c_vert = 0;

var c_sheetWidth = 16200;
var c_sheetHeight = 900;

var c_cols =18 ;
var c_rows = 1;

var c_width= 900;
var c_height= 900;

var c_currentFrame=0;
var c_frameCount=0;

var cSprite = new Image();
cSprite.src = 'assets/demon/idle.png';

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
    // console.log(c_frameCount)
}

function c_draw(){
c_update();
c_ctx.drawImage(cSprite, c_srcX, c_srcY, c_width, c_height, x, y, c_width, c_height);
}

setInterval(function(){
    c_draw();
    document.getElementById('canvas3').classList.remove('canvas3bg');
}, 70);






    function demonIdle(){
        cSprite.src = 'assets/demon/idle.png';
        c_currentFrame=0;
        c_frameCount=0;
        c_cols=18
        var interval = setInterval(function(){
            c_draw();
            document.getElementById('canvas3').classList.remove('canvas3bg');
            if(c_frameCount==19){
                c_currentFrame=0;
                c_frameCount=0;
            clearInterval(interval)
        }
        return
        }, 100);
    }




    var demonFall = function() {
        cSprite.src='assets/demon/demonFalling.png'
        c_frameCount = 0
        c_currentFrame = 0;
        c_cols = 15;
        setTimeout(function () {
            c_cols=18;
            c_currentFrame=0;
            c_frameCount=0;
            cSprite.src = 'assets/demon/idle.png';
        }, 1100)
    }

    var demonHurt = function() {
        cSprite.src='assets/demon/demonHurt.png'
        c_frameCount = 0
        c_currentFrame = 0;
        c_cols = 12;
        setTimeout(function () {
            c_cols=18;
            c_currentFrame=0;
            c_frameCount=0;
            cSprite.src = 'assets/demon/idle.png';
        }, 1000)
    }

    var demoFall = function(){
        
        c_currentFrame=0;
        c_frameCount=0;
        c_cols=15
        cSprite.src='assets/demon/demonFalling.png'
        
       var interval= setInterval(function(){ 
            if(c_frameCount==15){
            clearInterval(interval)
            // document.getElementById('canvas3').classList.add('canvas3bg')
            c_cols=18;
            c_currentFrame=0;
            c_frameCount=0;
            cSprite.src = 'assets/demon/idle.png';
            }
        c_draw();
        },60);
       
    }


    $('#flo').on('click', function(){
        console.log('hola')
        demonFall()
    })

   