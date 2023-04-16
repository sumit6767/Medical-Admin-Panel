import Header from './Components/Header/Header';
import './App.css';
import AddItem from './Components/InputItem/AddItem';
import Items from './Components/Item/Items';
import React,{useState} from 'react';
import CartCheckOut from './Components/Cart/CartCheckOut';

function App() {
  const [showCart,setShowCart] = useState(false)
  function onShow(){
    setShowCart(!showCart);
  }

  return (
    <>
    {
      showCart ? <CartCheckOut onClick={onShow}/>:null
    }
    <Header onShow={onShow}/>
    <AddItem />
    <Items />
    </>
  );
}

export default App;
