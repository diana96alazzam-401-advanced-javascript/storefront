import React from 'react';

import Cart from './cart';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';


import './products/products-style.css';
import { connect } from 'react-redux';


function Header(props) {
  const [showHide, setShowHide] = React.useState('none');

  const showCart = ()=> {
    if(showHide === 'block') setShowHide('none');
    if(showHide === 'none') setShowHide('block');
  };

  return (
    <AppBar position="static"
      style={{
        textAlign: 'center',
        backgroundColor: 'rgb(88,120,141)',
        fontSize: '2em',
        justifyContent: 'center',
        fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
        letterSpacing: '0.1vw',
      }}>
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <CssBaseline />
      Store Lab
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader 
              onClick={() => showCart()}
              component="div" id="nested-list-subheader">
            Cart({props.cart.length})
            </ListSubheader>
          }
          // className={classes.root}
        >
          <ListItem
            style={{
              display: showHide,
            }}>
            <Cart />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}


const mapStateToProps = (state) => {
  console.log('hello', state.cart.cart);
  return { cart: state.cart.cart };
};


export default connect(mapStateToProps)(Header);