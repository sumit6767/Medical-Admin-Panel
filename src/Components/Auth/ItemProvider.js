import { useReducer } from "react";
import auth from "./CartContext";

const reducer = (state,action)=>{
    if(action.type==="add"){
        let flag = true;
        for(let item of state.items){
            if(item.id===action.item.id){
                action.item.amount = +action.item.amount;
                item.amount += (action.item.amount);
                flag = false;
                break;
            }
        }
        if(flag){
            state.items.push(action.item)
        }
        state.totalAmount += +(action.item.amount)*((+action.item.price))
        console.log(state.totalAmount)
        return {...state}
    }
}

const ItemProvider = (props)=>{

    const [cartState,setCartState] = useReducer(reducer,{items:[],totalAmount:0})
    const ctx = {
        items:cartState.items,
        totalAmount:+cartState.totalAmount,
        addItemHandler:addItemHandler,
        addExistingHandler:addExistingHandler,
        deleteItemHandler:deleteItemHandler
    }

    function addItemHandler(item){
        setCartState({type:"add",item:item})
    }
    function addExistingHandler(id){

    }
    function deleteItemHandler(id){
        
    }
    return(
        <auth.Provider value={ctx}>
            {props.children}
        </auth.Provider>
    )
}

export default ItemProvider