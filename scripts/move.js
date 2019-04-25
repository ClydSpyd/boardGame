function move() {
 


 ///// MINES /////




 if ($(this).hasClass('mine')) { 
    activePlayer.health -= 20;
    var healthStat =document.getElementById(activePlayer.hID);
    healthStat.innerText='HEALTH: '+activePlayer.health;
    var log = document.getElementById(activePlayer.logID);
    log.innerHTML+=('<p style="color:red">you hit a mine: -20 health</p>')
    var bomb = new Audio('assets/sounds/bomb.mp3');
    bomb.volume=0.4;
    bomb.play();

    mine();
 }

    clickedCol = $(this).data('col');
    clickedRow = $(this).data('row');
    clicked = ('#' + clickedCol + '-' + clickedRow);
    
    $(activePlayer.locID).removeClass(activePlayer.activeClass)
    
    $(this).removeClass(activePlayer.hoverClass);
    $(this).removeClass('viable');
    $(this).removeClass('mine');
    $(this).addClass(activePlayer.activeClass);
    
    $('#playerImg1').toggleClass('goActive1 inActive1');
    $('#playerImg2').toggleClass('goActive2 inActive2');
    $('#oneGo').toggleClass('hide');
    $('#twoGo').toggleClass('hide');
    $('div').removeClass('hover viable adjacent red')

    $(activePlayer.locID).removeClass('myTurn')
    $(inactivePlayer.locID).addClass('myTurn')
    activePlayer.location.x=$(this).data('col');
    activePlayer.location.y=$(this).data('row');

    
    activePlayer.locID=`#${activePlayer.location.x}-${activePlayer.location.y}`;
    posOne= `#${playerOne.location.x}-${playerOne.location.y}`;
    posTwo=`#${playerTwo.location.x}-${playerTwo.location.y}`;
    
    



    ////// POWERUPS /////
    var powerUp = function () {

        var charm = new Audio('assets/sounds/charm.mov');
        charm.volume=0.3;
        charm.play();


        var par2 = document.getElementById(`${activePlayer.canvasID}`).parentElement;
        var pic2 = document.createElement('img');
        pic2.src='assets/img/rune1.png'
        
        par2.appendChild(pic2) 

        if(activePlayer==playerOne){
            pic2.classList.add('newIMGrune')
        }else{
            pic2.classList.add('newIMGrune2')
        }



        setTimeout(function(){
            pic2.classList.add('fade')
        },400)
        setTimeout(function(){
            par2.removeChild(pic2) 
        },1500)

        // $('.power').removeClass('hide');
        // setTimeout(function () {
        //     $('.power').addClass('hide');
        // }, 455);

        
    }

    

    if ($(this).hasClass('powerUp')) {  
        if ($(this).hasClass('rune1')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune1.png')";
            activePlayer.shield += 10;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +10 shield</p>');
            activePlayer.runeCount++;
        } else if ($(this).hasClass('rune2')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune2.png')";
            activePlayer.shield += 10;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +10 shield</p>');
            activePlayer.runeCount++;
        } else if ($(this).hasClass('rune3')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune3.png')";
            activePlayer.shield += 5;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +5 shield</p>');
            activePlayer.runeCount++;
        }
        powerUp();
        var shieldStat = document.getElementById(activePlayer.sID);
        shieldStat.innerText = 'SHIELD: ' + activePlayer.shield;
        $(this).removeClass('rune1 rune2 rune3 powerUp')
        
}
   

        ///// POTIONS /////

        var potionSound = function(){
            var potion=new Audio('assets/sounds/potion.mov')
            var sparkle= new Audio('assets/sounds/sparkle.mov')
            potion.volume=0.5;
            potion.play();
            setTimeout(function(){
                sparkle.volume=0.1;
                sparkle.play()
            },900)
            console.log('audio')
        }
        if($(this).hasClass('weaponFix')){
            potionSound();
        }  

        var potionFlash=function(col){
            var affectedBox=activePlayer.canvasID
            var par = document.getElementById(`${activePlayer.canvasID}`).parentElement;
            var pic = document.createElement('img');
            
            if(activePlayer==playerOne){
                pic.src='assets/img/angel.png';
                pic.setAttribute('class','newIMG')
            }else{
                pic.src='assets/img/demon.png';
                pic.setAttribute('class','newIMG2')
            }
            
            par.appendChild(pic)
            setTimeout(function(){
                pic.classList.add('boost')
                // var box=document.getElementById(`${inactivePlayer.canvasID}`);
                // box.classList.add('opaque')
            },10)


            if(activePlayer==playerOne){
            setTimeout(function(){
                pic.classList.remove('boost')
                pic.classList.add('boost2')
            },30)
            }else if (activePlayer==playerTwo){
                setTimeout(function(){
                    pic.classList.remove('boost')
                    pic.classList.add('boost2P2')
                },30)  
            }

            setTimeout(function(){
                par.removeChild(pic)
                // var box=document.getElementById(`${inactivePlayer.canvasID}`);
            //     // box.classList.remove('opaque')
            },1500)


                if(activePlayer==playerOne){
                    setTimeout(function(){
                    $(`#${affectedBox}`).addClass(`potionFlash${col}`);
                    $(`#${affectedBox}`).addClass('shrink');},1)
                } else if(activePlayer==playerTwo){
                    setTimeout(function(){
                    $(`#${affectedBox}`).addClass(`potionFlash${col}`);
                    $(`#${affectedBox}`).addClass('shrink2');},1)
                    }
                setTimeout(function(){
                    $(`#${affectedBox}`).addClass(`potionFlash${col}2`)
                    
                },30);
                setTimeout(function(){
                    $(`#${affectedBox}`).removeClass('shrink');
                    $(`#${affectedBox}`).removeClass('shrink2');
                },1500)
                setTimeout(function(){
                    $(`#${affectedBox}`).removeClass(`potionFlash${col}`)
                    $(`#${affectedBox}`).removeClass(`potionFlash${col}2`)
                },3000);

        }

        
       
     if ($(this).hasClass('weapon1')){  
        $('#w1').addClass('weaponG');
        setTimeout(function(){
            $('#w1').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
        activePlayer.attack+=5;
        console.log('blue')
        var attackStat = document.getElementById(activePlayer.aID);
        attackStat.innerHTML='ATTACK : ' + activePlayer.attack;
        var log = document.getElementById(activePlayer.logID);
        log.innerHTML += ('<p style="color:rgb(23, 162, 255)">Physical fortitude elixir: <br> +5 attack</p>');
        potionFlash('Blue');
       
                      
    } else if ($(this).hasClass('weapon2')){    
        $(this).removeClass('weapon2');
        $('#w2').addClass('weaponG');
        setTimeout(function(){
            $('#w2').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
        
        activePlayer.health+=20;
        console.log('yellow')
        var healthStat = document.getElementById(activePlayer.hID);
        healthStat.innerHTML='HEALTH : ' + activePlayer.health
        var log = document.getElementById(activePlayer.logID);
        log.innerHTML += ('<p style="color:rgb(255, 218, 11)">Replenishment elixir: <br> +20 health</p>');
        potionFlash('Yellow')
        
     } else if ($(this).hasClass('weapon3')) {    
         $(this).removeClass('weapon3');
         $('#w3').addClass('weaponG');
         setTimeout(function(){
            $('#w3').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
         activePlayer.attack += 10;
         console.log('green')
         var attackStat = document.getElementById(activePlayer.aID);
         attackStat.innerHTML = 'ATTACK : ' + activePlayer.attack;
         var log = document.getElementById(activePlayer.logID);
         log.innerHTML += ('<p style="color:chartreuse">Demon fury elixir: <br> +10 attack</p>');
         potionFlash('Green')

     }else if ($(this).hasClass('weapon4')) {    
         $(this).removeClass('weapon4');
         $('#w4').addClass('weaponG');
         setTimeout(function(){
            $('#w4').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
         activePlayer.shield += 15;
         console.log('purple')
         var shieldStat = document.getElementById(activePlayer.sID);
         shieldStat.innerHTML = 'SHIELD : ' + activePlayer.shield;
         var log = document.getElementById(activePlayer.logID);
         log.innerHTML += ('<p style="color:rgb(168, 8, 168)">Cloak of the Gods elixir: <br> +15 sheild</p>');
         potionFlash('Purple');


         function checkGameOver(){
            if(playerOne.health<1){
                // alert('game over, man')
                console.log('game overrr')
            } 
            if (playerTwo.health<1){
                // alert('game over, man')
                console.log('game overrr')
            }
        }

     }
        


///// SWITCH ACTIVE PLAYER /////
if (activePlayer==playerOne){
activePlayer=playerTwo
inactivePlayer=playerOne;
} else {
    activePlayer=playerOne
    inactivePlayer=playerTwo;
}
//update blocks based on activePlayer
currCol=activePlayer.location.x;
currRow=activePlayer.location.y;
available();
adjacent();

blockedAvailability();
$(`${posOne}`).removeClass('viable')
$(`${posTwo}`).removeClass('viable')
// $(activePlayer).toggleClass('myTurn');
// $(inactivePlayer).toggleClass('myTurn');

 //START BATTLE IF PLAYERS NEXT TO ONE ANOTHER
 if ($(this).hasClass('adjacent')) { 
    battle()                       
}
roundCount++


///check Game over///


}

