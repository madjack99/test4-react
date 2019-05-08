import React from "react";
import ChessField from "./ChessField";
import "./app.css";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// create an array of 64 squares with unique name for each eg. a1, c4, d8
let chessField = letters.reduce(function(acc, letter, index) {
  for (let item of numbers) {
    acc.push(letter + item);
  }
  return acc.map(item => item.toUpperCase());
}, []);

// create element to display letters on the chessboard
const lettersLine = letters.map(letter => {
  return <div key={letter}>{letter}</div>;
});

// create element to display numbers on the chessbord
const numbersLine = numbers.map(number => {
  return <div key={number}>{number}</div>;
});

function App() {
  return (
    <div className="App">
      <div className="lettersLine">{lettersLine}</div>
      <div className="middleLine">
        <div className="numbersLine">{numbersLine}</div>
        <ChessField chessField={chessField} />
        <div className="numbersLine">{numbersLine}</div>
      </div>
      <div className="lettersLine">{lettersLine}</div>
    </div>
  );
}

export default App;
