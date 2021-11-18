const container = document.getElementById('container');
function makeRowsCols(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i= 0; i<(rows*cols); i++){
        var color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
        let cells = document.createElement('div');
        cells.innerText = '';
        cells.classList.add('grid-items');
        cells.addEventListener('mouseenter', (e) =>{
            e.target.style.background = color[Math.floor(Math.random() * color.length)];
        }); 
        container.appendChild(cells);
    }
}

function drawButoon(){
    let btn = document.querySelector('#randomColorBtn');
    btn.addEventListener('click', clickDraw);
}
function clickDraw(){

    let intValue = Number(prompt('Enter an integer number (max: 100): '));
    if(intValue <= 0 || intValue > 100){
        alert('Please enter a valid number (max: 100)');
    } else if (intValue !== parseInt(intValue)) {
        alert('Please enter a valid number (max: 100)')
    } else{
        makeRowsCols(intValue, intValue)
    }
}
drawButoon();
//--------------------------------
function makeRowsCols1(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i= 0; i<(rows*cols); i++){
        var color = 'black';
        let cells = document.createElement('div');
        cells.innerText = '';
        cells.classList.add('grid-items');
        cells.addEventListener('mouseenter', (e) =>{
            e.target.style.background = color;
        }); 
        container.appendChild(cells);
    }
}
function drawButoon1(){
    let btn1 = document.querySelector('#normalColorBtn');
    btn1.addEventListener('click', clickDraw1);
}
function clickDraw1(){

    let intValue1 = Number(prompt('Enter an integer number (max: 100): '));
    if(intValue1 <= 0 || intValue1 > 100){
        alert('Please enter a valid number (max: 100)');
    } else if (intValue1 !== parseInt(intValue1)) {
        alert('Please enter a valid number (max: 100)')
    } else{
        makeRowsCols1(intValue1, intValue1)
    }
}
drawButoon1();
