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
var sheetDemonDeath = new Image();
sheetDemonDeath.src = 'assets/demonFalling.png';
var demonFalling = new Image();
demonFalling.src = 'assets/demonFalling.png';
var sheetDemonHurt = new Image();
sheetDemonHurt.src = 'assets/demonHurt.png';
var sheetDemonAttack = new Image();
sheetDemonAttack.src = 'assets/demonAttack.png';
var sheetDemonJumpAttack = new Image();
sheetDemonJumpAttack.src = 'assets/demonJumpAttack.png';


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
if(demonSheet==sheetDemonDeath && c_frameCount==15){
    demonSheet=demonIdle;
    c_cols = 18;
    clearInterval(draw2)
} else if(demonSheet==sheetDemonHurt && c_frameCount==12){
    demonSheet=demonIdle;
    c_cols = 18;
}else if(demonSheet==sheetDemonAttack && c_frameCount==12){
    demonSheet=demonIdle;
    c_cols = 18;
}else if(demonSheet==sheetDemonJumpAttack && c_frameCount==12){
    demonSheet=demonIdle;
    c_cols = 18;
} else if(demonSheet==demonFalling && c_frameCount==15){
    demonSheet=demonIdle;
    c_cols = 18;
} 
}


var twoAttack = function(){
    var choice2= Math.floor(Math.random()*2);
    switch(choice2){
        case 1:
        demonAttack();
        break;
        case 0:
        demonJumpAttack();
        break;
    }
}

var twoHurtSound = function(){
    var audio1Choice= Math.floor(Math.random()*2);
    var demonHurtSound = new Audio('assets/sounds/demonHurtSound.mp3')
    demonHurtSound.volume=0.7;
    var demonHurtSound2 = new Audio('assets/sounds/demonHurtSound2.mp3')
    demonHurtSound2.volume=0.7;
    switch(audio1Choice){
        case 1:
        demonHurtSound.play();
        break;
        case 0:
        demonHurtSound2.play();
        break;
    }
}

var demonAttack = function (){
    c_currentFrame=0;
    c_frameCount = 0;
    c_cols=12;
    demonSheet=sheetDemonAttack;
}

var demonJumpAttack = function (){
    c_currentFrame=0;
    c_frameCount = 0;
    c_cols=12;
    demonSheet=sheetDemonJumpAttack;
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

// setInterval(function(){
//     c_draw();
// }, 60);
var draw2 = setInterval(c_draw,70)

var demonDeath = function(){
    c_currentFrame=0;
    c_frameCount = 0;
    c_cols=15;
    demonSheet=sheetDemonDeath;
    document.getElementById('death').classList.remove('hide');
    document.getElementById('death').classList.add('death');
    setTimeout(function(){
        victory.play();
    },1200)
    setTimeout(function(){
        
        var angelWinIMG = document.createElement('img');
        document.getElementById('deathInner').prepend(angelWinIMG)
        angelWinIMG.classList.add('deathIMGstart2');

        setTimeout(function(){
            angelWinIMG.classList.add('deathIMGgo');
            angelWinIMG.classList.add('deathIMGgo2');
            $('#deetz1').fadeOut();
            $('#deetz2').fadeOut();
        },10)

        setTimeout(function(){
            angelWinIMG.classList.remove('deathIMGgo2');
        },400)
        
        
        setInterval(function(){
            angelWinIMG.classList.add('deathIMGgo2');
            setTimeout(function(){
                angelWinIMG.classList.remove('deathIMGgo2');
            },400)
        },800)
        setTimeout(function(){
            battleAudio.pause();
            // fanfare.play();
        })
    },1600)
}



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

   