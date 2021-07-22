import "./App.css";
import { useState, useEffect } from "react";
import useTitle from "./hooks/useTitle";

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("hay un cambio en el state");
  }, []);

  useTitle(counter + "");

  return (
    <div className="App">
      Counter = {counter}
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
