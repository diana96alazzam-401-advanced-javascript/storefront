const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
    { name: 'art', displayName: 'Art' },
    { name: 'make-up', displayName: 'Make-up' },
    { name: 'crafts', displayName: 'Crafts' },

  ],
  activeCategory: 'art',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ACTIVATE':
    return { categories: state.categories, activeCategory: payload };
  default:
    return state;
  }
};

// Actions
export const activate = (category) => {
  return {
    type: 'ACTIVATE',
    payload: category,
  };
};

