import React from 'react';

function Donate() {
  return (
    <div className="container my-5">
      <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img 
              src="media/images/galleryImage5.jpg" 
              alt="Children learning at Basti Ki Pathshala"
              className="img-fluid rounded"
              style={{
                height: '280px',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>

          <div className="col-lg-8 ps-lg-5">
            <h3 className="mb-4 fw-bold" style={{ color: '#e67e22' }}>
              Lighting the Path to Change with Basti Ki Pathshala Foundation
            </h3>
            
            <div className="pe-lg-3" style={{ lineHeight: '1.7' }}>
              <p className="mb-3 text-secondary">
                At Basti Ki Pathshala Foundation, we are more than just an organization – we are a movement, 
                driven by the belief that education is the cornerstone of empowerment. Established under the 
                Indian Societies Act of 1860, we stand as a beacon of hope in underserved communities, 
                dedicated to breaking the chains of poverty through the transformative power of learning.
              </p>
              
              <p className="mb-4 text-secondary">
                Join us in our quest to rewrite the narrative of education, one success story at a time. 
                Together, let's build a world where every child has the opportunity to dream, to learn, 
                and to soar. Welcome to Basti Ki Pathshala Foundation – where hope is our currency, 
                and education is our legacy.
              </p>
            </div>

            <button 
              className="btn fw-bold px-4 py-2 mt-2"
              style={{ 
                backgroundColor: '#e67e22', 
                color: 'white',
                borderRadius: '4px',
                fontSize: '1.1rem'
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;