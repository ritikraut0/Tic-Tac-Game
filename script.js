var currentPlayer = 'X';
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '' && !checkWinner()) {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row * 3 + col].textContent = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
        } else if (board.flat().every(cell => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Clear the cell contents
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });

    // Reset the status message
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
}
