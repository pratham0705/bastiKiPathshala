import React from 'react';

const Help = () => {
  return (
    <div className="container py-5 my-4" style={{
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid #e9ecef'
    }}>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          
          <h2 className="fw-bold mb-3" style={{
            color: '#2c3e50',
            fontSize: '1.8rem'
          }}>
            Help Us Make This World Happier
          </h2>
          
          <div className="mb-4" style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#4ecdc4',
            margin: '0 auto'
          }}></div>
          
          <p className="lead mb-4" style={{
            color: '#495057',
            fontSize: '1.1rem'
          }}>
            Join as a volunteer or intern and create meaningful change
          </p>
          
          <Link
            to="/volunteer"
            className="btn btn-primary px-4 py-2"
            style={{
              borderRadius: '6px',
              fontWeight: '500',
              backgroundColor: '#4ecdc4',
              borderColor: '#4ecdc4',
              fontSize: '1rem',
              textDecoration: 'none',
              color: 'white' 
            }}
          >
          Join Our Team
          </Link>
          
          <div className="mt-3 text-muted" style={{ fontSize: '0.9rem' }}>
            <i className="fas fa-user-friends me-1"></i> 500+ volunteers already making a difference
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;