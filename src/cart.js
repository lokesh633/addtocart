import React, { useContext } from 'react';
import "./cart.css";
import { AppContext } from './context';



const Cart = () => {

  const { cartItems,setCartItems } = useContext(AppContext);

  const handleMinus = (i)=>{
     setCartItems(cartItems.map((item,index)=>{
         if(i===index){
          if(item.quantity==1){
            return item;
          }else{
            return {...item,quantity:item.quantity-1};
          }
          
         }else{
          return item;
         }
     }))
  }

  const handlePlus = (i)=>{
    setCartItems(cartItems.map((item,index)=>{
    if(i===index){
        return {...item,quantity:item.quantity+1}
     }else{
      return item;
     }
    }))
  }

  return (
    <div className='cart-container'>
      <div className='cart-main'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Amount</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
              {
                cartItems?.map((item,index)=>{
                  return<tr>
                      <th><img src={item.image}/></th>
                      <th>{item.title}</th>
                      <th>₹, {item.amount}</th>
                      <th><button className='qminus' onClick={()=>handleMinus(index)} >-</button>{" "}{item.quantity}{" "}<button onClick={()=>handlePlus(index)}  className='qplus'>+</button></th>
                      <th>₹, {item.amount*item.quantity}</th>
                     </tr>
                })
              }
              <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Total</th>
                      <th>
                      ₹, {
                           cartItems?.map((item)=>item.quantity*item.amount).reduce((a,b)=>a+b,0) 
                        } 
                      </th>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart