import React from "react";
import Discount from "./homeDescDiscount";
import Buy from "./homeDescBuy";

function Description(props) {
    const {category, title, price, desc, isDiscount} = props;
    const benefits = ['Catnya Bagus', 'Mobil Mewah Pastinya', 'Keren Juga Lur'];
    const listBenefits = benefits.map((e) =>
        <li>{e}</li>
    );

    return (
        <div className="deskripsi">
            <div>
                <p className="cate">{category}</p>
                <h1 className="title">{title}</h1>
                <Discount isDiscount={isDiscount} />
                <p className="price">{price}</p>
                <p className="info">{desc}</p>
                <ul>
                {listBenefits}
                </ul>
                <br />
                <button onClick={(e) => Buy({title, price, e})} className="buy">Beli</button>
            </div>
        </div>
    );
}

export default Description;