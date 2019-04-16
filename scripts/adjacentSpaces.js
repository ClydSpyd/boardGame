
function adjacent() {
oneCol = $(posOne).data('col'); 
oneRow=$(posOne).data('row');
twoCol = $(posTwo).data('col'); 
twoRow=$(posTwo).data('row');

const $ringOne= [$(`#${oneCol+1}-${oneRow-1}`),
        $(`#${oneCol}-${oneRow-1}`),
        $(`#${oneCol-1}-${oneRow-1}`),
        $(`#${oneCol-1}-${oneRow}`),
        $(`#${oneCol-1}-${oneRow+1}`),
        $(`#${oneCol}-${oneRow+1}`),
        $(`#${oneCol+1}-${oneRow}`),
        $(`#${oneCol+1}-${oneRow+1}`),
        $(`#${twoCol+1}-${twoRow-1}`),
        $(`#${twoCol}-${twoRow-1}`),
        $(`#${twoCol-1}-${twoRow-1}`),
        $(`#${twoCol-1}-${twoRow}`),
        $(`#${twoCol-1}-${twoRow+1}`),
        $(`#${twoCol}-${twoRow+1}`),
        $(`#${twoCol+1}-${twoRow}`),
        $(`#${twoCol+1}-${twoRow+1}`)];
for(let i=0;i<$ringOne.length;i++){
$ringOne[i].addClass('adjacent');
}
}