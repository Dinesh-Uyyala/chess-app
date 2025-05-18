export class BoardComponent {
  board: string[][];
  currentPlayer: string;

  constructor() {
    this.board = this.initializeBoard();
    this.currentPlayer = 'white';
  }

  ngOnInit() {
    // Additional initialization logic can go here
  }

  initializeBoard(): string[][] {
    const initialBoard = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];
    return initialBoard;
  }

  movePiece(from: { row: number; col: number }, to: { row: number; col: number }) {
    const piece = this.board[from.row][from.col];
    this.board[to.row][to.col] = piece;
    this.board[from.row][from.col] = '';
    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
  }
}