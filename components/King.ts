import {Piece} from "./Piece";

export class King extends Piece{
    move(startPosition: number, dropPosition: number){
        let validMoves = [] as Array<Number>
        validMoves.push(startPosition + this.board.width)
        validMoves.push(startPosition - this.board.width)
        validMoves.push(startPosition + this.board.width + 1)
        validMoves.push(startPosition + this.board.width - 1)
        validMoves.push(startPosition - this.board.width + 1)
        validMoves.push(startPosition - this.board.width - 1)

        if((startPosition + 1) % 8)
            validMoves.push(startPosition + 1)

        if(startPosition % 8)
            validMoves.push(startPosition - 1)

        return validMoves.includes(dropPosition)
    }
}