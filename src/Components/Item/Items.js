import React from "react";
import EachItem from "./EachItem";

const Items = (props)=>{
    const itemList = [{name:"dolo",desc:"relief fever",price:"100",amount:1,id:0},
    {name:"dolo",desc:"relief fever",price:"200",amount:1,id:1},
    {name:"dolo",desc:"relief fever",price:"120",amount:1,id:2},
    {name:"combiflaum",desc:"relief fever",price:"100",amount:1,id:3}]

    return(
        <div>
            <ul>
            {
                itemList.map((item,value)=>{
                    return <EachItem name={item.name}  desc={item.desc} key={Math.random()} price={item.price} amount={item.amount}/> 
                })
            }
            </ul>
        </div>
    )
}

export default Items