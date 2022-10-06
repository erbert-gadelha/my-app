import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <h1>Clica aqui não vei</h1>
      <button onClick={() => {window.alert("não clique, boy!");}}>não clique!</button>
    </div>
  );
}

export default App;
