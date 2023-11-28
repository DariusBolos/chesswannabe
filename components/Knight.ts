import {Piece} from "./Piece";

export class Knight extends Piece{
    move(startPosition: number, dropPosition: number){
        let validMoves = [] as Array<Number>
        validMoves.push(startPosition + (this.board.width * 2) + 1)
        validMoves.push(startPosition + (this.board.width * 2) - 1)
        validMoves.push(startPosition - (this.board.width * 2) + 1)
        validMoves.push(startPosition - (this.board.width * 2) - 1)
        validMoves.push(startPosition + this.board.width + 2)
        validMoves.push(startPosition + this.board.width - 2)
        validMoves.push(startPosition - this.board.width + 2)
        validMoves.push(startPosition - this.board.width - 2)

        return validMoves.includes(dropPosition)
    }
}