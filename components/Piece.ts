import { Board } from './Board.ts'
export class Piece {
    board = new Board()

    // @ts-ignore
    move(startPosition: number, dropPosition: number){
        // default move function changed for every piece
    }

    capture(dropSquare: HTMLElement){
        // function that removes the child element of a square if the piece gets captured 
        dropSquare.removeChild(dropSquare.firstChild)
    }
}