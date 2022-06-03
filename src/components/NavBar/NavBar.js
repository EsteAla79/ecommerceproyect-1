import './NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    
  return (
      <AppBar position="static">
        <Toolbar>
            <img className='img' src="./LOGOBL.png"/>
            <Stack spacing={4} direction="row"></Stack>
            <div>
                <Button className='nav-btn' color="inherit"><Link to="/">Home</Link></Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit">Products</Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit"><Link to="/contact">Contatc</Link></Button>
            </div>
            <div>
                <Button className='nav-btn' color="inherit">FqA</Button>
            </div>
          <Button color="inherit">Login</Button>
            <CartWidget/>
        </Toolbar>
      </AppBar>


    )
}

export default NavBar
