import React from 'react';
import { connect } from 'react-redux';

import ListItemText from '@material-ui/core/ListItemText';



function Cart(props) {
  return (
    <ul>
      {props.cart.map(item => {
        return <ListItemText primary={item.name} />;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  console.log('hello', state);
  return { cart: state.cart.cart };
};


export default connect(mapStateToProps)(Cart);