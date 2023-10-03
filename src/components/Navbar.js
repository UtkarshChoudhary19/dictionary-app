import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="heading">
        <Link to="/"><h3>Dictionary App</h3></Link>
          
        </div>
        <div className="lists">
          <Link to="/">Home</Link>
          <Link to="/History">History</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
