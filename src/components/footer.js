import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import './products/products-style.css';


function Footer(props) {
  return (
    <AppBar position="static" color="default" >
      <section className='footerBar'>
        <div>
          <p>Copyright@diana 2020</p>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>Phone: 079</li>
            <li>Email: diana96alazzam@gmail.com</li>
          </ul>
        </div>
      </section>
    </AppBar>
  );
}

export default Footer;