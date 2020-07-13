import React from 'react';
import { connect } from 'react-redux';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './products-style.css';

function Products(props) {
  console.log('active', props.activeCategory);
  return (
    <section className='products'>
      {
        props.products.map(product => {
          if (product.category === props.activeCategory) {

            return (
              <Card key={product.name} className='uiCard' style={{ margin: '5vh', height: '60vh', width:'20vw' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="190"
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    ADD TO CART
                  </Button>
                  <Button size="small" color="primary">
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>);
          }
        })}
    </section>
  );
}


// <ul>  
//   {props.products.map(product=> {
//     if (product.category === props.activeCategory){
//       return  <li>{product.name}</li>
//     }
//   })}
// </ul>


const mapStateToProps = (state) => {
  console.log('inside products', state);
  return { products: state.stateStore.products, activeCategory: state.stateStore.activeCategory };
};


export default connect(mapStateToProps)(Products);