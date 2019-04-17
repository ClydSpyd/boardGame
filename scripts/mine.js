///// MINES /////

   var mine = function() {
       
        if(activePlayer==playerOne){   
            hurtOne()
            flash(80, 70)
            flash(100, 400)
        } else {
            console.log('tooBoom')
        }
        $(`${inactivePlayer.locID}`).removeClass('mine')
        $('.boom').removeClass('hide');




        setTimeout(function () {
            $('.boom').addClass('hide');
        }, 500);
    }


     var flash = function(del1, del2){
        setTimeout( function(){ $('#canvas2').css('background-color','red');
        setTimeout(function(){
            $('#canvas2').css('background-color','rgb(48, 48, 48)');
        },del1)}, del2)}