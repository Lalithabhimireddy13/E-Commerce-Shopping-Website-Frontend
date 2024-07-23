import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Function to calculate total cart amount
    const getTotalCartAmount = () => {
        let total = 0;
        all_product.forEach((product) => {
            const quantity = cartItems[product.id];
            if (quantity > 0) {
                total += product.new_price * quantity;
            }
        });
        return total.toFixed(2); // Ensures total amount is formatted to two decimal places
    };

    // Function to calculate total number of items in the cart
    const getTotalCartItems = () => {
        let totalItems = 0;
        Object.values(cartItems).forEach(quantity => {
            totalItems += quantity;
        });
        return totalItems;
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {all_product.map((product) => {
                    const quantity = cartItems[product.id];
                    if (quantity > 0) {
                        return (
                            <div key={product.id} className='cartitems-format'>
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${product.new_price * quantity}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(product.id) }} alt="" />
                            </div>
                        );
                    } else {
                        return null; // Render nothing if quantity is 0
                    }
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>SubTotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-items">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='Promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="cartitems-summary">
                        <p>Total Items: {getTotalCartItems()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
