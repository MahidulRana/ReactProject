import React from 'react'
import { Button } from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Admission in Daffodil International University to receive our University Detils.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type='email' name="email" placeholder="Your Email"/>
                        <Button buttonStyle="btn--outline">subscribe</Button>
                    </form>
                </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-links-items">
                            <h2>About Us</h2>
                            
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>careers</Link>
                            <Link to='/'>Invertors</Link>
                            <Link to='/'>Terms of Services</Link>
                        </div>
                        <div className="footer-links-items">
                            <h2>Contract Us</h2>
                           
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>careers</Link>
                            <Link to='/'>Invertors</Link>
                            <Link to='/'>Terms of Services</Link>
                        </div>
                        
                    </div>

                    <div className="footer-link-wrapper">
                        <div className="footer-links-items">
                            <h2>About Us</h2>
                            
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>careers</Link>
                            <Link to='/'>Invertors</Link>
                            <Link to='/'>Terms of Services</Link>
                        </div>
                        <div className="footer-links-items">
                            <h2>Contract Us</h2>
                           
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>careers</Link>
                            <Link to='/'>Invertors</Link>
                            <Link to='/'>Terms of Services</Link>
                        </div>
                        
                    </div>
                    </div>
                    <section className="social-media">
                        <div className="social-media-wrap">
                            <div className="footer-logo">
                                <Link to="/" className="social-logo">
                                    MAHIDUL <i class="fab fa-accusoft"></i>
                                </Link>
                            </div>
                            <small class="website-right">Mahidul 2021</small>
                            <div className="social-icons">
                                <Link class="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </Link>
                                <Link class="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </Link>
                                <Link class="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
                                    <i class="fab fa-youtube"></i>
                                </Link>
                                <Link class="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </Link>
                                <Link class="social-icon-link linkedin" to="/" target="_blank" aria-label="Linkedin">
                                    <i class="fab fa-linkedin"></i>
                                </Link>

                                
                            </div>
                        
                        </div>
                    </section>
                </div>
        
    )
}
export default Footer
