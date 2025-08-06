import React from 'react';

function LeftSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="media/images/galleryImage2.jpg" 
            alt="Our Mission in Action"
            className="img-fluid rounded-3 shadow"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>

        <div className="col-md-6 ps-md-5">
          <h3 className="fw-bold mb-4" style={{ color: '#e67e22' }}>Our Mission</h3>
          <div style={{ lineHeight: '1.8', color: '#555' }}>
            <p className="mb-3">
              At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities.
            </p>
            <p className="mb-3">
              We are dedicated to providing quality education to children living in slum areas, ensuring every child has the opportunity to thrive through innovative teaching methods and community engagement.
            </p>
            <p>
              Our work extends beyond the classroom to foster long-term, sustainable change in the lives of marginalized families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;