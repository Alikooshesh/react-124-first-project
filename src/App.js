import {useState} from 'react'
import './App.css';
import Decrease from './components/decrease';


function App() {

  const [name , setName] = useState("test")

  return (
    <div>
      <label>name :</label>
      <input value={name} onChange={(e)=> {
        if(e.target.value.length<5){
          setName(e.target.value)
        }
      }}/>
      {name.length === 4 && <small>cant type more than 4 letters</small>}

      <p>name is {name}</p>
      
      <input value="test"/>
    </div>
  );
}

export default App;
