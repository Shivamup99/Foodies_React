import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer container">
        <div className="footer-section">
            <p className='title'>FoodiesDay.com</p>
            <p>Foodies Day is a place where you can eat a good recipies by a good cook's hand and you feel crazy after knowing the recpies</p>
            <p style={{color:'red'}}>&copy:2022 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
            <p className='title'>Contact Us</p>
            <p>foodidamm@gmail.com</p>
            <p>+91 9189-8909</p>
            <p>L-16 Mumbai </p>
            </div>
            <div className="footer-section">
            <p className='title'>Social Media</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            </div>
        </div>
    </>
  )
}

export default Footer