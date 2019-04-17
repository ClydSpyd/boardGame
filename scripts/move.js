function move() {
    
 ///// MINES /////




 if ($(this).hasClass('mine')) { 
    activePlayer.health -= 20;
    var healthStat =document.getElementById(activePlayer.hID);
    healthStat.innerText='HEALTH: '+playerOne.health;
    var log = document.getElementById(activePlayer.logID);
    log.innerHTML+=('<p>you hit a mine: -20 health</p>')
    mine();
 }

    clickedCol = $(this).data('col');
    clickedRow = $(this).data('row');
    clicked = ('#' + clickedCol + '-' + clickedRow);
    
    $(activePlayer.locID).removeClass(activePlayer.activeClass)
    
    $(this).removeClass(activePlayer.hoverClass);
    $(this).removeClass('viable');
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
        $('.power').removeClass('hide');
        setTimeout(function () {
            $('.power').addClass('hide');
        }, 455);
    }

    if ($(this).hasClass('powerUp')) {   
        if ($(this).hasClass('rune1')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune1.png')";
            activePlayer.shield += 20;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +20 shield</p>');
            activePlayer.runeCount++;
        } else if ($(this).hasClass('rune2')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune2.png')";
            activePlayer.shield += 10;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +10 shield</p>');
            activePlayer.runeCount++;
        } else if ($(this).hasClass('rune3')) {
            document.getElementById('power').style.backgroundImage = "url('assets/img/rune3.png')";
            activePlayer.shield += 30;
            var log = document.getElementById(activePlayer.logID);
            log.innerHTML += ('<p>protection rune: +30 shield</p>');
            activePlayer.runeCount++;
        }
        powerUp();
        var shieldStat = document.getElementById(activePlayer.sID);
        shieldStat.innerText = 'SHIELD: ' + activePlayer.shield;
        $(this).removeClass('rune1 rune2 rune3 powerUp')


}
   

        ///// POTIONS /////


        var potionFlash=function(col){
            var affectedBox=activePlayer.canvasID
            setTimeout(function(){
            $(`#${affectedBox}`).addClass(`potionFlash${col}`);
        },100)
            setTimeout(function(){
                $(`#${affectedBox}`).removeClass(`potionFlash${col}`)
                
            },200)
            setTimeout(function(){
                $(`#${affectedBox}`).addClass(`potionFlash${col}`)
                
            },300)
            setTimeout(function(){
                $(`#${affectedBox}`).removeClass(`potionFlash${col}`)
                
            },400)
            setTimeout(function(){
                $(`#${affectedBox}`).addClass(`potionFlash${col}`)
                
            },500)
            setTimeout(function(){
                $(`#${affectedBox}`).removeClass(`potionFlash${col}`)
                
            },600)
        }

        
       
     if ($(this).hasClass('weapon1')){  
        $('#w1').addClass('weaponG');
        setTimeout(function(){
            $('#w1').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
        activePlayer.attack+=30;
        console.log('blue')
        var attackStat = document.getElementById(activePlayer.aID);
        attackStat.innerHTML='ATTACK : ' + activePlayer.attack;
         var log = document.getElementById(activePlayer.logID);
         log.innerHTML += ('<p>Physical fortitude elixir: +30 attack</p>');
        potionFlash('Blue');
       
                      
    } else if ($(this).hasClass('weapon2')){    
        $(this).removeClass('weapon2');
        $('#w2').addClass('weaponG');
        setTimeout(function(){
            $('#w2').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
        
        activePlayer.attack+=30;
        console.log('yellow')
        var attackStat = document.getElementById(activePlayer.aID);
        attackStat.innerHTML='ATTACK : ' + activePlayer.attack
        potionFlash('Yellow')
        
     } else if ($(this).hasClass('weapon3')) {    
         $(this).removeClass('weapon3');
         $('#w3').addClass('weaponG');
         setTimeout(function(){
            $('#w3').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
         activePlayer.attack += 30;
         console.log('green')
         var attackStat = document.getElementById(activePlayer.aID);
         attackStat.innerHTML = 'ATTACK : ' + activePlayer.attack;
         potionFlash('Green')

     }else if ($(this).hasClass('weapon4')) {    
         $(this).removeClass('weapon4');
         $('#w4').addClass('weaponG');
         setTimeout(function(){
            $('#w4').hide();
            $(`${inactivePlayer.locID}`).removeClass('weaponFix')
        },800)
         activePlayer.attack += 30;
         console.log('purple')
         var attackStat = document.getElementById(activePlayer.aID);
         attackStat.innerHTML = 'ATTACK : ' + activePlayer.attack;
         potionFlash('Purple');

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
}