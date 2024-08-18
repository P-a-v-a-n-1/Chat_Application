
// src/components/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to Our App!</h1>
      <div className="button-group">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
         <Link to="/Signup">
          <button className="btn">Sign Up</button>
        </Link> 
      </div>
      
      {/* Basic styling */}
      <style jsx>{`
        .landing-container {
          text-align: center;
          padding: 2em;
        }
        .button-group {
          margin-top: 2em;
        }
        .btn {
          margin: 0 1em;
          padding: 0.5em 2em;
          font-size: 1.2em;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Landing;
