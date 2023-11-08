import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
  <table className='cart-table'>
    <thead>
      <tr>
        <th>Imeges</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>
      {cart.map((product ,index) => (
        <tr key={product.img}>
          <td key={index}><img src={product.img}  style={{ width: "10", height: "10rem" }} ></img></td>
          <td>{product.name}</td>
          <td>{product.price}</td> 
          <td>
            <button onClick={() => removeFromCart(product)}> <DeleteIcon /></button>
           <Link to="/button"><button type='submit'> Confarm order</button></Link> 
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

);

export default Cart;
