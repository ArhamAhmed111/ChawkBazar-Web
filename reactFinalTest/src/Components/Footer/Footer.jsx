import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Social</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: support@example.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Main St, City</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Shipping Info</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Our Information</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Top Brands</h3>
                    <ul>
                        <li><a href="#">Men's Wear</a></li>
                        <li><a href="#">Women's Wear</a></li>
                        <li><a href="#">Kid's Wear</a></li>
                        <li><a href="#">Sport's Wear</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
