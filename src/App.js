import {useEffect, useState} from 'react'
import './App.css';



function App() {

  const [name , setName] = useState("test")

  useEffect(()=>{
    console.log("whath me!")
  },[name])

  useEffect(()=>{
    console.log("it will run just one time!")
  },[])

  return (
    <div>
      <label>name :</label>
      <input value={name} onChange={(e)=> {
        setName(e.target.value)
      }}/>
      {name.length === 4 && <small>cant type more than 4 letters</small>}

      <p>name is {name}</p>
      
      <input value="test"/>
    </div>
  );
}

export default App;
