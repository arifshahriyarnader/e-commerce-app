import { Badge, Box, Drawer, IconButton } from '../../common/components'
import React, { useContext, useState } from 'react'
import { ShoppingCartIcon } from '../../common/icons'
import { Cart } from '../rightPanel/cart/Cart'
import { CartContext } from '../../contexts'

export const CartMenu = () => {
    const {cart} = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false);
    const toggleCart =() =>{
        setOpenCart((prev) => !prev);
    }
  return (
    <>
    <Badge badgeContent={cart.length} color="primary">
    <IconButton color="inherit" onClick={toggleCart} >
    <ShoppingCartIcon />
  </IconButton>
  </Badge>
  <Drawer open={openCart} anchor="right" onClose={toggleCart}>
  <Box>
    <Cart />
  </Box>
  </Drawer>
  </>
  );
}


