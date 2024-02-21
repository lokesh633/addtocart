import React, { useState} from "react";
import { AppContext } from "./context";
import Nav from "./nav";
import Cart from "./cart";
import Products from "./products";
import Iphone from "./images/i phone.jpg"
import Redmi from "./images/redmi.jpg"
import Oppo from "./images/oppo.jpg"
import Samsung from "./images/samsung.jpg"

function App() {

  const Data = [
    {title:"I phone",image:Iphone,amount:"87777",description:"Apple iPhone 14 Plus (256 GB) - (Product) RED"},
    {title:"Oppo",image:Oppo,amount:"15490",description:"Oppo A78 (Aqua Green, 8GB RAM, 128GB Storage)"},
    {title:"Samsung",image:Samsung,amount:"25999",description:"Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)"},
    {title:"Redmi",image:Redmi,amount:"18910",description:"Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)"}
]

  const [products, setProducts] = useState(Data)
  const [cartItems,setCartItems] = useState([]);
  const [cartShowHide,setCartShowHide] = useState(false);

  return (
    <AppContext.Provider value={{products,cartItems,setCartItems,setCartShowHide}}>
      <Nav/>
      {
        cartShowHide ? <Cart/>:<Products/>
      }
    </AppContext.Provider>
  );
}

export default App;
