import { IconButton, ListItemText } from "@mui/material";
import { DeleteIcon } from "../../../common/icons";

const CartItem = ({ cartItem, productRemoveFromCart }) => {
  const totalPrice = cartItem.price * cartItem.quantity;
  const handleProductRemoveFromCart = () => {
    productRemoveFromCart({ productId: cartItem.id });
  };
  return (
    <>
      <ListItemText
        primary={`${cartItem.name}- ${cartItem.price} x ${cartItem.quantity}= $${totalPrice}`}
      />
      <IconButton
        color="error"
        variant="outlined"
        onClick={handleProductRemoveFromCart}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default CartItem;
