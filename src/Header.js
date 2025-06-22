import React, { useState } from 'react';

const Header = () => {
  const [loginType, setLoginType] = useState(null); // HR or CANDIDATE
  const [registerMode, setRegisterMode] = useState(false); // true when Register is active

  const boxStyle = {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '40px',
    padding: '30px',
    backgroundColor: '#e6f7ff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  };

  return (
    <div style={{ backgroundColor: '#F4C06C', minHeight: '100vh', paddingTop: '80px' }}>
      
      {!loginType && !registerMode && (
        <>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '700' }}>Welcome To Resumex</h1>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '40px' }}>
            <img 
              src="https://impress.ai/wp-content/uploads/2023/10/4-Key-reasons-why-automated-resume-scoring-and-ranking-is-essential-for-hiring-quality-candidates-scaled.jpg"
              alt="Welcome figure" 
              style={{ width: '350px', height: '350px', objectFit: 'contain' }}
            />
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button
                className="btn btn-primary mx-2"
                style={{ fontSize: '1.5rem', padding: '10px 20px' }}
                onClick={() => setLoginType('HR')}
              >
                Login as<br />HR
              </button>

              <button
                className="btn btn-primary mx-2"
                style={{ fontSize: '1.5rem', padding: '10px 20px' }}
                onClick={() => setLoginType('CANDIDATE')}
              >
                Login as<br />CANDIDATE
              </button>

              {/* Register Now */}
              <div className="ms-3" style={{ textAlign: 'left' }}>
                <p style={{ marginBottom: '0' }}>Not registered yet?</p>
                <a
                  href="#"
                  style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}
                  onClick={() => setRegisterMode(true)}
                >
                  Register now
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* HR Login */}
      {loginType === 'HR' && (
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '20px' }}>HR Login</h2>
          <form>
            <div className="mb-3">
              <label>Email:</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <button 
              type="button" 
              className="btn btn-secondary w-100 mt-3"
              onClick={() => setLoginType(null)}
            >
              Back
            </button>
          </form>
        </div>
      )}

      {/* Candidate Login */}
      {loginType === 'CANDIDATE' && (
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '20px' }}>Candidate Login</h2>
          <form>
            <div className="mb-3">
              <label>Email:</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <button 
              type="button" 
              className="btn btn-secondary w-100 mt-3"
              onClick={() => setLoginType(null)}
            >
              Back
            </button>
          </form>
        </div>
      )}

      {/* Registration Form */}
      {registerMode && (
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '20px' }}>Register</h2>
          <form>
            <div className="mb-3">
              <label>Full Name:</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Create a password" />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
            <button 
              type="button" 
              className="btn btn-secondary w-100 mt-3"
              onClick={() => setRegisterMode(false)}
            >
              Back to Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;






