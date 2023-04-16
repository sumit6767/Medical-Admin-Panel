import React from "react";
import './Cart.css';
import auth from "../Auth/CartContext";

export default function Operator(props){
    const ctx = React.useContext(auth)
    function addItem(){
        ctx.addExistingHandler(props.id)
    }
    function removeItem(){
        ctx.deleteItemHandler(props.id)
    }
    return(
        <button className="operate" onClick={props.type==="add"?addItem:removeItem}>
            {props.children}
        </button>
    )
}