import {Piece} from "./Piece";

export class Rook extends Piece{
    move(startPosition: number, dropPosition: number){
        if(startPosition < dropPosition){
            let position = startPosition + this.board.width
            while(position < 64) {
                if(position === dropPosition)
                    return true
                position += this.board.width
            }

            position = startPosition + 1
            while((position) % this.board.width)
            {
                if(position === dropPosition)
                    return true
                position++
            }
        }
        else{
            let position = startPosition - this.board.width
            while(position > -1) {
                if(position === dropPosition)
                    return true
                position -= this.board.width
            }

            position = startPosition - 1
            while((position + 1) % this.board.width)
            {
                if(position === dropPosition)
                    return true
                position--
            }
        }

        return false
    }
}