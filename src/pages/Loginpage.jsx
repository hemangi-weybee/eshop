import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '../redux/api/authenticateApi';

const Loginpage = () => {
  const [skip, setSkip] = useState(true);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { isLoading, data, isError } = useLoginQuery(userData, { skip: skip });
  const navigate = useNavigate();

  if (data) {
    localStorage.setItem(
      'eshop',
      JSON.stringify({
        credential: userData,
        token: data.login
      })
    );
    navigate('/');
  }

  console.log(data);

  return (
    <div className="wrapper">
      <form className={`login ${isLoading && 'loading'}`}>
        <p className="title">Login</p>
        {isError && <div className="login-item login-error">Invalid Email or Password</div>}
        <div className="login-item">
          <div className="icon">
            <i className="fa fa-user"></i>
          </div>
          <input
            type="email"
            placeholder="Email"
            required={true}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
              !skip && setSkip(true);
            }}
          />
        </div>
        <div className="login-item">
          <div className="icon">
            <i className="fa fa-key"></i>
          </div>
          <input
            type="password"
            placeholder="Password"
            required={true}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
              !skip && setSkip(true);
            }}
          />
        </div>
        <a href="/">Forgot your password?</a>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            userData.email && userData.password && setSkip(false);
          }}>
          <i className="spinner"></i>
          <span className="state">{isLoading ? 'Authenticating' : 'Login'}</span>
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
