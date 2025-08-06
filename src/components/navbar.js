import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar p-3" style={{ backgroundColor: '#fff8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-center">
          <div className="d-flex gap-4">
            <Link 
              to="/" 
              className="text-decoration-none fw-medium px-3 py-2"
              style={{
                color: '#2c3e50',
                borderBottom: '3px solid transparent',
                transition: 'all 0.3s ease',
                ':hover': {
                  borderBottom: '3px solid orange',
                  color: 'orange'
                }
              }}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-decoration-none fw-medium px-3 py-2"
              style={{
                color: '#2c3e50',
                borderBottom: '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              About Us
            </Link>
            
            <Link 
              to="/volunteer" 
              className="text-decoration-none fw-medium px-3 py-2"
              style={{
                color: '#2c3e50',
                borderBottom: '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;