import React from 'react';

function RightSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 pe-md-5 order-md-1 order-2">
          <h3 className="fw-bold mb-4" style={{ color: '#e67e22' }}>Our Story</h3>
          <div style={{ lineHeight: '1.8', color: '#555' }}>
            <p className="mb-3">
              Basti Ki Pathshala began with a simple vision: to transform lives through education in slum communities.
            </p>
            <p className="mb-3">
              Founded by Sunita and a team of passionate individuals, we've grown from humble beginnings to become a beacon of hope, empowering countless children.
            </p>
            <p>
              Our journey continues with unwavering determination to create a world where every child can thrive.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4 mb-md-0 order-md-2 order-1">
          <img 
            src="media/images/galleryImage4.jpeg" 
            alt="Our Story"
            className="img-fluid rounded-3 shadow"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;