import {Piece} from "./Piece";

export class Pawn extends Piece{
    move(startPosition: number, dropPosition: number){
        const startPositions = [8, 9, 10, 11, 12, 13, 14, 15] as Array<Number>
        if(startPositions.includes(startPosition))
            if(dropPosition === startPosition + (2 * this.board.width))
                return true

        return dropPosition === startPosition + this.board.width
    }
}