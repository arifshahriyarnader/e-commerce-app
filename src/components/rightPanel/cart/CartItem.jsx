
const CartItem = ({cartItem, productRemoveFromCart}) => {
  const totalPrice= cartItem.price *  cartItem.quantity;
    const handleProductRemoveFromCart=()=>{
        productRemoveFromCart({productId:cartItem.id})
    }
  return (
    <div className="flex gap-4">
              <p>{`${cartItem.name}- ${cartItem.price} x ${cartItem.quantity}= $${totalPrice}`}</p>
              <button onClick={handleProductRemoveFromCart}>Remove</button>
            </div>
  )
}

export default CartItem
