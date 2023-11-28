import { Board } from './Board.ts'
export class Piece {
    board = new Board()

    // @ts-ignore
    move(startPosition: number, dropPosition: number){
        // default move function changed for every piece
    }
}