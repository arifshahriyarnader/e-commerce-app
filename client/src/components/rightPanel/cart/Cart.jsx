import { useContext } from "react"
import { CartContext } from "../../../contexts";
import CartItem from "./CartItem"
import TotalCartPrice from "./TotalCartPrice";
import {Avatar, Box, List, ListItem, ListItemAvatar } from "@mui/material";
import { ImageIcon } from "../../../common/icons";

export const Cart = () => {
  const {cart, productRemoveFromCart} =useContext(CartContext);
  return (
    <Box>
      <List sx={{minWidth:360,display:"flex", flexDirection:"column"}}>
      {cart.map((cartItem, index) =>(
          <ListItem key={index}>
             <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
            <CartItem cartItem={cartItem}
             productRemoveFromCart={productRemoveFromCart} />
          </ListItem>
      ))}
      </List>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <TotalCartPrice />
      </Box>
      </Box> 
    
  )
}

