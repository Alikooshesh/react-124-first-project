import logo from './logo.svg';
import './App.css';
import Name from './components/name/name'

function App() {

  function handleBtnClick(id){
    alert(id)
  }

  return (
    <button onClick={()=>{
      handleBtnClick("test")
    }}>
      click me!
    </button>
  );
}

export default App;
