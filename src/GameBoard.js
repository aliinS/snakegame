class GameBoard {

    gameBoardTable = document.getElementById('game-board');
    boardSize;

    constructor ( boardSize ) {
        this.boardSize = boardSize;
    }

    draw ( snakeCoordinates, food ) {

        this.gameBoardTable.innerHTML = '';

        for ( let i = 0; i < this.boardSize; i++) {

            const rowTd = document.createElement('tr');

            for ( let j = 0; j < this.boardSize; j++) {

                const cellTd = document.createElement('td');
                const id = i + '-' + j;
                cellTd.setAttribute('id', id);
                
                
                if ( snakeCoordinates.includes(id) ) {
                    cellTd.innerText = snakeCoordinates.indexOf(id)===0 ? '🐸' : '🟢';
                    cellTd.classList.add('snake');
                    
                }
                
                const foodCoordinates = food.y + '-' + food.x;
                if (id ==foodCoordinates) {
                    cellTd.innerText = food.getEmoji();
                    // cellTd.classList.add('food');

                }

                rowTd.append(cellTd);
            }

            this.gameBoardTable.append(rowTd);
        }
    }

    gameOver() {
        const gameOverDiv = document.getElementById('game-over');
        gameOverDiv.classList.remove('hidden');
    }
}

export { GameBoard }