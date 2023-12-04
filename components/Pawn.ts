import {Piece} from "./Piece";

export class Pawn extends Piece{
    move(startPosition: number, dropPosition: number){
        const dropTarget = document.querySelector(`div[square-id="${dropPosition}"]`)
        const startPositions = [8, 9, 10, 11, 12, 13, 14, 15] as Array<Number>
        if(startPositions.includes(startPosition) && !dropTarget.hasChildNodes()){
            const dropSquare = document.querySelector(`div[square-id="${dropPosition - this.board.width}"]`)
            if(dropPosition === startPosition + (2 * this.board.width) && !dropSquare.hasChildNodes())
                return true
        }

        if(dropTarget.hasChildNodes()){
            const capturePositions = []
            capturePositions.push(startPosition + this.board.width + 1)
            capturePositions.push(startPosition + this.board.width - 1)

            if(capturePositions.includes(dropPosition))
                return true
        }
        else
            return dropPosition === startPosition + this.board.width

        return false
    }
}