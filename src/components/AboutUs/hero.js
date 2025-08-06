import React from 'react';

function Hero() {
  return (
    <div>
      
      <div style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <img 
          src='media/images/galleryImage3.jpg' 
          alt="Basti Ki Pathshala" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>About Us</h1>
        </div>
      </div>

      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#fff8f0' 
      }}>
        <div className="container">
          <h2 style={{
            color: 'orange',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>We Work Together</h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of 'We Work Together,' we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;