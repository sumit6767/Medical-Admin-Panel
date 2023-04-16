import React, { useContext } from "react";
import './Cart.css'
import auth from "../Auth/CartContext";

const Cart = (props)=>{
    const ctx = useContext(auth);
    const totalItems = ctx.items.reduce((value,item)=>{
        console.log(typeof item.amount)
        item.amount = +item.amount
        return value + (item.amount);
    },0)
    return(
        <div className={"action-cart cart"} onClick={props.onShow}>
            <span> <i className='fas fa-cart-plus'></i> </span>
            <span className="text">Your Carts</span>
            <span className="count">{totalItems}</span>
        </div>
    )
}

export default Cart