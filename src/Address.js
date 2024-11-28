import React from 'react';
import './Address.css';

function Address() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer bg-dark text-light py-5" >
                <div className="container my-2" id="contact">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center text-lg-left" style={{marginTop:'-60px'}}>
                            <img src="logo123.png" alt="Laundryes" className="img-fluid logo" />
                            <p className="justified-text" style={{marginTop:'-70px'}}>
                                This template is a micro niche for business categories, namely laundry business. There was an excess of this template is using adobe muse making it easier to edit, add content, and without having to use coding.
                            </p>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-square-x-twitter"></i></a>
                            </div>
                        </div>
                        {/* Quick Links Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                            </ul>
                        </div>
                        {/* Contact Section */}
                        <div className="col-lg-4 col-md-12 mb-4 text-center text-lg-left">
                            <h2>Contact</h2>
                            <ul>
                                <li><i className="fa-solid fa-location-dot"></i> N.R.K.R Road, near Reg. Office, Sivakasi - 626124.</li>
                                <li><i className="fa-solid fa-phone"></i> +91 12345 67890</li>
                                <li><i className="fa-solid fa-envelope"></i>laundryes@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom bg-dark py-3 text-center">
                <p>&copy; {currentYear} Botcode. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Address;
