import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className="app-logo">
      <div>SaleStorm</div>
    </Link>
  );
};

export default Logo;
