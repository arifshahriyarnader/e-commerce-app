import React, { useContext } from 'react'
import { CartContext } from '../../../contexts';

const TotalCartPrice = () => {
    const {cart} = useContext(CartContext);
    const totalCartPrice=cart.reduce((total, cartItem)=>  {
        return total + cartItem.price * cartItem.quantity
    },0);
    if(cart.length===0){
        return null;
    }
  return (
    <div>
        <p>Total Price: {totalCartPrice}</p>
     
    </div>
  )
}

export default TotalCartPrice
