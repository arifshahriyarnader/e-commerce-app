export const Cart = ({cart}) => {
    
  return (
      <ul>
      {cart.map((cartItem, index) =>(
          <li key={index}>{`${cartItem.name} x ${cartItem.quantity}`}</li>

      ))}
      </ul>
  )
}

