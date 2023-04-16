import React from "react";

const auth = React.createContext({items:[],totalAmount:0,addItemHandler:item=>{},addExistingHandler:(id)=>{},deleteItemHandler:id=>{}})

export default auth