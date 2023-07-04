import { useState } from "react";

// Single square button of the grid which is rendered 9 times.
function Square({ value, onSquareClick }) {
  //  It takes a value = X or O, and a function onSquareClick [handleClick in Board component] which is used to handle what happens if someone clicks the ith square.
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
// This component is the main component which manages the game play functionality, mostly.

function Board({ xIsNext, squares, onPlay }) {
  // This takes 3 important arguments coming from the Game component:
  // xIsNext: bool to check whose is the next turn,
  // squares --> latest snapshot of the 9 squares. as an array.
  // onPlay [handlePlay of Game] --> which handles the states based on current input from user.

  function handleClick(i) {
    // If someone has already won or the square is already filled then early return.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice(); //copy of the original snapshot.
    // Marking the new square which is clicked based on whose turn is it now.
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares); // handlePlay function in Game component sending the latest snapshot of the board game.
  }

  const winner = calculateWinner(squares); // function defined outside.

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  // based on the winner value received from the calculateWinner function status is rendered below.

  // entire board is rendered here.
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Kind of a warpper cum history manager function
export default function Game() {
  // two state hooks of react:
  // 1. history to store the last moves of the game.
  // 2. cuurentMove to track whose turn and which snapshot to use.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // based on the even/odd value we can track whose turn it is now.
  const xIsNext = currentMove % 2 === 0;
  // storing the last element of the history which is a 2d array storing 9 squares upto 8 moves.
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    // If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point. Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
    // It is like undo upto that point and then playing with fresh moves.
    // Each time a move is made, you need to update currentMove to point to the latest history entry.
    // removing excess info beyond the forked point in history by using the side buttons and then adding the latest move in history,
    // so game continues beyond this point.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // The below part manages the side list of history moves.
  // onclickHandler is jumpTo function here. This brings our state to an old configuration of the game and we move ahead from here after state updates.
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Producing the jsx code to be rendered in <ol> {moves} </ol> part below...

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
}
