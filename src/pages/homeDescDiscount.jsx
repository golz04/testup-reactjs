import React from "react";

function Discount(props) {
    const {isDiscount, disc} = props;
    if (isDiscount == "true") {
        return(
        <b>Diskon Sebesar {disc}% Sampe Bangkrut</b>
        );
    } else {
        return(
        <b>Gaada Diskon Lagi Pelit</b>
        );
    }
}

export default Discount;