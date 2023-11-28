export class Game {
    clearPage(container:HTMLElement) {
        container.style.display = 'none';
    }

    showBoard(container:HTMLElement) {
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
    }

    changePlayer(currentPlayer: string){
        currentPlayer === 'white'? currentPlayer = 'black' : currentPlayer = 'white'
        return currentPlayer
    }
}