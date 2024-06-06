import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Welcome to Tomato, your ultimate food delivery service offering a diverse range of cuisines from local favorites to well-known chains. With our user-friendly platform, you can easily browse menus, customize orders, and enjoy exclusive deals. Our fast and reliable delivery ensures your food arrives hot and fresh, while our contactless delivery options prioritize your safety. Backed by 24/7 customer support,
                        Tomato guarantees a seamless dining experience right at your doorstep.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/reg/" target='blank'><img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://x.com/?lang=en" target='blank'><img src={assets.twitter_icon} alt="" /></a>
                        <a href="https://in.linkedin.com/" target='blank'><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="tel:+918840775386">+91 9454886577</a></li>
                        <a href="https://g.co/kgs/gzwiczL"><li>contact@tomato.com</li></a>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ Tomato.com -- All Right Reserved.</p>
        </div>
    )
}

export default Footer