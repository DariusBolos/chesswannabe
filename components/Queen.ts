import {Piece} from "./Piece";
import {Bishop} from "./Bishop";
import {Rook} from "./Rook";

export class Queen extends Piece{
    bishop = new Bishop()
    rook = new Rook
    move(startPosition: number, dropPosition: number){
        return this.bishop.move(startPosition, dropPosition) || this.rook.move(startPosition, dropPosition)
    }
}