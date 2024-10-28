import { useContext } from "react";
import { CartContext } from "../../../contexts";
import CartItem from "./CartItem";
import TotalCartPrice from "./TotalCartPrice";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, Stack, Typography } from "../../../common/components";
import { ImageIcon } from "../../../common/icons";

export const Cart = () => {
  const { cart, productRemoveFromCart } = useContext(CartContext);
  return (
    <Stack spacing={2} padding={2}>
       <Typography variant="h6" textAlign="center">
        Cart
      </Typography>
      <List sx={{ minWidth: 360, padding:4, display: "flex", flexDirection: "column" }}>
        {cart.map((cartItem, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <CartItem
              cartItem={cartItem}
              productRemoveFromCart={productRemoveFromCart}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TotalCartPrice />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Button variant="contained" disabled={!cart.length}>
          Checkout
        </Button>
      </Box>
      
    </Stack>
    
  );
};
