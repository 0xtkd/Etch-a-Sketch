const container = document.querySelector('.container');
const gridsContainer = document.querySelector('.grid-container');

const squareCreator = (grids = 16) => {
    let gridsSize = 960 / grids;

    for (let i = 0; i < grids; i++) {
        let row_Div = document.createElement('div');
        row_Div.classList.add(`grid-row`);

        for (let j = 0; j < grids; j++) {
            let box_Div = document.createElement('div');
            box_Div.style.width = `${gridsSize}px`;
            box_Div.style.height = `${gridsSize}px`;
            box_Div.classList.add(`grid-box`);

            row_Div.append(box_Div);
        }

        gridsContainer.append(row_Div);

    }

    container.append(gridsContainer);

    // reset color scheme using js

    let colorScheme = document.querySelector('#color');

    let colorReset = document.querySelector('.reset');
    colorReset.addEventListener('click', function () {
        colorScheme.value = '#f8f8f8';
    });

    let clearBoard = document.querySelector('.clear');
    clearBoard.addEventListener('click', function () {
        window.location.reload(true);
    });

    // Hover effect
    function hoverAnimations () {
        const gridsDivs = document.querySelectorAll('.grid-box');
        gridsDivs.forEach(gridDiv => {
            gridDiv.addEventListener('mouseover', function () {
                this.style.background = colorScheme.value;
            });
        });
    }  

    hoverAnimations()

};

squareCreator();

const button = document.querySelectorAll('button.button');
button.forEach(b => {
    b.addEventListener('click', function () {
        let rowsCeils = prompt('Please Enter the value for the grid to displayed');
    
        if (rowsCeils.length > 0) {
            let removeDivs = document.querySelectorAll('div.grid-row');
            removeDivs.forEach(div => {
                div.remove();
            })
            squareCreator(rowsCeils);
        } 

    });

});


// to do lists
// /////////////////////////////////////
// clear the sketch board
// when the clear button is clicked
// use selected color from the color picker
// and change background color of the sketch board again
// using over effects on the sketch board


setInterval(() => {
    let inputColor = document.querySelector('#color');

    console.log(inputColor.value)
},100)