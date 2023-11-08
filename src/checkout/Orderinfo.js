import React from 'react';


const Orderinfo = ({ orderInfo }) => (
  <div className="order-summary">
    <h2>Order Summary</h2>
    <div className='order' style={{ color: 'blue', fontSize: '26px' }}>{orderInfo}</div>
   
  </div>
);

export default Orderinfo;
