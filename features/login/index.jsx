import React, { useState, useEffect, useContext } from 'react';
import CryptoJs from 'crypto-js';
import LoginForm from './loginForm';
import AuthContext from '../../store/auth-context';

const LoginPage = (props) => {
  const ctx = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState({ type: null, message: null });

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('users'));
    setUsers(usersData);
  }, []);

  const LoginUserHandler = (loginUserData) => {
    users.find(function (user) {
      if (
        user.enteredEmail === loginUserData.enteredUsername &&
        user.enteredPswd ===
          CryptoJs.MD5(loginUserData.enteredPassword).toString()
      ) {
        ctx.onLogin();
      } else {
        setMessage({
          type: 'error',
          message: 'login Failed Please user valid username and password',
        });
      }
    });
  };

  return (
    <div>
      <LoginForm onLoginUserData={LoginUserHandler} message={message} />
    </div>
  );
};

export default LoginPage;
