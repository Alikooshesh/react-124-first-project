import {useEffect, useState} from 'react'
import './App.css';



function App() {
  const [data,setData] = useState([])
  
  async function deleteTodo(id) {
    try{
      const response = await fetch(`https://66d1843962816af9a4f3ec69.mockapi.io/todo/${id}`,{
        method : "DELETE"
      })
      if(response.ok){
        let temp = data
        temp = temp.filter(item => item.id !== id)
        setData(temp)
      }
    }
    catch(err){
      console.log(err)
    }
  }

  async function getTodoList() {
    try{
      const response = await fetch("https://66d1843962816af9a4f3ec69.mockapi.io/todo");
      const result = await response.json()
      setData(result)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getTodoList()
  },[])

  return (
    <div>
      {data.map(d => (
        <>
          <p>{d.title}</p>
          <button onClick={()=> deleteTodo(d.id)}>delete</button>
        </>
      ))}
    </div>
  );
}

export default App;
