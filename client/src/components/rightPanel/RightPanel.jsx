import { Box, Button, Stack, Typography } from "@mui/material"
import { Cart } from "./cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../contexts"

export const RightPanel=() =>{
  const {cart} =useContext(CartContext)
    return (
    <Stack>
      <Typography variant="h6" textAlign="center">Cart</Typography>
      <Box>
        <Cart />
        </Box>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:8}}>
      <Button variant="contained" disabled={!cart.length}>Checkout</Button>
      </Box>
    </Stack>
    )
  }