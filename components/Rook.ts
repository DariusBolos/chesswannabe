import {Piece} from "./Piece";

export class Rook extends Piece{
    move(startPosition: number, dropPosition: number){
        let dropSquare : HTMLElement
        let capturedPositions = []
        if(startPosition < dropPosition){
            let position = startPosition + this.board.width
            while(position < 64) {
                dropSquare = document.querySelector(`div[square-id="${position}"]`)

                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if(position === dropPosition)
                    return true
                    
                position += this.board.width
            }

            position = startPosition + 1
            while((position) % this.board.width){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)

                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if(position === dropPosition)
                    return true
                position++
            }
        }
        else{
            let position = startPosition - this.board.width
            while(position > -1){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)

                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }

                if(position === dropPosition)
                    return true
                position -= this.board.width
            }

            position = startPosition - 1
            while((position + 1) % this.board.width){
                dropSquare = document.querySelector(`div[square-id="${position}"]`)
                    
                if(dropSquare.hasChildNodes()){
                    capturedPositions.push(position)
                    break
                }
                
                if(position === dropPosition)
                    return true
                position--
            }
        }

        return capturedPositions.includes(dropPosition)
    }
} 