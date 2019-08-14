const boardSize = 8;

const whiteSquare = ' ';
const blackSquare = '#';

let currentColour = 1;
let chessBoard = '';

for (let row = 0; row < boardSize; row++){
    for (let column = 0; column < boardSize; column++){
        chessBoard += currentColour == 1 ? whiteSquare : blackSquare;
        currentColour = 1 - currentColour;
    }

    chessBoard += '\n';
    currentColour = 1 - currentColour;
}

console.log(chessBoard);
