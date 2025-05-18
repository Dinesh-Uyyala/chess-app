# Chess Application

This is a simple chess application built with Angular. The application features a chessboard and allows users to move pieces according to the rules of chess. It utilizes attractive icons for the chess pieces to enhance the user interface.

## Project Structure

```
chess-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── board
│   │   │   │   ├── board.component.ts
│   │   │   │   ├── board.component.html
│   │   │   │   ├── board.component.css
│   │   │   ├── piece
│   │   │   │   ├── piece.component.ts
│   │   │   │   ├── piece.component.html
│   │   │   │   ├── piece.component.css
│   │   ├── app.module.ts
│   ├── assets
│   │   ├── icons
│   │   │   ├── chess-icons.css
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd chess-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   ng serve
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4200` to view the application.

## Features

- Interactive chessboard with draggable pieces.
- Attractive icons for each chess piece.
- Responsive design for various screen sizes.

## Usage

- Click and drag pieces to move them on the board.
- The application enforces basic chess rules for piece movement.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.