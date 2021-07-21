import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <div className="App">
      Counter = {counter}
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
    </div>
  );
}

export default App;
