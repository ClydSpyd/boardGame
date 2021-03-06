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
var sheetAngelAttack = new Image();
sheetAngelAttack.src = 'assets/angelAttack.png';
var sheetJumpAttack = new Image();
sheetJumpAttack.src = 'assets/angelJumpAttack.png';
var sheetHurt = new Image();
sheetHurt.src = 'assets/angelHurt.png';
var sheetAngelFall = new Image();
sheetAngelFall.src = 'assets/angelFall.png';


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
    if(sheet==sheetJumpAttack && frameCount==12){
        sheet=sheetIdle;
        cols = 54;
    } else if(sheet==sheetHurt && frameCount==12){
        sheet=sheetIdle;
        cols = 54;
    } else if(sheet==sheetAngelAttack && frameCount==12){
        sheet=sheetIdle;
        cols = 54;
    }else if(sheet==sheetAngelFall && frameCount==15){
        clearInterval(draw1);
        sheet=sheetIdle;
        cols = 54;
    }
}

var oneAttack = function(){
    var choice= Math.floor(Math.random()*2);
    switch(choice){
        case 1:
        angelAttack();
        break;
        case 0:
        angelJumpAttack();
        break;
    }
}
var oneHurtSound = function(){
    var audio1Choice= Math.floor(Math.random()*2);
    var angelHurtSound = new Audio('assets/sounds/angelHurtSound.mp3')
    angelHurtSound.volume=0.5;
    var angelHurtSound2 = new Audio('assets/sounds/angelHurtSound2.mp3')
    angelHurtSound2.volume=1;
    switch(audio1Choice){
        case 1:
        angelHurtSound.play();
        break;
        case 0:
        angelHurtSound2.play();
        break;
    }
}

var angelAttack = function(){
    currentFrame=0;
    frameCount = 0;
    cols=12;
    sheet=sheetAngelAttack;
 }
var angelJumpAttack = function(){
    currentFrame=0;
    frameCount = 0;
    cols=12;
    sheet=sheetJumpAttack;
 }
 var hurtOne = function(){
    currentFrame=0;
    frameCount = 0;
    cols=12;
    sheet=sheetHurt;
 }
 var angelDeath = function(){
    currentFrame=0;
    frameCount = 0;
    cols=15;
    sheet=sheetAngelFall;
    document.getElementById('death').classList.remove('hide');
    document.getElementById('death').classList.add('death');
    setTimeout(function(){
        victory.play();
    },1200)
    setTimeout(function(){
        var demonWinIMG = document.createElement('img');
        var deathAppend=document.getElementById('deathInner').parentNode;
        var button = document.createElement('div');

        deathAppend.appendChild(demonWinIMG)
       
        demonWinIMG.classList.add('deathIMGstart');
        setTimeout(function(){
        demonWinIMG.classList.add('deathIMGgo');
        $('#deetz1').addClass('zerow');
        $('#deetz2').addClass('zerow');
        },10)
        
        setTimeout(function(){
            demonWinIMG.classList.add('deathIMGgo2');
        //     $('#deetz1').addClass('zerow');
        // $('#deetz2').addClass('zerow');
        },400)
        setTimeout(function(){
            button.innerText='Play Again'
            deathAppend.appendChild(button);
            button.classList.add('playAgain')
            button.setAttribute('id','playAgain')
            document.getElementById('playAgain').addEventListener('click',function(){
            location.reload();
            })
        },700)
        
        
        setInterval(function(){
            demonWinIMG.classList.remove('deathIMGgo2');
            setTimeout(function(){
                demonWinIMG.classList.add('deathIMGgo2');
            },400)
        },800)
        setTimeout(function(){
            battleAudio.pause();
            // fanfare.play();
        })
    },1600)
}
        // setTimeout(function(){
        //     console.log('game over 1')
        //     alert('game over, Fallen Angel died')
        //     },1500)
        // frameAudio.muted=true;

//  setInterval(function(){
//     draw()
// },70)

var draw1 = setInterval(draw,70);