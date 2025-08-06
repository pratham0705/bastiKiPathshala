import React, { useState } from 'react';

function RegistrationForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    role: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    } 
    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Join Our Team</h2>
              
              <form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name*</label>
                  <input
                    type="text"
                    className={`form-control ${validated && !formData.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Please provide your name.</div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="age" className="form-label">Age*</label>
                    <input
                      type="number"
                      className={`form-control ${validated && !formData.age ? 'is-invalid' : ''}`}
                      id="age"
                      name="age"
                      min="16"
                      max="99"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please provide a valid age (16-99).</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender*</label>
                    <select
                      className={`form-select ${validated && !formData.gender ? 'is-invalid' : ''}`}
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <div className="invalid-feedback">Please select your gender.</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address*</label>
                  <textarea
                    className={`form-control ${validated && !formData.address ? 'is-invalid' : ''}`}
                    id="address"
                    name="address"
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please provide your address.</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">I want to join as*</label>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${validated && !formData.role ? 'is-invalid' : ''}`}
                      type="radio"
                      name="role"
                      id="volunteer"
                      value="volunteer"
                      checked={formData.role === 'volunteer'}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="volunteer">
                      Volunteer
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="intern"
                      value="intern"
                      checked={formData.role === 'intern'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="intern">
                      Intern
                    </label>
                    <div className="invalid-feedback">Please select how you want to join.</div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Why do you want to join us?*</label>
                  <textarea
                    className={`form-control ${validated && !formData.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please tell us why you want to join.</div>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;