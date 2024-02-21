import React, { useContext } from 'react';
import "./nav.css"
import { AppContext } from './context';



const Nav = () => {
  const {setCartShowHide,cartItems} = useContext(AppContext)
  return (
    <div className='nav-main'>
      <h1 onClick={()=>setCartShowHide(false)}>Mobify</h1>
      <ul>
        <li onClick={()=>setCartShowHide(false)}>Home</li>
        <li>Login</li>
        <li>App</li>
      </ul>
      <h2 onClick={()=>setCartShowHide(true)}>Cart <sup>{cartItems.length}</sup></h2>
    </div>
  )
}

export default Nav