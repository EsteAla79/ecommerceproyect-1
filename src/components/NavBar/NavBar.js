import './NavBar.css'
import { useState, useContext } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeContext } from '../../Context/ThemeContext';


const NavBar = () => {
  const { darkTheme } = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 

const categories = ["anejado", "joven"]

  return (
      <AppBar position="static" className={`header-primary ${darkTheme && 'dark-mode'}`}>
        <Toolbar>
            <img className='img' src="./LOGOBL.png"/>
            <Stack spacing={4} direction="row"></Stack>
            <div>
                <Button className='nav-btn' color="inherit"><Link to="/">Home</Link></Button>
            </div>
            <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='nav-btn' 
                  color="inherit"
                >
                  Products
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {categories.map( (cat) => {
                      return <MenuItem onClick={handleClose}><Link to={`/products/${cat}`}>{cat}</Link></MenuItem>
                  })} 
                </Menu>
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
