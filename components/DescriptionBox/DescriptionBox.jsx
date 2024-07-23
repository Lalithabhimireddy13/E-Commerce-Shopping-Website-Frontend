import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade ">Reviews(122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>An online ecommerce site is a digital platform for buying and selling goods and services, offering 24/7 convenience and global reach. It features a user-friendly interface, 
            secure payment options, and personalized shopping experiences. With reduced overhead costs, it provides businesses with valuable customer insights and efficient order management. 
            However, challenges include ensuring security, managing logistics, and maintaining customer trust</p>
        <p>An online ecommerce site offers immense potential for growth and profitability by providing a convenient, efficient,
             and personalized shopping experience. With the right strategy and execution,
             businesses can leverage ecommerce to reach a wider audience and achieve significant success.</p>
       </div>
    </div>
  )
}
export default DescriptionBox