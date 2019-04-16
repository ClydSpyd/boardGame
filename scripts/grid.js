class Grid {
    constructor(selector,rows,cols){
    this.ROWS=rows;
    this.COLS=cols;
    this.selector=selector;
    this.createGrid();
    this.setupEventListeners();
}

createGrid(){
    const $board = $(this.selector);
    for (let row = 0; row<this.ROWS;row++){
        const $row=$('<div>')
        .addClass('row');
        for(let col = 0; col<this.COLS; col++){
            const $col = $('<div>')
            .addClass('col cell empty emptyCell')
            .attr('data-col',col)
            .attr('data-row',row)
            .attr('id',col +'-'+ row)
            $row.append($col);
            
        }
        $board.append($row);
    }
}

 setupEventListeners(){
     
    const $board = $(this.selector);
    
    
    $board.on('mouseenter', '.col.empty', function(){
        $(this).addClass('hover');
        if($(this).hasClass('viable')){
            $(this).addClass(activePlayer.hoverClass);
        } 
    });
    $board.on('mouseleave', '.col.empty', function(){
        $(this).removeClass('hover') 
        if($(this).hasClass('viable')){
            $(this).removeClass(activePlayer.hoverClass);
        };
    });
    
    $board.on('click', '.viable', move)
    
}
}
