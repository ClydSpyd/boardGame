///// MINES /////

   var mine = function() {
       
        if(activePlayer==playerOne){   
            hurtOne()
            flash(80, 70)
            flash(100, 400)
            $('#canvasX').fadeIn(10).delay(1000).fadeOut(10);
           
        } else {
            demonFall()
            flash(80, 70)
            flash(100, 400)
            $('#canvasY').fadeIn(10).delay(1000).fadeOut(10);
        }
        $(`${inactivePlayer.locID}`).removeClass('mine')
        $('.boom').removeClass('hide');

        

        setTimeout(function () {
            $('.boom').addClass('hide');
        }, 500);
    }


     var flash = function(del1, del2){
        if(activePlayer==playerOne){
        setTimeout( function(){ $('#canvas2').addClass('redFlash');
        setTimeout(function(){
            $('#canvas2').removeClass('redFlash');
        },del1)}, del2)
    } else if(activePlayer==playerTwo){
        setTimeout( function(){ $('#canvas3').addClass('redFlash');
        setTimeout(function(){
            $('#canvas3').removeClass('redFlash');
        },del1)}, del2)}
      
    } 
       