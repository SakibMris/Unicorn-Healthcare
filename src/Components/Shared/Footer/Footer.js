import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="footer-basic">
                <footer>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/home">Home</Link></li>
                        <li className="list-inline-item"><Link to="/services">Services</Link></li>
                        <li className="list-inline-item"><Link to="/about">About</Link></li>
                        <li className="list-inline-item"><Link to="/departments">Departments</Link></li>
                        <li className="list-inline-item"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <p className="copyright">Unicorn Healthcare © 2021</p>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default Footer;