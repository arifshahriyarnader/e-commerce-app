import React from 'react'
import { CartProvider } from '../contexts'
import { Box } from '@mui/material'
import { LeftPanel, RightPanel } from '../components'

const HomePage = () => {
  return (
    <CartProvider>
    <Box sx={{display:"flex", gap:4,paddingLeft:4, paddingRight:4}}>
      <LeftPanel />
      <RightPanel />
  </Box>
  </CartProvider>
  )
}

export default HomePage
