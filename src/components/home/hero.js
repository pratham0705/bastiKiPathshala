import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      image: '/media/images/galleryImage1.jpeg',
      text: 'Helping People in Need Grow Better Lives'
    },
    {
      image: '/media/images/galleryImage2.jpg',
      text: 'Building Stronger Communities Together'
    },
    {
      image: '/media/images/galleryImage3.jpg',
      text: 'Empowering Through Education and Support'
    },
    {
      image: '/media/images/galleryImage4.jpeg',
      text: 'Creating Opportunities for a Better Future'
    },
    {
      image: '/media/images/galleryImage5.jpg',
      text: 'Your Support Makes All the Difference'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ 
      width: '100%', 
      height: '70vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '80vh',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease'
        }}
      />
      
      {/* Text overlay */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)', // Semi-dark overlay
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          padding: '0 20px',
          maxWidth: '800px'
        }}>
          {slides[currentIndex].text}
        </h1>
      </div>
    </div>
  );
};

export default Hero;