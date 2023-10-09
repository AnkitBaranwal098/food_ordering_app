import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./Header.css"
const header = () => {
  const srcUrl = "https://png.pngtree.com/element_our/png/20180918/chef-cooking-fried-chicken-and-delicious-sign-png_103460.jpg"
  return (
    <Box className="header">
      <Box className="logo-container">
        <img className='logo'
          src={srcUrl}
          alt='logo'>
        </img>
      </Box>
      <Stack
        className='btn-stack'
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Button variant="text" className='header-btn' style={{ color: "rgb(40,44,63)", fontWeight: "600" }}>
          Home
        </Button>
        <Button variant="text" className='header-btn' style={{ color: "rgb(40,44,63)", fontWeight: "600" }}>
          Menu
        </Button>

          <Button variant="text" className='header-btn' style={{ color: "rgb(40,44,63)", fontWeight: "600" }}>
            <ShoppingBagIcon />&nbsp;Cart
          </Button>
      </Stack>
    </Box>
  )
}

export default header
