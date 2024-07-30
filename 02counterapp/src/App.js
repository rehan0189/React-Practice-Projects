import { useState } from 'react'
import './App.css';

function App() {

  const [Counter,setCounter] = useState(15)
  
  const addValue = () => {
    setCounter(Counter+1)
    console.log(Counter)
  }
  const subtractValue = () => {
    setCounter(Counter - 1)
    console.log(Counter)
  }

  return (
    <>
    <h1>React with Sandhu</h1>
    <h2>Counter Value:{Counter}</h2>
    <button
    onClick={addValue}
    > Add Number {Counter} </button>
    <br/><br/>
    <button
    onClick={subtractValue}
    > Subtract Number{Counter} </button>
    <p> Counter: {Counter}</p>
    </>
  );
}

export default App;
