import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btnCartW position-relative">
            <i className="bi bi-cart3"></i>
            <span className=" mCart position-absolute top-0 start-100 translate-middle badge rounded-pill">
                0+
               
            </span>
        </button>

    )
}

export default CartWidget