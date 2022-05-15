import './NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';


const NavBar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
            <img src="./logo.png" />
            <div>
                <Button className="Boton" color="inherit">Home</Button>
            </div>
            <div>
                <Button className="Boton" color="inherit">Products</Button>
            </div>
            <div>
                <Button className="Boton" color="inherit">Contac</Button>
            </div>
            <div>
                <Button className="Boton" color="inherit">FqA</Button>
            </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>


    )
}

export default NavBar