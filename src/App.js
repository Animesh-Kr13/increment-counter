import './App.css';
import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <div>
      <h1 className="number">{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;