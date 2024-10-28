import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
   <Stack>
    <Typography variant='h6'>Welcome Admin!</Typography>
    <Button color="inherit" component={Link} to="/admin">Dashboard</Button>
    <Button color="inherit" component={Link} to="/admin/inventory">Inventory</Button>
    <Button color="inherit" component={Link} to="/admin/add-products">Add Products</Button>
    <Button color="inherit" component={Link} to="/admin/admin-profile">Profile</Button>
    <Outlet />
   </Stack>
  )
}

