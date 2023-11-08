import React from 'react';
import scan from './scan.jpeg'
const Handlebutton= ({ handlePlaceOrder,reset }) => (
  <div className="checkout-button">
    <div className='imge'> <img src={scan}  style={{ width: "365px", height: "360px" }}></img></div>
   <div className='button-container'> <button onClick={handlePlaceOrder}>Place Order</button></div>
  </div>
);

export default Handlebutton;
