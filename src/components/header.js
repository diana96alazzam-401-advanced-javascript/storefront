import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';


import './products/products-style.css';


function Header(props) {
  return (
    <AppBar position="static" style={{ backgroundColor:'rgb(88,120,141)' }} >
      {/* <div className='headerapp'> */}
        <Toolbar >
          <CssBaseline />
        Store Lab
        </Toolbar>
      {/* </div> */}
    </AppBar>
  );
}

export default Header;