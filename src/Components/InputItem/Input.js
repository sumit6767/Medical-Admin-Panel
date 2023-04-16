import React from "react";

const Input = (props)=>{
    return(
        <div >
            <label htmlFor={props.label}>{props.name}</label>
            <input type={props.text} name={props.name} id={props.label}/>
        </div>
    )
}
export default Input