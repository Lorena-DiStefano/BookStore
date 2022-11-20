import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btnCartW position-relative">
            <i className="bi bi-cart3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                0+
               
            </span>
        </button>

    )
}

export default CartWidget