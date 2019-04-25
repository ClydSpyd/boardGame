

var flashBattle = function(){

  clashes=['assets/sounds/clash.mp3','assets/sounds/strike1.mov','assets/sounds/strike2.mov','assets/sounds/strike3.mov','assets/sounds/strike4.mov']
  var numOne = Math.floor(Math.random()*2);
  var numTwo = Math.floor(Math.random()*clashes.length)

  var swoosh=new Audio('assets/sounds/swing.mp3')
  var clash=new Audio(clashes[numTwo]);

if(activePlayer==playerTwo){
  console.log(numOne);
  document.getElementById('container2').classList.remove('containerA');
  document.getElementById('container2').classList.add('containerAB');

  angelAttack();
  swoosh.play()


  setTimeout(function(){
    document.getElementById('container2').classList.add('redFlashBattle');
    clash.play();
    console.log('delay')
  },250);

  setTimeout(function(){
    document.getElementById('container2').classList.remove('redFlashBattle');
  },600)

  demonHurt();
  setTimeout(function(){
  },200)


} else if(activePlayer==playerOne){//player2 attack
  document.getElementById('container').classList.remove('containerA');
  document.getElementById('container').classList.add('containerAB');

  hurtOne();
  swoosh.play()
  setTimeout(function(){
    clash.play();
    document.getElementById('container').classList.add('redFlashBattle');
  },250)
  setTimeout(function(){
    document.getElementById('container').classList.remove('redFlashBattle');
  },450)

  // document.getElementById('canvas2').classList.remove('canvas2A');
  // document.getElementById('container').style.backgroundColor='red';
  console.log('two');
}

}

var activeHex=null;
var activeHexClass;
var inactiveHexClass;
var inactivePlayer;

function hexes(){
  var thisOne;
  var activeAttack;
  var inactiveAttack;
  var p1Attack = document.getElementById('p1Attack');
  var p2Attack = document.getElementById('p2Attack');
  var p1Block = document.getElementById('p1Block');
  var p2Block = document.getElementById('p2Block');


  var hexBoxes=document.getElementsByClassName('hex');
  for (var i=0;i<hexBoxes.length;i++){
    var hexClasses =['hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9','hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9']
    var j = Math.floor(Math.random()*hexClasses.length)
    hexBoxes[i].classList.remove('hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9')
    hexBoxes[i].classList.add(hexClasses[j])
  }
  }

