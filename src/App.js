import logo from './logo.svg';
import './App.css';

function App() {
  const user = "Haidar";
  const status = <b>Lord Is Back !</b>;
  const nilaiAwal = 1;
  const nilaiAkhir = 2;

  return (
    <div className="App">
      <p>{user}</p>
      <p>{status}</p>
      <h3>{nilaiAwal + nilaiAkhir}</h3>
    </div>
  );
}

export default App;
