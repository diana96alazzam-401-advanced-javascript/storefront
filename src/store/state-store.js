const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
    { name: 'art', displayName: 'Art' },
    { name: 'make-up', displayName: 'Make-up' },
    { name: 'crafts', displayName: 'Crafts' },

  ],
  products: [
    {
      name: 'Design palette ', category: 'art', price: 10.00, inStock: 5,
      image: 'https://kitchendesignconcepts.com/wp-content/uploads/2018/06/2-1024x1024.jpg',
    },
    {
      name: 'Eye shadow', category: 'make-up', price: 20.00, inStock: 5,
      image: 'https://i2.wp.com/fastgarms.com/wp-content/uploads/2018/02/urban-decay-petite-heat-eyeshadow-palette-fastgarms.jpg?fit=1200%2C801&ssl=1&resize=350%2C200',
    },
    {
      name: 'Pochade Box ', category: 'art', price: 699.00, inStock: 5,
      image: 'https://joanbreckwoldt.com/wp-content/uploads/2010/07/1007_pochade4.jpg',
    },
    {
      name: 'Foot-wear', category: 'clothing', price: 5.00, inStock: 5,
      image: 'https://lh3.googleusercontent.com/proxy/r_UajldG8ooHjNJb1V6_t0YIx5BJhPPLth1gx1UAwwrNBceI-pNDqlnJjXD_CD2RBazcZNbDl2cBt6nLivxsvzWqI1_eJsdNDe2UwiuFUHIZdYzDqx0iOo8',
    },
    {
      name: 'Eye-shadow', category: 'make-up', price: 6.00, inStock: 5,
      image: 'https://cdn.shopify.com/s/files/1/0251/4645/8190/products/zee_4_2400x.jpg?v=1567722654',
    },
    {
      name: 'Double Oversized Rosewood Pen Box', category: 'crafts', price: 6.00, inStock: 5,
      image: 'https://www.arizonasilhouette.com/cart/graphics/00000001/AZPB17_274x274.jpg',
    },
    {
      name: 'Bracelet', category: 'crafts', price: 1.00, inStock: 5,
      image: 'https://www.fused-glass-jewelry.com/images/links/2906-Simplicity.jpg',
    },
    {
      name: 'Modern Rug for Kids', category: 'crafts', price: 1.00, inStock: 5,
      image: 'https://www.e-glue.fr/4700-large_default/kids-rug-arizona.jpg',
    },
    {
      name: 'Modern Cross Stitch Pattern', category: 'art', price: 1.00, inStock: 5,
      image: 'https://i.etsystatic.com/12310306/r/il/c13625/2052016498/il_570xN.2052016498_bj5z.jpg',
    },
    {
      name: 'Desert artwork', category: 'art', price: 1.00, inStock: 5,
      image: 'https://thumbs.dreamstime.com/b/modern-abstract-arizona-desert-background-frame-design-good-summer-sale-social-media-promotional-content-more-floral-170147147.jpg',
    },
    {
      name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,
      image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png',
    },
    {
      name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,
      image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png',
    },
    {
      name: 'Radio', category: 'electronics', price: 99.00, inStock: 15,
      image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png',
    },
    {
      name: 'Apples', category: 'food', price: .99, inStock: 500,
      image: 'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png',
    },
    {
      name: 'Eggs', category: 'food', price: 1.99, inStock: 12,
      image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
    },
    {
      name: 'Bread', category: 'food', price: 2.39, inStock: 90,
      image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png',
    },
  ],
  activeCategory: 'art',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ACTIVATE':
    return { categories: state.categories, products: state.products, activeCategory: payload };
  default:
    return state;
  }
};

// // Actions
export const activate = (category) => {
  return {
    type: 'ACTIVATE',
    payload: category,
  };
};

