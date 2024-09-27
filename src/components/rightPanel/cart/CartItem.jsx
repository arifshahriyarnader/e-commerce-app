import React from 'react'

const CartItem = ({cartItem, productRemoveFromCart}) => {
    const handleProductRemoveFromCart=()=>{
        productRemoveFromCart({productId:cartItem.id})
    }
  return (
    <div className="flex gap-4">
              <p>{`${cartItem.name} x ${cartItem.quantity}`}</p>
              <button onClick={handleProductRemoveFromCart}>Remove</button>
            </div>
  )
}

export default CartItem
