import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="Footer Logo"/>
            <p>SHOPPER</p>
            <div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={instagram_icon} alt="Instagram"/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={pintester_icon} alt="Pinterest"/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="WhatsApp"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-copyright">
                    <hr/>
                    <p>copyright ©2023 - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer
