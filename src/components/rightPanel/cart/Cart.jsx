import CartItem from "./CartItem"

export const Cart = ({cart,  productRemoveFromCart}) => {
    
  return (
      <ul>
      {cart.map((cartItem, index) =>(
          <li key={index}>
            <CartItem cartItem={cartItem}
              productRemoveFromCart={productRemoveFromCart} />
          </li>

      ))}
      </ul>
  )
}

