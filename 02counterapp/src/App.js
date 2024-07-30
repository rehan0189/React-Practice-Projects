import { useState } from 'react'
import './App.css';

function App() {

  const [Counter,setCounter] = useState(15)
  
  const addValue = () => {
    if(Counter < 20){
      setCounter(Counter+1)
    }
    else
       alert("Counter can't be more than 20!")
    console.log(Counter)
  }
  const subtractValue = () => {
    if(Counter > 0){
      setCounter(Counter-1)
    }
    else
    alert("Counter can't be negative!")
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
