import Heading from './Heading'
import { Link } from 'react-router-dom';

const Product = ({ skincare, addToCart, search ,searchinput,selectedCategory,handleCategoryChange}) => {
  const filteredProducts = skincare.filter(product => selectedCategory === 'all' || product.category === selectedCategory);
  const searchResult = filteredProducts.filter(product => product.name.toLowerCase().includes(searchinput.toLowerCase()));
  return (
    <>
    <Heading text="PRODUCT DEATAILS"/>
     
      
  <div className='flex'>
  <input
        type="text"
        placeholder="Search for products..."
        value={searchinput}
        onChange={search}
      />
      <div className=''> <button value="all" onClick={handleCategoryChange} className="category-button">
    All Categories
  </button> </div>
  <div > <button value="Sun Protection" onClick={handleCategoryChange} className="category-button">
    Skincare
  </button>  </div>
  <div > <button value="Moisturizers" onClick={handleCategoryChange} className="category-button">
    Helthcare
    </button>  </div>
    <div > <button value="Cleansers" onClick={handleCategoryChange} className="category-button">
    Medicine
  </button> </div>
  <div > <button value="Patanjalistore" onClick={handleCategoryChange} className="category-button">
    Patanjalistore
  </button> 
</div>
</div>

          
       
        
    <div className="product-container">
      
      

      <div className="content">
   {searchResult.map((skin, index) => (
    <div key={skin.img} className="product-box">
      <div className="product-image">
      <img
  src={skin.img}
  alt={skin.name}
  style={{ width: "285px", height: "195px" }}
/>
      </div>
      <div className="product-details">
        <p> {skin.name}</p>
        <p>price {skin.price}</p>
        <p>⭐⭐⭐⭐⭐</p>
       <Link className='link' to='/shiping'> <button type='submit' id='btn' onClick={() => addToCart(skin)}>Order Now</button> </Link>
      </div>
    </div>
  ))}
</div>

    </div>
    </>
  );
};

export default Product;

