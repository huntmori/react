import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function resetGameBoard() {
  return [
      ...initialGameBoard.map(
        function (item){
          return [...item];
        }
      )
  ];
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ players, setPlayers ] = useState({
    X : 'Player 1',
    O: 'Player 2'
  });

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = resetGameBoard();

  for(const turn of gameTurns) {
    const { square, player} = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = function(rowIndex, colIndex) {
    console.log('row', rowIndex, 'col', colIndex);

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex},
          player: currentPlayer,
        },
        ...prevTurns
      ];
      console.log(updatedTurns)
      return updatedTurns;
    });
  };

  const handleRestart = function () {
    setGameTurns([]);
    gameBoard = resetGameBoard();
  }

  const handlePlayerNameChange = function ( symbol, newName) {
    setPlayers(function(prevPlayers) {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players"  className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {
            (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />
        }
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}
        />      
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
