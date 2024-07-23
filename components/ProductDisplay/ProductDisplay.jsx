import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product.id); // Call addToCart with product id when button is clicked
    console.log(`Added ${product.name} to cart`); // Optional: Log message for confirmation
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div> 
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="Product-dispaly-right-prices">
          <div className="productdispaly-right-price-old">${product.old_price}</div>
          <div className="productdispaly-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A light, usually, pullover shirt, close-fitting and with a 
          round neckline and short sleeves, worn as an undershirt or outer
          garment
        </div>
        <div className="productdispaly-right-size">
          <h1>select Size</h1>
          <div className="productdispaly-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className='productdispaly-right-category'><span>Category:</span>Women, T-shirt, Crop Top</p>
        <p className='productdispaly-right-category'><span>Tags:</span>Modern, Latest</p>
      </div> 
    </div>
  );
}

export default ProductDisplay;
