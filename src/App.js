import {useEffect, useState} from 'react'
import './App.css';

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function App() {
  const [email,setEmail] = useState("")
  const [err,setErr] = useState(true)

  useEffect(()=>{
    if(EMAIL_REGEX.test(email)){
      setErr(false)
    }else{
      setErr(true)
    }
  },[email])

  return (
    <div>
      <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <button disabled={err} onClick={()=> alert("it submitted")}>submit</button>
    </div>
  );
}

export default App;
