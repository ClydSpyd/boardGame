$(document).ready(function(){
    setBoard();
    // setTimeout(function(){$('#wrapper').addClass('one')},1000)
    draw1
    draw2
}); 
const cellsAtStart = document.getElementsByClassName('col');

function setBoard() {
    
    opener=new Audio('assets/sounds/bg3.mp3');
    ambiance=new Audio('assets/sounds/ambiance.mp3');
    battleAudio=new Audio('assets/sounds/battle.mp3');
    scream=new Audio('assets/sounds/scream2.mp3');
    fanfare =new Audio('assets/sounds/fanfare2.mp3');
    victory =new Audio('assets/sounds/victory3.mp3');
    victory.volume=0.5;
    battleAudio.volume=0.3;
    ambiance.volume=0.5;
    opener.volume=1;
    setTimeout(function(){
            ambiance.play();
            console.log('loop')
        ambiance.addEventListener('ended',function(){
            ambiance.play();
        })
    },17000)
    // var music=new Audio('assets/sounds/test.mp3') 
    // // .then(data=>data.play())
    // // bgm.volume=0.5;
    //     music.play()

    const grid = new Grid('#grid', 13, 13);
    activePlayer=playerOne;
    inactivePlayer=playerTwo;
    for (var i = 0; i < cellsAtStart.length; i++) {
        cellsAtStart[i].classList.add('cell')
    }
    currCol=playerOne.location.x;
    currRow=playerOne.location.y;
    $('div').removeClass('possible viable adjacent oneActive twoActive myTurn mine red noAccess weapon1 weapon2 rune1 rune2 rune3')
    $('div', '#grid').addClass('empty')
    posOne = '#0-0';
    posTwo = '#12-12';
    $(posOne).addClass('oneActive myTurn').removeClass('cell');
    $(posTwo).addClass('twoActive').removeClass('cell');
    available();
    adjacent();
    setSpecialSquares(25, 2, 4, 2, 45,4);
    blockedAvailability();
    
    var P1D = document.getElementById('p1Health');
    P1D.innerHTML = 'HEALTH: ' + playerOne.health;
    var P2D = document.getElementById('p2Health');
    P2D.innerHTML = 'HEALTH: ' + playerTwo.health;

    var P1S = document.getElementById('p1Shield');
    P1S.innerHTML = 'SHIELD: ' + playerOne.shield;
    var P2S = document.getElementById('p2Shield');
    P2S.innerHTML = 'SHIELD: ' + playerTwo.shield;

    var P1H = document.getElementById('p1Hit');
    P1H.innerHTML = 'ATTACK : ' + playerOne.attack;
    var P2H = document.getElementById('p2Hit');
    P2H.innerHTML = 'ATTACK : ' + playerTwo.attack;
    // var mine = function () {
    //     $(`${inactivePlayer.locID}`).removeClass('mine')
    //     $('.boom').removeClass('hide');
    //     setTimeout(function () {
    //         $('.boom').addClass('hide');
    //     }, 500);
    // }
    $('#go').on('click', function(){
        console.log('hola')
        battle()
    })
   
    $('#blo').on('click', function(){
        console.log('henlo')
        angelDeath()
    })
    $('#mlo').on('click', function(){
        demonDeath();
    })

    //fix delay in player image appearance//
    var parOne = document.getElementById(`${playerOne.canvasID}`).parentElement;
    var picOne = document.createElement('img');
    picOne.src='assets/img/angel.png';
    picOne.setAttribute('class','newIMG')
    parOne.appendChild(picOne)
    setTimeout(function(){
        parOne.removeChild(picOne)
    },500)


    var parTwo = document.getElementById(`${playerTwo.canvasID}`).parentElement;
    var picTwo = document.createElement('img');
    picTwo.src='assets/img/demon.png';
    picTwo.setAttribute('class','newIMG3')
    parTwo.appendChild(picTwo)
    setTimeout(function(){
        parTwo.removeChild(picTwo)
    },500)



    var rulesGo = document.getElementById('rulesGo');
    setTimeout(function(){
        $('#wrapper').addClass('one')
    },1500)

    // setInterval(function(){
    //     pulse();
    // },2000)

    
    rulesGo.addEventListener('click', function(){
    $('#rules').fadeOut(1000);
    // $('#wrapper').show();
    console.log('henlo')
})

document.getElementById('playAgain').addEventListener('click',function(){
    location.reload();
})

}
///create player objects ///

