var canvas3=document.getElementById('canvas3');

var c_canWidth = 900;
var c_canHeight = 900;

var c_x = 0;
var c_y = 0;

var c_srcX = 0;
var c_srcY = 0;

var c_sheetWidth = 16200;
var c_sheetHeight = 900;

var c_cols =18;
var c_width= 900;
var c_height= 900;

var c_currentFrame=0;
var c_frameCount=0;

var demonIdle = new Image();
demonIdle.src = 'assets/demonIdle.png';
var demonFalling = new Image();
demonFalling.src = 'assets/demonFalling.png';
var sheetDemonHurt = new Image();
sheetDemonHurt.src = 'assets/demonHurt.png';


var demonSheet = demonIdle;

canvas3.height=c_canHeight;
canvas3.width=c_canWidth;
var c_ctx=canvas3.getContext('2d');

function c_update(){
    c_ctx.clearRect(x, y, c_width, c_height)

    c_currentFrame=c_currentFrame%c_cols;
    c_srcX=c_currentFrame*c_width;
    c_srcY=0;

    c_currentFrame++
    c_frameCount++
}

function c_draw(){
c_update();
c_ctx.drawImage(demonSheet, c_srcX, c_srcY, c_width, c_height, x, y, c_width, c_height);
if(demonSheet==demonFalling && c_frameCount==15){
    demonSheet=demonIdle;
    c_cols = 18;
} else if(demonSheet==sheetDemonHurt && c_frameCount==12){
    demonSheet=demonIdle;
    c_cols = 18;
}
}


var demonFall = function(){
    c_currentFrame=0;
    c_frameCount = 0;
    c_cols=15;
    demonSheet=demonFalling;
}

var demonHurt = function(){
    c_currentFrame=0;
    c_frameCount = 0;
    c_cols=12;
    demonSheet=sheetDemonHurt;
}

setInterval(function(){
    c_draw();
}, 60);






    // function demonIdle(){
    //     cSprite.src = 'assets/demon/idle.png';
    //     c_currentFrame=0;
    //     c_frameCount=0;
    //     c_cols=18
    //     var interval = setInterval(function(){
    //         c_draw();
    //         document.getElementById('canvas3').classList.remove('canvas3bg');
    //         if(c_frameCount==19){
    //             c_currentFrame=0;
    //             c_frameCount=0;
    //         clearInterval(interval)
    //     }
    //     return
    //     }, 100);
    // }




    // var demonFall = function() {
    //     cSprite.src='assets/demon/demonFalling.png'
    //     c_frameCount = 0
    //     c_currentFrame = 0;
    //     c_cols = 15;
    //     setTimeout(function () {
    //         c_cols=18;
    //         c_currentFrame=0;
    //         c_frameCount=0;
    //         cSprite.src = 'assets/demon/idle.png';
    //     }, 1100)
    // }

    // var demonHurt = function() {
    //     cSprite.src='assets/demon/demonHurt.png'
    //     c_frameCount = 0
    //     c_currentFrame = 0;
    //     c_cols = 12;
    //     setTimeout(function () {
    //         c_cols=18;
    //         c_currentFrame=0;
    //         c_frameCount=0;
    //         cSprite.src = 'assets/demon/idle.png';
    //     }, 1000)
    // }

    // var demoFall = function(){
        
    //     c_currentFrame=0;
    //     c_frameCount=0;
    //     c_cols=15
    //     cSprite.src='assets/demon/demonFalling.png'
        
    //    var interval= setInterval(function(){ 
    //         if(c_frameCount==15){
    //         clearInterval(interval)
    //         // document.getElementById('canvas3').classList.add('canvas3bg')
    //         c_cols=18;
    //         c_currentFrame=0;
    //         c_frameCount=0;
    //         cSprite.src = 'assets/demon/idle.png';
    //         }
    //     c_draw();
    //     },60);
       
    // }


    // $('#flo').on('click', function(){
    //     console.log('hola')
    //     demonFall()
    // })

   