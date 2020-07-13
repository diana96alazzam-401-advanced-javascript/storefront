import React from 'react';
import {connect} from 'react-redux';

function Cart(props){
  return(
    <ul>
      {props.cart.map(item=> {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.stateStore.cart };
};

export default connect(mapStateToProps)(Cart);