import React from "react";
import { Link } from "react-router-dom";
import CategoryListing from "../components/CategoryListing";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="banner animated tada spad">
        <div className=" big-text animated tada">40% OFF</div>
        <div className="desc">On the entire store</div>
        <Link to="/products">Go to store</Link>
      </div>

      <CategoryListing />
    </div>
  );
};

export default Homepage;
