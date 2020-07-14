import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/categories';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



function Categories(props) {
  return (

    <Breadcrumbs aria-label="breadcrumb" >

      {props.categories.map(category => {
        return (<Link key={category.name} color="inherit" onClick={() => props.activate(category.name)}>
          {category.name}
        </Link>);
      })}


    </Breadcrumbs>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.categories.categories };
};

const mapDispatchToProps = { activate };


export default connect(mapStateToProps, mapDispatchToProps)(Categories);