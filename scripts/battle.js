

var flashBattle = function(){

  clashes=['assets/sounds/clash.mp3','assets/sounds/strike1.mov','assets/sounds/strike2.mov','assets/sounds/strike3.mov','assets/sounds/strike4.mov']
  var numOne = Math.floor(Math.random()*2);
  var numTwo = Math.floor(Math.random()*clashes.length)

  var swoosh=new Audio('assets/sounds/swing.mp3')
  var clash=new Audio(clashes[numTwo]);

if(activePlayer==playerTwo){
  document.getElementById('container2').classList.remove('containerA');
  document.getElementById('container2').classList.add('containerAB');

  oneAttack();
  swoosh.play()


  setTimeout(function(){
    document.getElementById('container2').classList.add('redFlashBattle');
    clash.play();
  },250);

  setTimeout(function(){
    document.getElementById('container2').classList.remove('redFlashBattle');
  },600)

  
  if(playerTwo.health>=1){  
    demonHurt();
  } else {
    demonFall()
      setTimeout(function(){
      console.log('game over 2')
      alert('game over, demon died')
      },1500)
  }



} else if(activePlayer==playerOne){//player2 attack
  document.getElementById('container').classList.remove('containerA');
  document.getElementById('container').classList.add('containerAB');

  
  swoosh.play()
  setTimeout(function(){
    clash.play();
    document.getElementById('container').classList.add('redFlashBattle');
  },250)
  setTimeout(function(){
    document.getElementById('container').classList.remove('redFlashBattle');
  },450)

  if(playerOne.health>=1){  
    hurtOne();
  } else {
    angelFall();
      setTimeout(function(){
      console.log('game over 1')
      alert('game over, Fallen Angel died')
      },1500)
  }


}

}
var shieldPiercer=false;
var shieldDrain=false
var doubleAttack=false;
var plus5=false;
var plus10=false;
var plus15=false;
var plus20=false;

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
    var hexClasses =['hx1','hx2','hx3','hx4','hx6','hx7','hx8','hx9','hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx9','hx1','hx3','hx6']
    // var hexClasses =['hx1','hx2','hx3','hx4','hx6','hx7','hx8','hx9','hx9','hx9','hx9','hx9','hx9','hx9','hx9','hx9','hx9','hx9','hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx9','hx1','hx3','hx6','hx1','hx3','hx6','hx1','hx3','hx6']
    // var hexClasses =['hx1','hx2','hx9']
    var thisOne=hexBoxes[i]
    var j = Math.floor(Math.random()*hexClasses.length)
    var newClass=hexClasses[j]
    hexBoxes[i].classList.remove('hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9')
    hexBoxes[i].classList.add(newClass)

    

    switch(newClass){
      case'hx1':
      thisOne.childNodes[0].innerHTML='<span>+5 attack</span>'
      // console.log('hex one')
      this.innerHTML='<h1>hola</h1>'
      break;
      case'hx2':
      thisOne.childNodes[0].innerHTML='<span>shield piercer[1]</span>'
      
      // console.log('hex two')
      break;
      case'hx3':
      thisOne.childNodes[0].innerHTML='<span>+10 attack</span>'
      
      // console.log('hex three')
      break;
      case'hx4':
      thisOne.childNodes[0].innerHTML='<span>shield drain[1]</span>'
      
      // console.log('hex four')
      break;
      case'hx5':
      thisOne.childNodes[0].innerHTML='<span>double attack[1]</span>'
      
      // console.log('hex five')
      break;
      case'hx6':
      thisOne.childNodes[0].innerHTML='<span>+10 shield</span>'
      
      // console.log('hex six')
      break;
      case'hx7':
      thisOne.childNodes[0].innerHTML='<span>+15 attack</span>'
      
      // console.log('hex seven')
      break;
      case'hx8':
      thisOne.childNodes[0].innerHTML='<span>revive[1]</span>'
      
      // console.log('hex eight')
      break;
      case'hx9':
      thisOne.childNodes[0].innerHTML='<span>+20 attack</span>'
      
      // console.log('hex nine')
      break;
    }

  }
  }

  function hexStatReset(){
    if (plus5==true){
      activePlayer.attack-=5;
    } else if (plus10==true){
      activePlayer.attack-=10
    } else if (plus15==true){
      activePlayer.attack-=15
    } else if (plus20==true){
      activePlayer.attack-=20
    } else if (doubleAttack==true){
      var half=activePlayer.attack/2;
      activePlayer.attack-=half;
    }
    plus5=false;
    plus10=false;
    plus15=false;
    plus20=false;
    doubleAttack=false;
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
    activeHex=activeHexArr[thisOne];
    for(var i=0;i<activeHexArr.length;i++){
      activeHexArr[i].classList.remove('hHover2');
      this.classList.add('hHover2','hoverClass')
    }
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
    // console.log('active player: '+activePlayer.name+ '\n'+ 'active hex class: '+activeHexClass)
  } else {
    activePlayer=playerOne;
    inactivePlayer=playerTwo;
    hexLoop()
    // console.log('active player: '+activePlayer.name+ '\n'+ 'active hex class: '+activeHexClass)
  }
}




