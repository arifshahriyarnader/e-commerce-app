import { Stack } from '@mui/material'
import React from 'react'
import { AppBar, Footer } from '../../components'



export const Layout = ({children}) => {
  return (
    <Stack>
      <AppBar />
      {children}
      <Footer />
    </Stack>
  )
}


