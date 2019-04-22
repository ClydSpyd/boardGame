function hexes(){

  var activeHex;
  var thisOne;
  var activeAttack;
  var inactiveAttack;
  var p1Attack = document.getElementById('p1Attack');
  var p2Attack = document.getElementById('p2Attack');

  var hexBoxes=document.getElementsByClassName('hex');
  for (var i=0;i<hexBoxes.length;i++){
    var hexClasses =['hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9','hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9']
    var j = Math.floor(Math.random()*hexClasses.length)
    hexBoxes[i].classList.remove('hx1','hx2','hx3','hx4','hx5','hx6','hx7','hx8','hx9')
    hexBoxes[i].classList.add(hexClasses[j])
  }
  }

function battle() {
      //Set the correct active player state  
        var adj = document.getElementsByClassName('adjacent');
        if ($('#playerImg1').hasClass('inActive1')){
          activePlayer=playerOne;
          $('#playerImg1').toggleClass('goActive1 inActive1');
          console.log('one')
        }else if ($('#playerImg2').hasClass('inActive2')){
          activePlayer=playerTwo;
          $('#playerImg2').toggleClass('goActive2 inActive2');
          console.log('two')
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
// document.getElementById('p1Log').style='height:0px';
// document.getElementById('p2Log').style='height:0px';



////// HEXES/////

var hexArr;
function hexHov(){
  // this.classList.toggle('hHover')
  $(this).toggleClass('hHover')
}


function hexLoop(){
  if(activePlayer==playerOne){
    hexArr = Array.from(document.querySelectorAll('.hexP1'));
    activeAttack=p1Attack;
  } else if(activePlayer==playerTwo){
    hexArr = Array.from(document.querySelectorAll('.hexP2'));
    activeAttack=p2Attack;
  }

  activeAttack.classList.remove('disabled');

  for(var i=0;i<hexArr.length;i++){
  hexArr[i].classList.remove('disabled');
  hexArr[i].addEventListener('mouseenter',hexHov);
  hexArr[i].addEventListener('mouseleave',hexHov);
  hexArr[i].addEventListener('click',function(){
    thisOne=hexArr.indexOf(this);
    console.log(thisOne)
    // hexArr.splice(thisOne,1)
    console.log(hexArr)
    this.removeEventListener('mouseenter',hexHov);
    this.removeEventListener('mouseleave',hexHov);
    this.classList.remove('hex')
    this.classList.add('hex2')
    
    activeHex=hexArr[thisOne];
    // var thisID=this.getAttribute('class')
    // console.log(thisID)
    for(var i=0;i<hexArr.length;i++){
      hexArr[i].removeEventListener('mouseenter',hexHov);
      hexArr[i].removeEventListener('mouseleave',hexHov);
    }
  });
}
}
hexLoop()




/////ATTACK/////




activeAttack.addEventListener('click', function(){
  attack()
})

// p2Attack.addEventListener('click', function(){
//   attack()
// })


function attack(){
  activeHex.classList.add('filt', 'disabledHex');
  console.log('henlo')
  hexArr.splice(thisOne,1)
  hexLoop()
}

}













// function checkGameOver(){
// activePlayer.health = 0;
// var healthStat =document.getElementById(activePlayer.hID);
// healthStat.innerText='HEALTH: '+playerOne.health;
// var log = document.getElementById(activePlayer.logID);
// log.innerHTML+=('<p>booooom</p>')
// if(playerOne.health<1){
//     // alert('game over, man')
//     console.log('game overrr')
// } 
// if (playerTwo.health<1){
//     // alert('game over, man')
//     console.log('game overrr')
// }
// }
