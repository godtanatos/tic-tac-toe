class TicTacToe {
    
    constructor() {

    }
    currentPlayer = 'x';
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    turnsCount = this.gameField.flat().length;
    winner = null;

    getCurrentPlayerSymbol() {
        return this.currentPlayer;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
        this.getWinner();
        this.turnsCount--
    }
    isFinished() {
        if (this.turnsCount == 0 || this.winner != null) {
            return true;
        } return false;
    }

    getWinner() {
        let player = this.currentPlayer == 'x' ? 'o' : 'x';
        let win = null;
        if (this.gameField[0][0] == player && this.gameField[0][1] == player && this.gameField[0][2] == player) { win = player }
        if (this.gameField[1][0] == player && this.gameField[1][1] == player && this.gameField[1][2] == player) { win = player }
        if (this.gameField[2][0] == player && this.gameField[2][1] == player && this.gameField[2][2] == player) { win = player }
        if (this.gameField[0][0] == player && this.gameField[1][0] == player && this.gameField[2][0] == player) { win = player }
        if (this.gameField[0][1] == player && this.gameField[1][1] == player && this.gameField[2][1] == player) { win = player }
        if (this.gameField[0][2] == player && this.gameField[1][2] == player && this.gameField[2][2] == player) { win = player }
        if (this.gameField[0][0] == player && this.gameField[1][1] == player && this.gameField[2][2] == player) { win = player }
        if (this.gameField[0][2] == player && this.gameField[1][1] == player && this.gameField[2][0] == player) { win = player }
        this.winner = win;
        return win;
    }
    noMoreTurns() {
        console.log(this.turnsCount);
        return this.turnsCount == 0 ? true : false;
    }

    isDraw() {
        if (this.turnsCount == 0 && this.winner == null) {
            return true;
        } else { return false }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
