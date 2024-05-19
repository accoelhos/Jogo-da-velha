import React, { useState } from "react";
import "./Jogo.css";
import circle from "./assets/anel-circular.png";
import x from "./assets/x.png";

function App() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const isBoardFull = (squares) => {
        return squares.every(square => square !== "");
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && isBoardFull(board);
    const nextPlayer = isXNext ? "X" : "O";
    const status = winner ? `Vencedor: ` : isDraw ? "Deu velha!" : `Próximo jogador: `;
    const statusClass = winner ? "text-winner" : (isXNext ? "text-x" : "text-o");

    let nextPlayerElement = null;
    if (!isDraw) {
        nextPlayerElement = winner ? winner : nextPlayer;
    }

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setIsXNext(true);
    };

    return (
        <div className="container flex flex-col items-center justify-center min-h-screen">
            <h2 className="title text-white">Jogo da velha</h2>
            <hr className="divider" />
            <div className="board mx-auto my-4 grid grid-cols-3 gap-4">
                {board.map((value, index) => (
                    <div key={index} className="boxes" onClick={() => handleClick(index)}>
                        {value && (
                            <img src={value === "X" ? x : circle} alt={value} className="icon" />
                        )}
                    </div>
                ))}
            </div>
            <div className="status text-white">
                {status}
                {nextPlayerElement && <span className={statusClass}>{nextPlayerElement}</span>}
            </div>
            <button className="btn-reset mt-4" type="button" onClick={resetGame}>Reiniciar</button>
        </div>
    );
}

export default App;
