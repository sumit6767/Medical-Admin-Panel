import React, { useContext, useRef } from "react";
import Button from "../UI/Button";
import auth from "../Auth/CartContext";

const EachItem = (props)=>{
    const inputRef = useRef(null);
    const ctx = useContext(auth)
    function addHandler(e){
        e.preventDefault();
        ctx.addItemHandler({...props,amount:inputRef.current.value})
    }
    return(
        <li>
            {props.name} {props.desc} {props.price}
            <form onSubmit={addHandler}>
                <input type="number" min="0" max= "200" step="1" ref={inputRef}/>
                <Button>Add to Cart</Button>
            </form>
        </li>
    )
}
export default EachItem