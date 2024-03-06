
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare,  }) {
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

    return <>
        <ol id="game-board">
            {gameBoard.map(function(row, rowIndex) {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>(
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>
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