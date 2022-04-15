import React from "react";

function Discount(props) {
    const {isDiscount} = props;
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

export default Discount;