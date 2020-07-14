const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  console.log('inside cart reducer', state);
  const { type, payload } = action;
  switch (type) {
  case 'ADD':
    let newCart = state.cart.map(item => item);
    newCart.push(payload);
    return {cart: newCart};
  default:
    return state;
  }
};

// Actions
export const add = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};