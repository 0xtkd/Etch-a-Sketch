const container = document.querySelector('.container');
const gridsContainer = document.querySelector('.grid-container');

const squareCreator = (grids = 16) => {

    for (let i = 0; i < grids; i++) {
        let row_Div = document.createElement('div');
        row_Div.classList.add(`grid-row`);

        for (let j = 0; j < grids; j++) {
            let box_Div = document.createElement('div');
            box_Div.classList.add(`grid-box`);

            row_Div.append(box_Div);
        };

        gridsContainer.append(row_Div);

    };

    container.append(gridsContainer);

    hoverAnimations()
};

function hoverAnimations () {
    const gridsDivs = document.querySelectorAll('.grid-box');
    gridsDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', function (event) {
            console.log('hovering');
            this.style.background = 'lightblue';
        });
    });
}

squareCreator();

const button = document.querySelectorAll('button');
button.forEach(b => {
    b.addEventListener('click', function (event) {
        console.log('clicked')
        let rowsCeils = prompt('Please Enter the value for the grid to displayed');
    
        if ((rowsCeils.length > 0 && typeof rowsCeils === 'string')) {
            let removeDivs = document.querySelectorAll('.grid-container > div.grid-box');
            removeDivs.forEach(div => {
                div.remove();
            })
            squareCreator(rowsCeils);
        } 

    });

});



