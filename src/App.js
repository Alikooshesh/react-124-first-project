import logo from './logo.svg';
import './App.css';
import Name from './components/name/name'

function App() {

  return (
    <input onChange={(e)=> console.log(e.target.value)}/>
  );
}

export default App;
