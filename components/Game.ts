import { Pawn } from './Pawn';
import { King } from './King';
import { Queen } from './Queen';
import { Bishop } from './Bishop';
import { Knight } from './Knight';
import { Rook } from './Rook';

export class Game {
    clearPage(container: HTMLElement) {
        container.style.display = 'none';
    }

    showBoard(container: HTMLElement) {
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
    }

    changePlayer(currentPlayer: string){
        currentPlayer === 'white'? currentPlayer = 'black' : currentPlayer = 'white'
        return currentPlayer
    }

    createPiece(pieceType: string){
        const piece = {
            'pawn': new Pawn(),
            'king': new King(),
            'queen': new Queen(),
            'bishop': new Bishop(),
            'knight': new Knight(),
            'rook': new Rook()
        }

        return piece[pieceType]
    }
}