function attack(){

  if(activeHex!==null){
    hexEffect()
  }
  
  // console.log(shieldPiercer)
  // shieldPiercer==true
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
  
  if (shieldDrain==true){
    inactivePlayer.shield=0;
    inactivePlayer.health-=activePlayer.attack;
    Health.innerHTML='HEALTH: '+inactivePlayer.health;
    shield.innerHTML='SHIELD: '+inactivePlayer.shield;
    console.log('case3');

    // checkWin();
  }else if(shieldPiercer==true){
  inactivePlayer.health-=activePlayer.attack;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case1.5');
  // checkWin();
}else if (inactivePlayer.health+activePlayer.shield<activePlayer.attack){
  inactivePlayer.health=0;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case4');
  // checkWin();
}else if(inactivePlayer.shield<1){
  inactivePlayer.health-=activePlayer.attack;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case1');
  // checkWin();
} else if (inactivePlayer.shield>=activePlayer.attack){
  inactivePlayer.shield-=activePlayer.attack;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  console.log('case2');
  // checkWin();

}else if (inactivePlayer.shield>1 && inactivePlayer.shield<activePlayer.attack){

  var remainder= activePlayer.attack-inactivePlayer.shield;
  inactivePlayer.shield=0;
  inactivePlayer.health-=remainder;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case3');
  // checkWin();
} 
hexStatReset();
  setTimeout(function(){
    // hexStatReset()
    switcheroo();
  },200)

  // checkWin()

  console.log('next')
  console.log('line')
  console.log('pierce: '+shieldPiercer)
  console.log('+5: '+plus5)
  console.log('+10: '+plus10)
  console.log('+15: '+plus15)
  console.log('+20: '+plus20)
  console.log('double: '+doubleAttack)

shieldPiercer=false;
shieldDrain=false
doubleAttack=false;
} // END OF ATTACK FUNCTION


function hexEffect(){
  activeHex.classList.add('disabledHex');
  var newHexIMG = document.createElement('img');
  var actHexClass= $(activeHex).attr('class').split(' ')[3];
  switch(actHexClass){

    case'hx1':
    newHexIMG.src='assets/img/hexes/hex1.png'
    plus5=true;
    activePlayer.attack+=5;

    // console.log('plus5=true')
    break;

    case'hx2':
    newHexIMG.src='assets/img/hexes/hex2.png'
    shieldPiercer=true;
    // console.log('piercer=true')
    
    // console.log('hex two')
    break;

    case'hx3':
    newHexIMG.src='assets/img/hexes/hex3.png'
    plus10=true;
    activePlayer.attack+=10;
    // console.log('plus10=true')
    break;

    case'hx4':
    newHexIMG.src='assets/img/hexes/hex4.png'
    shieldDrain=true;
    // console.log('drain=true')
    break;

    case'hx5':
    newHexIMG.src='assets/img/hexes/hex5.png'
    activePlayer.attack*=2
    doubleAttack=true;
    
    // console.log('double=true')
    break;

    case'hx6':
    newHexIMG.src='assets/img/hexes/hex6.png'
    activePlayer.shield+=10;
    $(`#${activePlayer.sID}`).text('SHEILD: '+activePlayer.shield)
    
    // console.log('shield+10')
    break;

    case'hx7':
    newHexIMG.src='assets/img/hexes/hex7.png'
    plus15=true;
    activePlayer.attack+=15;
    // $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)
    // console.log('plus15=true')
    break;

    case'hx8':
    newHexIMG.src='assets/img/hexes/hex8.png'
    
      activePlayer.health+=50;
      $(`#${activePlayer.hID}`).text('HEALTH: '+activePlayer.health)
    
    // console.log('revive')
    break;

    case'hx9':
    newHexIMG.src='assets/img/hexes/hex9.png'
    plus20=true
    activePlayer.attack+=20;
    // $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)
    // console.log('plus20=true')
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
}

function eventListeners(){
  p1Attack.addEventListener('click', function(){
    attack();
  setTimeout(flashBattle, 300)
  })
  p2Attack.addEventListener('click', function(){
    attack();
    // hexEffect();
    setTimeout(flashBattle, 300)
  })
  }

}////end of Battle function


