import React, { useContext } from 'react';
import { AppContext } from './context';
import "./App.css"

const Products = () => {

    const {products,cartItems,setCartItems} = useContext(AppContext);

    const addCartValue = (item)=>{
         setCartItems([...cartItems,{...item,quantity:1}]);
    }
    
    return (
        <div className='main'>
            {
                products?.map((item, index) => {
                    return <div key={index} className='main-container'>
                        <div>
                            <img src={item.image} />
                        </div>
                        <div className='desc'>
                            <h4>{item.title}</h4>
                            <h5>₹.{item.amount}</h5>
                            <p>{item.description}</p>
                        </div>
                        <button className='cart' onClick={()=>addCartValue(item)}>Add to Cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Products