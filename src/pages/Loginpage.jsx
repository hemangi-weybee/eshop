import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginQuery, useSignupQuery } from '../redux/api/authenticateApi';
import { addUserDetail } from '../redux/slice/userSlice';

const LoginComponent = ({ setIsLoading, setCurrent }) => {
  const navigate = useNavigate();
  const [skip, setSkip] = useState(true);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { isLoading, data, isError } = useLoginQuery(userData, { skip: skip });
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  if (data) {
    dispatch(
      addUserDetail({
        credential: userData,
        token: data.login
      })
    );
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.checkValidity() && passRef.current.checkValidity()) {
      setUserData({
        email: emailRef.current.value,
        password: passRef.current.value
      });
      setSkip(false);
      setIsLoading(true);
    }
  };

  return (
    <form>
      {isError && <div className="login-item login-error">Invalid Email or Password</div>}
      <div className="login-item">
        <div className="icon">
          <i className="fa fa-user"></i>
        </div>
        <input type="email" placeholder="Email" required={true} ref={emailRef} />
      </div>
      <div className="login-item">
        <div className="icon">
          <i className="fa fa-key"></i>
        </div>
        <input type="password" placeholder="Password" required={true} ref={passRef} />
      </div>
      <div className="link">
        New to Eshop ? <span onClick={() => setCurrent(1)}> Create Account </span>
      </div>
      <button type="submit" onClick={handleSubmit}>
        <i className="spinner"></i>
        <span className="state">{isLoading ? 'Authenticating' : 'Login'}</span>
      </button>
    </form>
  );
};

const SignupComponent = ({ setIsLoading, setCurrent }) => {
  const navigate = useNavigate();
  const [skip, setSkip] = useState(true);
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  const { isLoading, data, isError, ...rest } = useSignupQuery(userData, { skip: skip });
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  if (data) {
    dispatch(
      addUserDetail({
        credential: data.addUser,
        token: data.login
      })
    );
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.checkValidity() &&
      emailRef.current.checkValidity() &&
      passRef.current.checkValidity()
    ) {
      setUserData({
        email: emailRef.current.value,
        password: passRef.current.value,
        name: nameRef.current.value
      });
      setSkip(false);
      setIsLoading(true);
    }
  };

  return (
    <form>
      {isError && (
        <div className="login-item login-error">Something went wrong. Try again later.</div>
      )}
      <div className="login-item">
        <div className="icon">
          <i className="fa fa-user"></i>
        </div>
        <input ref={nameRef} type="text" placeholder="Name*" required={true} />
      </div>
      <div className="login-item">
        <div className="icon">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <input ref={emailRef} type="email" placeholder="Email*" required={true} />
      </div>
      <div className="login-item">
        <div className="icon">
          <i className="fa fa-key"></i>
        </div>
        <input
          ref={passRef}
          type="password"
          placeholder="Password*"
          required={true}
          minLength={4}
        />
      </div>
      <div className="link">
        Already have an account ? <span onClick={() => setCurrent(0)}> Login </span>
      </div>
      <button onClick={handleSubmit}>
        <i className="spinner"></i>
        <span className="state">{isLoading ? 'Creating your Profile' : 'Signup'}</span>
      </button>
    </form>
  );
};

const Loginpage = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="wrapper">
      <div className={`login ${isLoading ? 'loading' : ''}`}>
        <p className="title">
          <span> {current == 0 ? 'Login' : 'Signup'}</span>
          {/* <span className={current == 1 ? 'active' : ''} onClick={() => setCurrent(1)}>
            Signup
          </span> */}
        </p>
        {current == 0 ? (
          <LoginComponent setIsLoading={setIsLoading} setCurrent={setCurrent} />
        ) : (
          <SignupComponent setIsLoading={setIsLoading} setCurrent={setCurrent} />
        )}
      </div>
    </div>
  );
};

export default Loginpage;
