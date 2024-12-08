import React, { useState } from "react";
import "./DiceGame.css";

const DiceGame = () => {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [result, setResult] = useState("");

  const rollDice = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    setPlayer1(dice1);
    setPlayer2(dice2);

    if (dice1 > dice2) {
      setResult("Player 1 Wins! 🎉");
    } else if (dice1 < dice2) {
      setResult("Player 2 Wins! 🎉");
    } else {
      setResult("It's a Draw! 🤝");
    }
  };

  return (
    <div className="game-container">
      <h1>World Series of Dice</h1>
      <div className="dice-board">
        <div>
          <h2>Player 1</h2>
          <img
            src={`images/dice${player1}.png`}
            alt={`Dice ${player1}`}
            className="dice"
          />
        </div>
        <div>
          <h2>Player 2</h2>
          <img
            src={`images/dice${player2}.png`}
            alt={`Dice ${player2}`}
            className="dice"
          />
        </div>
      </div>
      <button onClick={rollDice} className="roll-button">
        🎲 Roll Dice
      </button>
      <h2>{result}</h2>
    </div>
  );
};

export default DiceGame;
