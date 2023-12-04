import { Piece } from "./Piece";

export class Bishop extends Piece{
    move(startPosition: number, dropPosition: number){
        let capturedPositions = []
        let dropSquare
        if (startPosition < dropPosition) {
            let position = startPosition + this.board.width + 1
            while (position < 64){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)

                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if (position === dropPosition)
                    return true
                position = position + this.board.width + 1
            }

            position = startPosition + this.board.width - 1
            while (position < 64){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)
                
                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if (position === dropPosition)
                    return true
                position = position + this.board.width - 1
            }
        }
        else {
            let position = startPosition - this.board.width + 1
            while (position > -1){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)
                
                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if (position === dropPosition)
                    return true
                position = position - this.board.width + 1
            }

            position = startPosition - this.board.width - 1
            while (position > -1){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)
                
                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if (position === dropPosition)
                    return true
                position = position - this.board.width - 1
            }
        }

        return capturedPositions.includes(dropPosition)
    }
}