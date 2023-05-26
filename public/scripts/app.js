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
        };

        gridsContainer.append(row_Div);

    };

    container.append(gridsContainer);

    // Hover effect
    function hoverAnimations () {
        const gridsDivs = document.querySelectorAll('.grid-box');
        gridsDivs.forEach(gridDiv => {
            gridDiv.addEventListener('mouseover', function (event) {
                console.log('hovering');
                this.style.background = '#f8f8f8';
            });
        });
    }  

    hoverAnimations()
};

squareCreator();

const button = document.querySelectorAll('button.button');
button.forEach(b => {
    b.addEventListener('click', function (event) {
        console.log('clicked')
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


// to do list
// dynamically resizing my square elements using javascript
// 

