function setSpecialSquares (num,numRuneOne,numRuneTwo,numRuneThree,noAccess,numWeapons){
    
    
    const numMines = num;
    blockedCells = []
    for (let i=0; i<numMines ;i++){

    var randomNumber= Math.floor(Math.random()*cells.length);
    var thisOne=cells[randomNumber];
    thisOne.classList.add('mine');
    thisOne.classList.remove('cell');
    mines.push(thisOne.id);
}
const numRune1 = numRuneOne;

var cellsMinusMines = document.getElementsByClassName('cell')

for (let i=0; i<numRune1 ;i++){

    var randomNumber= Math.floor(Math.random()*cells.length);
    cellsMinusMines[randomNumber].classList.add('rune1','powerUp')
    cellsMinusMines[randomNumber].classList.remove('cell')
}
const numRune2 = numRuneTwo;

for (let i=0; i<numRune2 ;i++){

    var randomNumber= Math.floor(Math.random()*cells.length);
    cellsMinusMines[randomNumber].classList.add('rune2','powerUp')
    cellsMinusMines[randomNumber].classList.remove('cell')
}
const numRune3 = numRuneThree;

for (let i=0; i<numRune3 ;i++){

    var randomNumber= Math.floor(Math.random()*cells.length);
    cellsMinusMines[randomNumber].classList.add('rune3','powerUp')
    cellsMinusMines[randomNumber].classList.remove('cell')
}
const numNoAccess = noAccess;

var cellsMinusMinesRunes = document.getElementsByClassName('cell')

for (let i = 0; i < numNoAccess; i++) {

    var randomNumber = Math.floor(Math.random() * cells.length);
    var thisOne=cellsMinusMinesRunes[randomNumber];
    thisOne.classList.add('noAccess')
    thisOne.classList.remove('cell','empty','viable','col')
    thisOne.classList.remove('viable')
    blockedCells.push(thisOne.id);
}
    var cellsMinusMinesRunesNoAccess = document.getElementsByClassName('cell')

    for (let i = 0; i < numWeapons; i++) {
        
        var weapons = ['weapon1', 'weapon2', 'weapon3', 'weapon4'];
        var IDs = ['w1', 'w2', 'w3', 'w4', 'w2', 'w3'];
        
        var weaponIMGs = ['assets/img/potionW1.png', 'assets/img/potionW2.png', 'assets/img/potionSMOL.png', 'assets/img/potionW4.png']
        
        var randomNumber = Math.floor(Math.random() * cells.length);
        var thisOne = cellsMinusMinesRunesNoAccess[randomNumber];
        thisOne.classList.add('weaponFix')
        thisOne.classList.add(weapons[i])
        
        var img = document.createElement('img');
        img.setAttribute('id',IDs[i])
        img.src=weaponIMGs[i];
        thisOne.appendChild(img);

        // var weapons = ['weapon1', 'weapon2', 'weapon3', 'weapon4', 'weapon2', 'weapon3'];
        // var randomNumber = Math.floor(Math.random() * cells.length);
        
        // var srcs=['assets/img/potionSMOL.png','assets/img/potionSMOL.png','assets/img/potionSMOL.png','assets/img/potionSMOL.png']
        // var thisOne = cellsMinusMinesRunesNoAccess[randomNumber];
        // thisOne.classList.add('weaponFix')
        // var img = document.createElement('img');
        // img.src=srcs[i];
        // thisOne.appendChild(img);
        
        // cellsMinusMinesRunesNoAccess[randomNumber].classList.add(weapons[i])
        // cellsMinusMinesRunesNoAccess[randomNumber].classList.remove('cell')
    }
    // var cellsMinusTodo = document.getElementsByClassName('cell')
    // for (let i = 0; i < numHex; i++) {
        
    //     var hexes = ['hex1', 'hex2', 'hex1', 'hex2', 'hex1', 'hex2'];
    //     var randomNumber = Math.floor(Math.random() * cells.length);
    //     cellsMinusTodo[randomNumber].classList.add(hexes[i])
    //     cellsMinusTodo[randomNumber].classList.remove('cell')
    // }
}