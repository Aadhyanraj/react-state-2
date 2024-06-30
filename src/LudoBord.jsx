import { useState } from "react";

export default function LudoBord() {
  let [moves, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    // console.log(`moves.blue = ${moves.blue}`);
    setMove((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  };
  let updateGreen = () => {
    // console.log(`moves. green = ${moves.green}`)
    setMove((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  };
  let updateRed = () => {
    // console.log(`moves.red = ${moves.red}`);
    setMove((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  };

  let updateYellow = () => {
    // console.log(`moves.yellow = ${moves.yellow}`);
    setMove((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  return (
    <div>
      <h1>Ludo Begins</h1>
      <div className="bord">
        <p>Blue Moves ={moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>green Moves ={moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Yellow Moves ={moves.yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
