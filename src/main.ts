import './style.css'
import { Game } from '../components/Game.ts'
import { Board } from '../components/Board.ts'
import { Rook } from '../components/Rook.ts';
import { Queen } from '../components/Queen.ts'

const game = new Game()
const board = new Board()
const rookObj = new Rook()
const queenObj = new Queen()
const startContainer = document.querySelector('.start-container') as HTMLElement
const startButton = document.querySelector('.start-button') as HTMLElement
const chessBoard = document.querySelector('.chess-board') as HTMLElement

const startPieces: string[] = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

startButton.addEventListener('click', () => {
    game.clearPage(startContainer)
    game.showBoard(chessBoard)
    board.addSquares(startPieces, chessBoard)
    let squareList = document.querySelectorAll("[class*='square']")
    const chessPieces = document.querySelectorAll('.chess-piece')
    let isBeingDragged : HTMLElement
    let startPosition : number
    let player = 'white'

    chessPieces.forEach(piece =>
        piece.addEventListener('dragstart', (e: Event) => {
            isBeingDragged = board.dragStart(e, player) as HTMLElement
            startPosition = Number(isBeingDragged.parentElement.getAttribute('square-id'))
        })
    )

    squareList.forEach(square => {
        square.addEventListener('dragover', (e: Event) => board.dragOver(e))
        square.addEventListener('drop', (e: Event) => {
            const dropTarget = e.target as HTMLElement
            const dropSquareId = Number(dropTarget.getAttribute('square-id'))
            console.log(queenObj.move(startPosition, dropSquareId))
            if(queenObj.move(startPosition, dropSquareId))
            {
                player = board.dragDrop(e, isBeingDragged, player)
            
                if(player === 'white')
                    board.reverseSquareId()
                else
                    board.revertSquareId()
            }
        })
    })
})