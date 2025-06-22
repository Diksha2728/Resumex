import React from 'react';

const HRLogin = () => {
  return (
    <div className="container mt-5">
      <h2>HR Login</h2>
      <form>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default HRLogin;
