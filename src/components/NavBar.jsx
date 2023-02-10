import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slice/userSlice';
import Logo from './Logo';

const NavBar = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Logo />

      <div className="navbar-items">
        {/* <NavLink to="/wishlist" className="nav-item" title="Wishlist">
          <i className="fa fa-heart"></i>
          <span className="icon"></span>
        </NavLink>
        <NavLink to="/cart" className="nav-item" title="Cart">
          <i className="fa fa-shopping-cart"></i>
          <span className="icon"></span>
        </NavLink> */}

        <div
          className="nav-item"
          onClick={() => {
            if (userDetail) {
              dispatch(logout());
              navigate('/');
            }
          }}
          title="Logout">
          {userDetail ? (
            <i className="fa fa-solid fa-arrow-right-from-bracket"></i>
          ) : (
            <i className="fa fa-solid fa-arrow-right-to-bracket"></i>
          )}
          {/* <span className="icon"></span> */}
          <span className="title">{userDetail ? 'Logout' : 'Login'}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
