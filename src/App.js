import logo from './logo.svg';
import './App.css';
import Name from './components/name/name'

function App() {

  const flag = true

  // if(!flag){
  //   return <p>you cant see this component</p>
  // }

  return (
    <div className="App">
      {flag && <Name name="Reza" age={27} hasError={true}/>}
      {flag ? <Name name="Reza" age={27}/> : <p>you cant see this component</p>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name name="ali" age="25"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
