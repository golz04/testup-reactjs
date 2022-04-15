import React from "react";

function Image(props) {
    const {image, alter} = props;
    return (
        <div className="foto">
        <img src={image} alt={alter} />
        </div>
    );
}

export default Image;