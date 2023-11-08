import React, { useState } from 'react';
import Product from '../componant/Prodect';
import Cart from '../checkout/Cart';
import ShippingInfo from '../checkout/ShippingInfo';
import Handlebutton from '../checkout/Handlebutton';
import Orderinfo from './Orderinfo';

const Page = ({ skincare,  }) => {
  const [cart, setCart] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
  address: '',
  email: '',
  });
  const [orderInfo, setOrderInfo] = useState(null);
//add
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
//remove
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.img !== product.img);
    setCart(updatedCart);
  };
 //handle order
 const handlePlaceOrder = () => {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add products to your cart before placing an order.');
    return;
  }

  const productNames = cart.map((product) => product.name);
  const totalPrice = cart.reduce((total, product) => total + product.prise, 0);
  const orderDetails = `Shipping Information: Name: ${shippingInfo.name},
   Address: ${shippingInfo.address}, Email: ${shippingInfo.email}. 
  You placed an order for the following products: ${productNames.join(', ')}. Total Price: $${totalPrice}`;

  setOrderInfo(orderDetails);
   resetForm() // Save order information in state
};


  //handl form
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  
//handle input
const handleChange = (e) => {
  
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  
};
//reset form
const resetForm = () => {
  setShippingInfo({
    name: '',
    address: '',
    email: '',
  });
};

  return (
    <div className="checkout-page">
      <Product skincare={skincare} addToCart={addToCart} 
        />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <ShippingInfo shipping={shippingInfo} 
        sehipping={setShippingInfo} change={handleChange} handle={handleSubmit} />
      <Handlebutton handlePlaceOrder={handlePlaceOrder} />
      {orderInfo && <Orderinfo orderInfo={orderInfo} />} 
    </div>
  );
};

export default Page;
