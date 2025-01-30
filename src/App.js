import {useState} from 'react'
import './App.css';
import Decrease from './components/decrease';

function App() {

  const [number,setNumber] = useState(5)

  function decrease(){
    setNumber(number-1)
    console.log(number)
  }

  function increase(){
    setNumber(number+1)
    console.log(number)
  }

  return (
    <div>
      <Decrease number={number} setNumber={setNumber}/>
      <p>number is {number}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
