import React from "react";
import Image from "./homeImage";
import Reviews from "./homeReview";
import Description from "./homeDescription";

function Home() {
    return(
        <div>
            <div className="parentBox">
                <Image image="assets/image/bmw-1.png" alter="foto-produk-1" />
                <Description category="Mobil" title="BMW Ni Bos" isDiscount="true" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
                <Reviews />
            </div>
            <div className="parentBox">
                <Description category="Mobil" title="BMW Ni Sam" isDiscount="false" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
                <Image image="assets/image/bmw-2.png" alter="foto-produk-2" />
                <Reviews />
            </div>
            <div className="parentBox">
                <Image image="assets/image/bmw-3.png" alter="foto-produk-3" />
                <Description category="Mobil" title="BMW Ni Bos" isDiscount="false" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
            </div>
            <div className="parentBox">
                <Description category="Mobil" title="BMW Ni Sam" isDiscount="true" price="Rp.123.456.00,-" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nemo placeat sit, vel eum atque voluptates, minus blanditiis nulla mollitia ratione. Laudantium, eligendi. Nobis sit placeat totam asperiores cum." />
                <Image image="assets/image/bmw-4.png" alter="foto-produk-4" />
            </div>
        </div>
    );
}

export default Home;