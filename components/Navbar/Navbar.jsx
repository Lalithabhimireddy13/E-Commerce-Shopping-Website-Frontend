import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/mens'>Men</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/womens'>Women</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
