
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    return <>
        <ol id="game-board">
            {initialGameBoard.map(function(row, rowIndex) {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>(
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>                    
            })}
        </ol>
    </>
}