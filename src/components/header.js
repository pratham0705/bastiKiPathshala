import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>  
        <div className='container-fluid py-3' style={{ 
        backgroundColor: "#fff8f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <div className='row align-items-center gx-4'>
                <div className='col-auto'>
                    <Link to="/">
                        <img 
                            src='media/images/logo.jpg' 
                            style={{
                                width: "80px",
                                borderRadius: "6px",
                                transition: "transform 0.3s ease" 
                            }}  
                            alt="Logo"
                            className='img-fluid'
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                        />
                    </Link>
                </div>

                <div className='col-md-5 col-12 py-2'>
                    <h1 style={{
                        fontSize: "1.8rem",
                        color: "orange",
                        fontWeight: "700",
                        margin: 0
                    }}>
                        BASTI KI PATHSHALA
                    </h1>
                    <p style={{ color: "#666", margin: 0, fontSize: "0.9rem" }}>
                        Empowering through education
                    </p>
                </div>

                <div className='col-md-5 col-12 d-flex flex-wrap gap-3 justify-content-md-end'>
                    <div>
                        <i className="fa-solid fa-envelope" style={{color: "orange"}}></i>
                        <span className='ms-2'>contact@bastikipathshala.org</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone" style={{color: "orange"}}></i>
                        <span className='ms-2'>9999 9999</span>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Header;