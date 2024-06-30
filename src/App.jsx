import "./App.css";

import LudoBord from "./LudoBord";
import TodoList from "./TodoList";
import Lottery from "./Lottery";


function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}/>

    </>
  );
}

export default App;
