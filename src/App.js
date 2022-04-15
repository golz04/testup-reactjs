import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import "./App.css";

function App() {
  // const user = "Haidar";
  // const status = <b>Lord Is Back !</b>;
  // const nilaiAwal = 1;
  // const nilaiAkhir = 2;

  return (
    // <div classNameName="App">
    //   <p>{user}</p>
    //   <p>{status}</p>
    //   <h3>{nilaiAwal + nilaiAkhir}</h3>
    // </div>

    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
