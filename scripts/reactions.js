var hurtOne = function () {
    segundo.src = 'angelHurt.png';
    frameCount = 0
    currentFrameb = 0;
    vert = 0;
    colsB = 12;
    setTimeout(function () {
        segundo.src = 'tripleSprite.png';
        vert = 1;
        currentFrameb = 0;
        frameCount = 0;
        colsB = 18;
    }, 1000)
}