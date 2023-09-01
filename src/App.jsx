 import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [player1, setPlayer1] = useState({
    name: "Player 1",
    color: "orchid",
    hitpoints: 100,
    turn: true,
  });

  const [player2, setPlayer2] = useState({
    name: "Player 2",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: false,
  });

  const [dice, setDice] = useState(0);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDice(randomValue);

    // Update hit points based on the dice value
    if (player1.turn) {
      setPlayer2(prevPlayer2 => ({
        ...prevPlayer2,
        hitpoints: prevPlayer2.hitpoints - randomValue,
      }));
    } else {
      setPlayer1(prevPlayer1 => ({
        ...prevPlayer1,
        hitpoints: prevPlayer1.hitpoints - randomValue,
      }));
    }

    // Toggle turn
    setPlayer1(prevPlayer1 => ({ ...prevPlayer1, turn: !prevPlayer1.turn }));
    setPlayer2(prevPlayer2 => ({ ...prevPlayer2, turn: !prevPlayer2.turn }));
  };

  return (
    <div>
      <h1>Color Battle</h1>
      <div>
        <h2>{player1.name}</h2>
        <p>Hit Points: {player1.hitpoints}</p>
        <button onClick={rollDice} disabled={!player1.turn}>
          {player1.turn ? "Roll" : "Wait"}
        </button>
      </div>
      <div>
        <h2>{player2.name}</h2>
        <p>Hit Points: {player2.hitpoints}</p>
        <button onClick={rollDice} disabled={!player2.turn}>
          {player2.turn ? "Roll" : "Wait"}
        </button>
      </div>
      <div>
        <h2>Dice Value: {dice}</h2>
      </div>
    </div>
  );
}

export default App;


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <header>
//       <h1>Color-Battle</h1>
//       </header>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
