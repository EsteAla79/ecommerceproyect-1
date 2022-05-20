import './NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';
import Stack from '@mui/material/Stack';
import CartIcon from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
            <img className='img' src="./LOGOBL.png" />
            <Stack spacing={4} direction="row"></Stack>
            <div>
                <Button className='nav-btn' color="inherit">Home</Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit">Products</Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit">Contac</Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit">FqA</Button>
            </div>
          <Button color="inherit">Login</Button>
          <div>
            <CartIcon/>
          </div>
          
        </Toolbar>
      </AppBar>


    )
}

export default NavBar
