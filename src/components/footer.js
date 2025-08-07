import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-light pt-4 pb-3 border-top mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">
                Basti Ki Pathshala
              </h5>
              <p className="text-muted small">
                Empowering underprivileged children through quality education.
              </p>
              <div className="social-icons mt-3">
                <a href="#" className="text-dark me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
  
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-headset me-2"></i>
                Contact
              </h5>
              <ul className="list-unstyled text-muted small">
                <li className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  contact@bastikipathshala.org
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone me-2"></i>
                  +91 99999 99999
                </li>
                <li>
                  <i className="bi bi-geo-alt me-2"></i>
                  New Delhi, India
                </li>
              </ul>
            </div>
  
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-link me-2"></i>
                Quick Links
              </h5>
              <ul className="list-unstyled text-muted small">
                <li className="mb-2">
                <Link 
                to="/volunteer" 
                className="text-decoration-none text-muted"
                >
                <i className="bi bi-people me-2"></i>
                Volunteer
                </Link>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-muted">
                    <i className="bi bi-gift me-2"></i>
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-muted">
                    <i className="bi bi-images me-2"></i>
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="text-center pt-3 mt-3 border-top">
            <p className="small text-muted mb-0">
              <i className="bi bi-heart-fill text-danger"></i> Made with love for our community
            </p>
            <p className="small text-muted mt-1">
              © {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;