function battle() {
  var impact=new Audio('assets/sounds/impact3.mov')
  impact.volume=0.3;
  var startSwords=new Audio('assets/sounds/strike3.mov')
  startSwords.volume=0.2;
  startSwords.play();
  impact.play();
eventListeners()

      //Set the correct active player state
        var adj = document.getElementsByClassName('adjacent');
        if ($('#playerImg1').hasClass('inActive1')){
          activePlayer=playerOne;
          $('#playerImg1').toggleClass('goActive1 inActive1');
          // console.log('one')
        }else if ($('#playerImg2').hasClass('inActive2')){
          activePlayer=playerTwo;
          $('#playerImg2').toggleClass('goActive2 inActive2');
          // console.log('two')
        };


        for (var i = 0; i < adj.length; i++) {
            adj[i].classList.add('red');}

            function swords(){
            document.getElementById('battle').style.backgroundImage = "url('assets/img/swords2.png')";
            document.getElementById('battle').innerHTML='';
            $('.battle').toggleClass('hide');
          }

          function sceneChange(){
            $('.goSpace').delay(700).slideUp(500);

           setTimeout(function(){ $('.goTime').addClass('goTimeA')},700)
/////animate player main images and container size////
          document.getElementById('deetz1').classList.add('deetz1A')
          document.getElementById('deetz2').classList.add('deetz2A')
          document.getElementById('container').classList.add('containerA')
          document.getElementById('canvas2').classList.add('canvas2A')
          document.getElementById('deetsPanelBottomA').classList.add('deetsPanelBottomA')
          document.getElementById('deetsPanelBottomB').classList.add('deetsPanelBottomA')
          document.getElementById('container2').classList.add('containerA')
          document.getElementById('canvas3').classList.add('canvas3A')

          $('#grid').addClass('gridA')
          setTimeout(function(){
            $('#p1Log, #p2Log').html('');
            $('#hexPanel, #hexPanel2').slideDown(800);
            $('#hexFlex2,#hexFlexB2').css('border-top','1px solid white')
            $('#hexFlex4,#hexFlexB4').css('border-bottom','1px solid white')
          },1000)

          }
swords();
sceneChange()
setTimeout(function(){ $('.battle').toggleClass('battleA')},1200)
console.log('BATTLE')

hexes()


setTimeout(function(){
$('#p1Log').slideUp(850);
$('#p2Log').slideUp(850);
},700)



////// HEXES/////

var hexArr;
function hexHov(){
  $(this).toggleClass('hHover')
}


function hexLoop(){
  if(activePlayer==playerOne){
    inactivePlayer=playerTwo;
    activeHexClass='.hexP1'
    inactiveHexClass='.hexP2'
    activeAttack=p1Attack;
    activeBlock=p1Block;
  } else if(activePlayer==playerTwo){
    inactivePlayer=playerOne;
    activeHexClass='.hexP2'
    inactiveHexClass='.hexP1'
    activeAttack=p2Attack;
    activeBlock=p2Block;
  }


  activeHexArr=Array.from(document.querySelectorAll(activeHexClass));
  inactiveHexArr=Array.from(document.querySelectorAll(inactiveHexClass));

  activeAttack.classList.remove('disabled');
  activeBlock.classList.remove('disabled');

  for(var i=0;i<activeHexArr.length;i++){
  activeHexArr[i].classList.remove('disabled');
  activeHexArr[i].addEventListener('mouseenter',hexHov);
  activeHexArr[i].addEventListener('mouseleave',hexHov);

  activeHexArr[i].addEventListener('click',function(){
    ;
    thisOne=activeHexArr.indexOf(this);
    console.log(thisOne);
    activeHex=activeHexArr[thisOne];
    console.log(activeHex);
    for(var i=0;i<activeHexArr.length;i++){
      activeHexArr[i].classList.remove('hHover2');
      this.classList.add('hHover2','hoverClass')
      // this.removeEventListener('mouseenter',hexHov);
      // this.removeEventListener('mouseleave',hexHov);
    }
    // for(var i=0;i<activeHexArr.length;i++){
    //   activeHexArr[i].removeEventListener('mouseenter',hexHov);
    //   activeHexArr[i].removeEventListener('mouseleave',hexHov);
    // }
  });
}

}///end of hexLoop


hexLoop()




/////ATTACK/////

function switcheroo(){
  if(activePlayer==playerOne){
    activePlayer=playerTwo;
    inactivePlayer=playerOne;
    hexLoop()
    console.log('active player: '+activePlayer.name+ '\n'+ 'active hex class: '+activeHexClass)
  } else {
    activePlayer=playerOne;
    inactivePlayer=playerTwo;
    hexLoop()
    console.log('active player: '+activePlayer.name+ '\n'+ 'active hex class: '+activeHexClass)
  }
}




function attack(){



  
  activeAttack.classList.add('disabled');
  activeBlock.classList.add('disabled');

  for(var i=0;i<activeHexArr.length;i++){
    activeHexArr[i].classList.add('disabled');
  }
  for(var i=0;i<activeHexArr.length;i++){
    inactiveHexArr[i].classList.remove('disabled');
  }

  var Health = document.getElementById(`${inactivePlayer.hID}`);
  var shield = document.getElementById(`${inactivePlayer.sID}`);

  if(inactivePlayer.shield<1){
  inactivePlayer.health-=activePlayer.attack;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;

  console.log('no sheild')

} else if (inactivePlayer.shield>=activePlayer.attack){
  inactivePlayer.shield-=activePlayer.attack;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  checkWin();
  console.log('sheild points')

}else if (inactivePlayer.shield>1 && inactivePlayer.shield<activePlayer.attack){
  // attack-shield=remainder
  // shield=0
  // health-remainder

  var remainder= activePlayer.attack-inactivePlayer.shield;
  inactivePlayer.shield=0;
  inactivePlayer.health-=remainder;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  checkWin();
  console.log('complicated one')
}

if (inactivePlayer.health<activePlayer.attack){
  inactivePlayer.health=0;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  checkWin();
}
if(activeHex!==null){
  appendHex()
}
  switcheroo();
}

function appendHex(){
  activeHex.classList.add('disabledHex');
  console.log('append')
  // if(!activeHex==null){
var newHexIMG = document.createElement('img');
var actHexClass= $(activeHex).attr('class').split(' ')[2];
switch(actHexClass){
  case'hx1':
  newHexIMG.src='assets/img/hexes/hex1.png'
  break;
  case'hx2':
  newHexIMG.src='assets/img/hexes/hex2.png'
  break;
  case'hx3':
  newHexIMG.src='assets/img/hexes/hex3.png'
  break;
  case'hx4':
  newHexIMG.src='assets/img/hexes/hex4.png'
  break;
  case'hx5':
  newHexIMG.src='assets/img/hexes/hex5.png'
  break;
  case'hx6':
  newHexIMG.src='assets/img/hexes/hex6.png'
  break;
  case'hx7':
  newHexIMG.src='assets/img/hexes/hex7.png'
  break;
  case'hx8':
  newHexIMG.src='assets/img/hexes/hex8.png'
  break;
  case'hx9':
  newHexIMG.src='assets/img/hexes/hex9.png'
  break;
}
activeHex.appendChild(newHexIMG);
newHexIMG.classList.add('hex2')

var sparkle= new Audio('assets/sounds/sparkle.mov')



setTimeout(function(){
  newHexIMG.classList.remove('hex2');
  newHexIMG.classList.add('weaponG');
  sparkle.volume=0.3;
  sparkle.play()
  activeHex=null;
},100)
// }
}





function eventListeners(){
  p1Attack.addEventListener('click', function(){
    attack();
  setTimeout(flashBattle, 100)
  // flash(100, 400)
  })
  p2Attack.addEventListener('click', function(){
    attack();
    setTimeout(flashBattle, 100)
    // flash(100, 400)
  })
  }

}////end of Battle function


