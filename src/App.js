import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
      <div className="parentBox">
        <Gambar image="assets/image/bmw-1.png" alter="foto-produk-1" />
        <Deskripsi category="Mobil" title="BMW Ni Bos" isDiscount="true" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
      </div>
      <div className="parentBox">
        <Deskripsi category="Mobil" title="BMW Ni Sam" isDiscount="false" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
        <Gambar image="assets/image/bmw-2.png" alter="foto-produk-2" />
      </div>
      <div className="parentBox">
        <Gambar image="assets/image/bmw-3.png" alter="foto-produk-3" />
        <Deskripsi category="Mobil" title="BMW Ni Bos" isDiscount="false" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
      </div>
      <div className="parentBox">
        <Deskripsi category="Mobil" title="BMW Ni Sam" isDiscount="true" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
        <Gambar image="assets/image/bmw-4.png" alter="foto-produk-4" />
      </div>
      <Footer />
    </div>
  );

  function Gambar(props) {
    const {image, alter} = props;
    return (
      <div className="foto">
        <img src={image} alt={alter} />
      </div>
    );
  }

  function Deskripsi(props) {
    const {category, title, price, desc, isDiscount} = props;
    return (
      <div className="deskripsi">
          <div>
            <p className="cate">{category}</p>
            <h1 className="title">{title}</h1>
            <Diskon isDiscount={isDiscount} />
            <p className="price">{price}</p>
            <p className="info">{desc}</p>
            <button onClick={(e) => Buy({title, price, e})} className="buy">Beli</button>
          </div>
        </div>
    );
  }

  function Diskon(props) {
    const {isDiscount} = props
    if (isDiscount == "true") {
      return(
        <b>Diskon Sebesar 50% Sampe Bangkrut</b>
      );
    } else {
      return(
        <b>Gaada Diskon Lagi Pelit</b>
      );
    }
  }

  function Buy(e) {
    alert("Beli Mobil '" + e.title + "' - " + "Seharga : '" + e.price + "'");
  }
}

export default App;
