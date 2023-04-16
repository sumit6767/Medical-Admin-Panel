import React from "react";
import Input from "./Input";
import Button from "../UI/Button";
import './AddItem.css'

const AddItem = (props)=>{
    function add(){

    }
    return(
        <div className="addForm">
            <form className="form">
                <Input type={"text"} name="Name" label="name" />
                <Input type={"text"} name="Desc" label="desc" />
                <Input type={"number"} name="Price" label="price" />
                <Button onClick={add}>Add Item</Button>
            </form>
        </div>
    )
}

export default AddItem