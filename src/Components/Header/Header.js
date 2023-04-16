import React from "react";
import Cart from "../Cart/Cart";
import './Header.css'

function Header(props){
    return(
        <div className="background">
        <div className="header">
            <h2>Medicine Shops</h2>
            <Cart onShow={props.onShow} />
        </div>
        </div>
    )
}

export default Header