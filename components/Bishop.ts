import {Piece} from "./Piece";

export class Bishop extends Piece{
    move(startPosition: number, dropPosition: number){
            if(startPosition < dropPosition){
                let position = startPosition + this.board.width + 1
                while(position < 64){
                    if(position === dropPosition)
                        return true
                    position = position + this.board.width + 1
                }

                position = startPosition + this.board.width - 1
                while(position < 64){
                    if(position === dropPosition)
                        return true
                    position = position + this.board.width - 1
                }
            }
            else{
                let position = startPosition - this.board.width + 1
                while(position > -1){
                    if(position === dropPosition)
                        return true
                    position = position - this.board.width + 1
                }

                position = startPosition - this.board.width - 1
                while(position > -1){
                    if(position === dropPosition)
                        return true
                    position = position - this.board.width - 1
                }
            }

            return false
        }
}