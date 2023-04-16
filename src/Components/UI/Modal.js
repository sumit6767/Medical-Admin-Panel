import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css'

const OverLay = (props)=>{
    return(
        <div className="modal">
            {props.children}
        </div>
    )
}

const Back=(props)=>{
    return(
        <div className="back">

        </div>
    )
}

const Modal =(props)=>{
    return(
        <>      
        {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,document.getElementById("overlay"))}
        {ReactDOM.createPortal(<Back />,document.getElementById("back"))}
        </>
    )
}

export default Modal