
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
    /**
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    const handleSelectSquare = function (rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard].map(innerArray => [...innerArray]);
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })

        onSelectSquare();
    } 
    */
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player} = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return <>
        <ol id="game-board">
            {gameBoard.map(function(row, rowIndex) {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>(
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>                    
            })}
        </ol>
    </>
}