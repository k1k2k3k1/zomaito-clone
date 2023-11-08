import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
 
  return (
    <div>
      <nav>
        <nav className="navbar">
         <Link to= '/'> <p  className="home"> 
            Home
          </p> </Link>
          <Link to="/about"><div className="navbar-brand"  >
       <a className="cart">Shopping Cart</a>  
           
          </div></Link> 
        </nav>
      </nav>
    </div>
  );
};

export default Nav;
