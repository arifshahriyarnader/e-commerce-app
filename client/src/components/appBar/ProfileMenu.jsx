import { Link } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem } from '../../common/components'
import React, { useState } from 'react'

export const ProfileMenu = () => {
    const [openAdminMenu, setOpenAdminMenu] =useState(false);
    const toggleAdminMenu=() => setOpenAdminMenu((prev) =>  !prev)
    
  return (
    <>
    <IconButton onClick={toggleAdminMenu}>
        <Avatar sx={{height:24, width:24}} />
    </IconButton>
    <Menu open={openAdminMenu} sx={{mt:'32px'}}
     anchorOrigin={{vertical:'top', horizontal:'right' }} onClose={toggleAdminMenu}>
    <MenuItem><Link to="/admin">Dashboard</Link></MenuItem>
    <MenuItem><Link to="/admin/inventory">Inventory</Link></MenuItem>
    <MenuItem><Link to="/admin/admin-profile">Profile</Link></MenuItem>
    
    </Menu>
    </>
  )
}

