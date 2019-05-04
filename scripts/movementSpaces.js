

//////// SPACES AVAILABLE TO MOVE INTO  ////////

function available(){
    
    // define rows and columns to work with(P1 or P2)
    
    
    // apply class to inner ring
var $ringOne= [$(`#${currCol+1}-${currRow}`),
        $(`#${currCol+2}-${currRow}`),
        $(`#${currCol+3}-${currRow}`),
        $(`#${currCol-1}-${currRow}`),
        $(`#${currCol-2}-${currRow}`),
        $(`#${currCol-3}-${currRow}`),
        $(`#${currCol}-${currRow-1}`),
        $(`#${currCol}-${currRow-2}`),
        $(`#${currCol}-${currRow-3}`),
        $(`#${currCol}-${currRow+1}`),
        $(`#${currCol}-${currRow+2}`),
        $(`#${currCol}-${currRow+3}`)];
for(let i=0;i<$ringOne.length;i++){
    if(!$ringOne[i].hasClass('noAccess')){
    $ringOne[i].addClass('viable')}
}




}



//////// SPACES ADJACENT TO PLAYERS  ////////

function adjacent() {
    oneCol = $(posOne).data('col'); 
    oneRow=$(posOne).data('row');
    twoCol = $(posTwo).data('col'); 
    twoRow=$(posTwo).data('row');
    
    var $ringOne= [$(`#${currCol+1}-${currRow-1}`),
    $(`#${currCol}-${currRow-1}`),
    $(`#${currCol-1}-${currRow-1}`),
    $(`#${currCol-1}-${currRow}`),
    $(`#${currCol-1}-${currRow+1}`),
    $(`#${currCol}-${currRow+1}`),
    $(`#${currCol+1}-${currRow}`),
    $(`#${currCol+1}-${currRow+1}`)];
    for(let i=0;i<$ringOne.length;i++){
    $ringOne[i].addClass('adjacent');
    }
    }


    ///// PREVENT MOVES BASED ON BLOCKED SPACES /////

    function blockedAvailability(){
        
    if(blockedCells.includes(currCol+'-'+(currRow-1))){ //N
        $(`#${currCol}-${currRow-2}`).removeClass('viable')  
        $(`#${currCol}-${currRow-3}`).removeClass('viable')  
        // console.log('BLOCKnorth')
    }
    if(blockedCells.includes(currCol+'-'+(currRow-2))){ //NN
        $(`#${currCol}-${currRow-3}`).removeClass('viable')  
        // console.log('BLOCKnorth')
    }

    if(blockedCells.includes(currCol+'-'+(currRow-1))&&blockedCells.includes(currCol+1+'-'+(currRow-1))){ //N-NE
        $(`#${currCol}-${currRow-2}`).removeClass('viable')
        $(`#${currCol+1}-${currRow-2}`).removeClass('viable');
        $(`#${currCol+2}-${currRow-2}`).removeClass('viable');  
        // console.log('BLOCKnorth-NE')
    }

    if (blockedCells.includes(currCol+1+'-'+(currRow-1))){ //NE       
        $(`#${currCol+2}-${currRow-2}`).removeClass('viable');        
        // console.log('BLOCKnorth-east')
     }

     if(blockedCells.includes(currCol+1+'-'+(currRow-1))&&blockedCells.includes(currCol+1+'-'+(currRow))){ //NE-E
        $(`#${currCol+2}-${currRow-2}`).removeClass('viable')
        $(`#${currCol+2}-${currRow}`).removeClass('viable');
        $(`#${currCol+2}-${currRow-1}`).removeClass('viable');  
        // console.log('BLOCKnorth-east-EAST')
    }

    if(blockedCells.includes(currCol+1+'-'+currRow)){ //E
        $(`#${currCol+2}-${currRow}`).removeClass('viable')  
        $(`#${currCol+3}-${currRow}`).removeClass('viable')  
        // console.log('BLOCKeast')
    } 
    if(blockedCells.includes(currCol+2+'-'+currRow)){ //EE 
        $(`#${currCol+3}-${currRow}`).removeClass('viable')  
        // console.log('BLOCKeast')
    } 
    
    if(blockedCells.includes(currCol+1+'-'+(currRow))&&blockedCells.includes(currCol+1+'-'+(currRow+1))){ //E-SE
        $(`#${currCol+2}-${currRow}`).removeClass('viable')
        $(`#${currCol+2}-${currRow+2}`).removeClass('viable');
        $(`#${currCol+2}-${currRow+1}`).removeClass('viable');  
        // console.log('BLOCKeast-SE')
    }
   
    if (blockedCells.includes(currCol+1+'-'+(currRow+1))){ //SE
       $(`#${currCol+2}-${currRow+2}`).removeClass('viable');
    //    console.log('BLOCKsouth-east')
    } 

    if(blockedCells.includes(currCol+'-'+(currRow+1))&&blockedCells.includes(currCol+1+'-'+(currRow+1))){ //SE-S
        $(`#${currCol+1}-${currRow+2}`).removeClass('viable')
        $(`#${currCol+2}-${currRow+2}`).removeClass('viable');
        $(`#${currCol}-${currRow+2}`).removeClass('viable');  
        // console.log('BLOCKsouth-east-S')
    }
   
    if (blockedCells.includes(currCol+'-'+(currRow+1))){ //S
        $(`#${currCol}-${currRow+2}`).removeClass('viable')
        $(`#${currCol}-${currRow+3}`).removeClass('viable')
        // console.log('BLOCKsouth')
    }
    if (blockedCells.includes(currCol+'-'+(currRow+2))){ //SS
        $(`#${currCol}-${currRow+3}`).removeClass('viable')
        // console.log('BLOCKsouth')
    }

    if(blockedCells.includes(currCol+'-'+(currRow+1))&&blockedCells.includes(currCol-1+'-'+(currRow+1))){ //S-SW
        $(`#${currCol-1}-${currRow+2}`).removeClass('viable')
        $(`#${currCol}-${currRow+2}`).removeClass('viable');
        $(`#${currCol-2}-${currRow+2}`).removeClass('viable');  
        // console.log('BLOCKsouth-SE')
    }
   

    if (blockedCells.includes(currCol-1+'-'+(currRow+1))){ //SW
        $(`#${currCol-2}-${currRow+2}`).removeClass('viable');
        // console.log('BLOCKsouth-west')
     }

     if(blockedCells.includes(currCol-1+'-'+(currRow))&&blockedCells.includes(currCol-1+'-'+(currRow+1))){ //SW-W
        $(`#${currCol-2}-${currRow}`).removeClass('viable')
        $(`#${currCol-2}-${currRow+1}`).removeClass('viable');
        $(`#${currCol-2}-${currRow+2}`).removeClass('viable');  
        // console.log('BLOCKsouth-SE')
    }

    if (blockedCells.includes(currCol-1+'-'+currRow)){ //w
       $(`#${currCol-2}-${currRow}`).removeClass('viable')
       $(`#${currCol-3}-${currRow}`).removeClass('viable')
    //    console.log('BLOCKwest')
    } 
    if (blockedCells.includes(currCol-2+'-'+currRow)){ //wW
       $(`#${currCol-3}-${currRow}`).removeClass('viable')
    //    console.log('BLOCKwest')
    } 

    if(blockedCells.includes(currCol-1+'-'+(currRow))&&blockedCells.includes(currCol-1+'-'+(currRow-1))){ //W-NW
        $(`#${currCol-2}-${currRow}`).removeClass('viable')
        $(`#${currCol-2}-${currRow-1}`).removeClass('viable');
        $(`#${currCol-2}-${currRow-2}`).removeClass('viable');  
        // console.log('BLOCKsouth-SE')
    }

    if (blockedCells.includes(currCol-1+'-'+(currRow-1))){ //NW
        $(`#${currCol-2}-${currRow-2}`).removeClass('viable');
        // console.log('BLOCKnorth-west')
     }

     if(blockedCells.includes(currCol+'-'+(currRow-1))&&blockedCells.includes(currCol-1+'-'+(currRow-1))){ //NW-N
        $(`#${currCol}-${currRow-2}`).removeClass('viable')
        $(`#${currCol-1}-${currRow-2}`).removeClass('viable');
        $(`#${currCol-2}-${currRow-2}`).removeClass('viable');  
        // console.log('BLOCKsouth-SE')
    }

    // if(blockedCells.includes(currCol+'-'+(currRow-1))&&blockedCells.includes(currCol+1+'-'+(currRow))){ //DIAG-UR
    //     $(`#${currCol+1}-${currRow-1}`).removeClass('viable');  
    //     console.log('BLOCKDIAG-UR')
    // }

    // if(blockedCells.includes(currCol+'-'+(currRow+1))&&blockedCells.includes(currCol+1+'-'+(currRow))){ //DIAG-DR
    //     $(`#${currCol+1}-${currRow+1}`).removeClass('viable');  
    //     console.log('BLOCKDIAG-DR')
    // }

    // if(blockedCells.includes(currCol+'-'+(currRow+1))&&blockedCells.includes(currCol-1+'-'+(currRow))){ //DIAG-DL
    //     $(`#${currCol-1}-${currRow+1}`).removeClass('viable');  
    //     console.log('BLOCKDIAG-DL')
    // }

    // if(blockedCells.includes(currCol+'-'+(currRow-1))&&blockedCells.includes(currCol-1+'-'+(currRow))){ //DIAG-UL
    //     $(`#${currCol-1}-${currRow-1}`).removeClass('viable');  
    //     console.log('BLOCKDIAG-UL')
    // }

    }