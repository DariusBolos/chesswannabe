import { Game } from './Game.ts'

export class Board {
    width = 8
    game = new Game()
    addSquares(pieces: string[], gameBoard: HTMLElement){
        pieces.forEach((piece, i) => {
            const square = document.createElement('div')
            square.classList.add('square');
            square.innerHTML = piece          
            square.setAttribute('square-id', String(63 - i))
            if(square.firstChild){
                const child = square.firstChild as HTMLElement
                child.setAttribute('draggable', 'true')
            }
            
            const row = Math.floor( (63 - i) / 8) + 1;
            if(row % 2 === 0)
                square.classList.add(i % 2 === 0 ? 'beige' : 'brown')
            else
                square.classList.add(i % 2 === 0 ? 'brown' : 'beige')

            if(i <= 15){
                const svg = square.firstChild.firstChild as HTMLElement
                svg.classList.add('black')
            }
                
            if(i > 47){
                const svg = square.firstChild.firstChild as HTMLElement
                svg.classList.add('white')
            }

            gameBoard.append(square)
        })
    }

    dragStart(e: Event, currentPlayer: string) {
        const target = e.target as HTMLElement
        const playerPiece = target.firstChild as HTMLElement
        if(playerPiece.getAttribute('class') == currentPlayer)
            return target
    }

    dragOver(e: Event){
        e.preventDefault()
    }

    dragDrop(e: Event, draggedPiece: any, player: string){
        const target = e.target as HTMLElement
        if(!target.hasChildNodes() && target.tagName == 'DIV' && draggedPiece != undefined){
            player = this.game.changePlayer(player)            
            target.append(draggedPiece)
        }
        return player
    }

    reverseSquareId(){
            const squareList = document.querySelectorAll('.square')
            squareList.forEach((square, i) => {
                square.setAttribute('square-id', String(63-i))
        })
    }

    revertSquareId(){
        const squareList = document.querySelectorAll('.square')
        squareList.forEach((square, i) => {
            square.setAttribute('square-id', String(i))
    })
}}