class Player {
    constructor(name,health, shield, attack, activeClass,hoverClass, x,y,locID,logID,hID,sID,aID,canvasID){
        
        this.name=name;
        this.health=health;
        this.shield=shield;
        this.attack=attack;
        this.activeClass=activeClass;
        this.hoverClass=hoverClass;
        this.location = {x:x,y:y};
        this.locID = locID;
        this.logID=logID;
        this.hID=hID;
        this.sID=sID;
        this.aID=aID;
        this.canvasID=canvasID
        this.shieldUp=false;
}
}

const playerOne = new Player('angel', 100, 0, 10, 'oneActive' , 'possible',0 ,0,'#0-0','p1Log','p1Health','p1Shield','p1Hit','canvas2');
const playerTwo = new Player('demon', 100, 0, 10, 'twoActive' , 'possible2',12 ,12,'#12-12','p2Log','p2Health','p2Shield','p2Hit','canvas3');

var cells = document.getElementsByClassName('cell');

var roundCount = 0;

var activePlayer ;
var posOne ;
var posTwo ;

var mines = [];
var blockedCells = []

var winner;
var loser;

function checkWin(){
    if(playerOne.health<1){
        angelDeath();
        scream.play()
        setTimeout(function(){
        console.log('game over 1')
        alert('game over, fallen angel died')
        },1000)
    } else if (playerTwo.health<1){
        demonDeath();
        scream.play()
        setTimeout(function(){
        console.log('game over 2')
        alert('game over, demon died')
        },1000)
    }
}

window.setInterval(function() {
    var elem = document.getElementById('p1Log');
    elem.scrollTop = elem.scrollHeight;
    var elem2 = document.getElementById('p2Log');
    elem2.scrollTop = elem2.scrollHeight;
  }, 10);





// $(document).ready(function(){
//     const grid = new Grid('#grid', 12, 12);
//     start();
  
// }); 
// const cellsAtStart = document.getElementsByClassName('col');

// function start() {
//     for (var i = 0; i < cellsAtStart.length; i++) {
//         cellsAtStart[i].classList.add('cell')
//     }
//     $('div').removeClass('possible viable adjacent oneActive twoActive myTurn mine red noAccess weapon1 weapon2 rune1 rune2 rune3')
//     $('div', '#grid').addClass('empty')
//     posOne = playerOne.location;
//     posTwo = playerTwo.location;
//     adjacent();
//     available();
//     $(posOne).addClass('oneActive myTurn').removeClass('cell');
//     $(posTwo).addClass('twoActive').removeClass('cell');
//     setMines(20, 2, 2, 2, 20,2);
//     var P1D = document.getElementById('p1Health');
//     P1D.innerHTML = 'HEALTH: ' + playerOne.health;
//     var P2D = document.getElementById('p2Health');
//     P2D.innerHTML = 'HEALTH: ' + playerTwo.health;
//     var P1S = document.getElementById('p1Shield');
//     P1S.innerHTML = 'SHIELD: ' + playerOne.shield;
//     var P2S = document.getElementById('p2Shield');
//     P2S.innerHTML = 'SHIELD: ' + playerTwo.shield;
// }
// class Player {
//     constructor(health, shield, active, activeClass,location){
       
//         this.health=health;
//         this.shield=shield;
//         this.active=active;
//         this.activeClass=activeClass;
//         this.location = {x:0,y:0}
//     }
    
// }
// const playerOne = new Player(100, 0, true,'oneActive');
// const playerTwo = new Player(100, 0, false,'twoActive');


// var cells = document.getElementsByClassName('cell');

// var posOne = $('#0-0');
// var posTwo = playerTwo.location;





