const input = prompt("Enter your grid size(1-100): ");
const gridSize = parseInt(input);



generateGrid(gridSize);




function generateGrid(sizeOfGrid){

  

    const container = document.querySelector('.container');

    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert("Please enter a valid grid size between 1 and 100.");
        return; 
    }

    container.innerHTML = '';

    const itemSize = `calc(100% / ${gridSize})`;

    const totalItems = sizeOfGrid * sizeOfGrid;
    
    for (let i = 0; i < totalItems; i++) {
    

   
        const gridItem = document.createElement('div');

        gridItem.classList.add('item');

        gridItem.style.width = itemSize;

        gridItem.style.height = itemSize;

        container.appendChild(gridItem);

        gridItem.addEventListener('mouseenter', function() {
            const randomColor = getRandomColor()
            this.style.backgroundColor = randomColor; 
        });

        function getRandomColor() {
            const r = Math.floor(Math.random() * 256); 
            const g = Math.floor(Math.random() * 256); 
            const b = Math.floor(Math.random() * 256); 
            return `rgb(${r}, ${g}, ${b})`; 
        }
        
    }
}