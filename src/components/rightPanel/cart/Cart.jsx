import { useContext } from "react"
import { CartContext } from "../../../contexts";
import CartItem from "./CartItem"
import TotalCartPrice from "./TotalCartPrice";

export const Cart = () => {
  const {cart, productRemoveFromCart} =useContext(CartContext);
  return (
    <div>
      <ul>
      {cart.map((cartItem, index) =>(
          <li key={index}>
            <CartItem cartItem={cartItem}
             productRemoveFromCart={productRemoveFromCart} />
          </li>
      ))}
      </ul>
      <TotalCartPrice />
      </div>
    
  )
}

