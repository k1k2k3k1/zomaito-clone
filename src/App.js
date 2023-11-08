import './App.css';
import Nav from './componant/Nav';
import {Routes,Route } from 'react-router-dom';
import data from './json/data.json';

import Carosal from './componant/Carosal';

import PreFooter from './componant/PreFooter';
import React, { useState } from 'react';
import Product from './componant/Prodect';
import Cart from './checkout/Cart';
import ShippingInfo from './checkout/ShippingInfo';
import Handlebutton from './checkout/Handlebutton';
import Orderinfo from './checkout/Orderinfo';
import { useNavigate } from 'react-router-dom';
import Contect from './Contect';

const App = () => {
  const [cart, setCart] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
  address: '',
  email: '',
  });
  const [orderInfo, setOrderInfo] = useState(null);
  const [skincare, setSkincare] = useState(data.Skincare);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
   //Handle category change
   const handleCategoryChange = (event) => {
    console.log(event.target.value)
          setSelectedCategory(event.target.value);
  };

   // Apply category filter
  //  const applyCategoryFilter = (product) => {
  //   if (selectedCategory === 'all') {
  //     return true; // Show all products if 'all' is selected
  //   }
  //   return product.category === selectedCategory;
  // };
  //handle search
  const handleInput = (event) => {
    console.log(event.target.value)
    setSearchInput(event.target.value);
  };
  //aply filter
  const applySearchFilter = (product) => {
    const productName = product.name.toLowerCase();
    const searchTerm = searchInput.toLowerCase();

    return productName.includes(searchTerm);
  };

 //return result
 const filtered = skincare.filter((product) => {
  console.log(selectedCategory);
  //const categoryResult = product.category === selectedCategory; 
  const searchResult = applySearchFilter(product);
   console.log(  "Search Result:", searchResult);
    return searchResult
   //&& categoryResult;
});

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
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const orderDetails = ` Name:  ${ shippingInfo.name},
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
    <>
    <Nav/>
    <Carosal/>
    <div className="checkout-page">
    
      <Routes>
      <Route
            path="/"
            element={
              <Product
                skincare={filtered}
                addToCart={addToCart}
                searchinput={searchInput}
                search={handleInput}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />
            }
          />
         <Route path="/about" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
         <Route path='/shiping' element={<ShippingInfo shipping={shippingInfo}  
        sehipping={setShippingInfo} change={handleChange} handle={handleSubmit} />}/>
        <Route path='/button' element={<Handlebutton handlePlaceOrder={handlePlaceOrder}  />}/>
        
         </Routes>
        
      {orderInfo && <Orderinfo orderInfo={orderInfo} />} 
      <Contect/>
      <PreFooter/>
    </div>
    </>
  );
};

export default App;
 