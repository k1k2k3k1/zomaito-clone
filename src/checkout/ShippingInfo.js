import React from 'react';
import dolly from './dolly.png'
import { Link, useNavigate } from 'react-router-dom';
const ShippingInfo = ({ shipping,  sehipping, handle, change}) => {
  const navigate = useNavigate();
   const handlenavigate = ((value) =>{
    if (value == null) {
      alert("Fill the form");
    } else {
      navigate('/about');
    }
  })
  
  return (
    <div className='main'>
    <div className='box'><img src={dolly} style={{height: '24rem', width: '24rem' }}></img> </div>
     
     <div className='box' > 
    
    
      
      <form style={{height: '24rem', width: '24rem' }} onSubmit={(e) => {
        handle(e);
         
      }}>
        
          <input
            type="text"
            name="name"
            value={shipping.name}
             onChange={change}
            required
            placeholder='Enter our name'
          />
       
        
          <input
            type="email"
            name="email"
            value={shipping.email}
             onChange={change}
            required
            placeholder='Enter Your Email'
          />
        
          <input
            type="text"
            name="address"
            value={shipping.address}
            onChange={change}
            required
            placeholder='Enter Your Address'
          />
         <button onClick={handlenavigate} type="submit">Submit</button>

       
      </form>
     
    </div>
    </div>
    
  );
};

export default ShippingInfo;
