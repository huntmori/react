import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
import { useState } from "react";

function App() {
  
  const [ activePlayer, setActivePlayer ] = useState('X');
  const [ gameTurns, setGameTurns ] = useState([]);

  const handleSelectSquare = function() {
    setActivePlayer(function (currentActivePlayer) {
      return currentActivePlayer === 'X' ? 'O' : 'X';
    });

  };

  return (
    <main>
      <div id="game-container">
        <ol id="players"  className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />      
      </div>
      <Log />
    </main>
  )
}

export default App
