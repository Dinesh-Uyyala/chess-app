import { HttpClient } from '@angular/common/http';

export class PieceComponent {
  pieceType: string;
  pieceColor: string;
  httpClient: HttpClient;

  constructor(pieceType: string, pieceColor: string, httpClient: HttpClient) {
    this.pieceType = pieceType;
    this.pieceColor = pieceColor;
    this.httpClient = httpClient;
  }

  renderPiece() {
    // Logic to render the piece based on type and color
  }
 
}