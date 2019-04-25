

var flashBattle = function(){

  clashes=['assets/sounds/clash.mp3','assets/sounds/strike1.mov','assets/sounds/strike2.mov','assets/sounds/strike3.mov','assets/sounds/strike4.mov']
  var numOne = Math.floor(Math.random()*2);
  var numTwo = Math.floor(Math.random()*clashes.length)

  var swoosh=new Audio('assets/sounds/swing.mp3')
  var clash=new Audio(clashes[numTwo]);

if(activePlayer==playerTwo){
  document.getElementById('container2').classList.remove('containerA');
  document.getElementById('container2').classList.add('containerAB');

  angelAttack();
  swoosh.play()


  setTimeout(function(){
    document.getElementById('container2').classList.add('redFlashBattle');
    clash.play();
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
}

}
var shieldPiercer=false;
var shieldDrain=false
var doubleAttack=false;

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
    var hexClasses =['hx1','hx2','hx3','hx4','hx6','hx7','hx8','hx9','hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx9','hx1','hx3','hx6','hx1','hx3','hx6','hx1','hx3','hx6']
    // var hexClasses =['hx5']
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
  console.log(shieldPiercer)
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
  if (doubleAttack==true && inactivePlayer.shield<1){
    inactivePlayer.health-=(activePlayer.attack*2);
    Health.innerHTML='HEALTH: '+inactivePlayer.health;
    console.log('caseDub1')
  
  } else if (doubleAttack==true && inactivePlayer.shield>=activePlayer.attack*2){
    inactivePlayer.shield-=(activePlayer.attack*2);
    shield.innerHTML='SHIELD: '+inactivePlayer.shield;
    console.log('caseDub2')
    checkWin();
  
  }else if (doubleAttack==true && inactivePlayer.shield>1 && inactivePlayer.shield<(activePlayer.attack*2)){
    var remainder= (activePlayer.attack*2)-inactivePlayer.shield;
    inactivePlayer.shield=0;
    inactivePlayer.health-=remainder;
    shield.innerHTML='SHIELD: '+inactivePlayer.shield;
    Health.innerHTML='HEALTH: '+inactivePlayer.health;
    console.log('caseDub3')
    checkWin();
  } else if (shieldDrain==true){
    inactivePlayer.shield=0;
    inactivePlayer.health-=activePlayer.attack;
    Health.innerHTML='HEALTH: '+inactivePlayer.health;
    shield.innerHTML='SHIELD: '+inactivePlayer.shield;
    console.log('case3')
    checkWin();
  }else if(inactivePlayer.shield<1 || shieldPiercer==true){
  inactivePlayer.health-=activePlayer.attack;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case1')

} else if (inactivePlayer.shield>=activePlayer.attack){
  inactivePlayer.shield-=activePlayer.attack;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  console.log('case2')
  checkWin();

}else if (inactivePlayer.shield>1 && inactivePlayer.shield<activePlayer.attack){

  var remainder= activePlayer.attack-inactivePlayer.shield;
  inactivePlayer.shield=0;
  inactivePlayer.health-=remainder;
  shield.innerHTML='SHIELD: '+inactivePlayer.shield;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case3')
  checkWin();
} else if (inactivePlayer.health<activePlayer.attack){
  inactivePlayer.health=0;
  Health.innerHTML='HEALTH: '+inactivePlayer.health;
  console.log('case4')
  checkWin();
}

  switcheroo();

shieldPiercer=false;
shieldDrain=false
doubleAttack=false;
} // END OF ATTACK FUNCTION


function hexEffect(){
  activeHex.classList.add('disabledHex');
  var newHexIMG = document.createElement('img');
  // console.log($(activeHex))
  // console.log($(activeHex).attr('class'))
  var actHexClass= $(activeHex).attr('class').split(' ')[3];
  switch(actHexClass){
    case'hx1':
    newHexIMG.src='assets/img/hexes/hex1.png'
    activePlayer.attack+=5;
    $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)

    console.log('hex one')
    break;

    case'hx2':
    newHexIMG.src='assets/img/hexes/hex2.png'
    shieldPiercer=true;
    console.log('pierce')
    
    console.log('hex two')
    break;

    case'hx3':
    newHexIMG.src='assets/img/hexes/hex3.png'
    activePlayer.attack+=10;
    $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)
    console.log('hex three')
    break;

    case'hx4':
    newHexIMG.src='assets/img/hexes/hex4.png'
    shieldDrain=true;
    // console.log('hex four')
    break;

    case'hx5':
    newHexIMG.src='assets/img/hexes/hex5.png'
    doubleAttack=true;
    
    console.log('hex five')
    break;

    case'hx6':
    newHexIMG.src='assets/img/hexes/hex6.png'
    activePlayer.shield+=10;
    $(`#${activePlayer.sID}`).text('SHEILD: '+activePlayer.shield)
    
    console.log('hex six')
    break;

    case'hx7':
    newHexIMG.src='assets/img/hexes/hex7.png'
    activePlayer.attack+=15;
    $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)
    console.log('hex seven')
    break;

    case'hx8':
    newHexIMG.src='assets/img/hexes/hex8.png'
    if(activePlayer.health<100){
      activePlayer.health=100;
      $(`#${activePlayer.hID}`).text('HEALTH: '+activePlayer.health)
    }
    console.log('hex eight')
    break;

    case'hx9':
    newHexIMG.src='assets/img/hexes/hex9.png'
    activePlayer.attack+=20;
    $(`#${activePlayer.aID}`).text('ATTACK: '+activePlayer.attack)
    console.log('hex nine')
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
  setTimeout(flashBattle, 100)
  })
  p2Attack.addEventListener('click', function(){
    attack();
    // hexEffect();
    setTimeout(flashBattle, 100)
  })
  }

}////end of Battle function


