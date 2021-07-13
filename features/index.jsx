import React, { useContext } from 'react';
import LoginPage from './login';
import AuthContext from '../store/auth-context';
import HomePage from './home';

const Home = () => {
  const ctx = useContext(AuthContext);
  return <>{ctx.isLoggedIn ? <HomePage /> : <LoginPage />}</>;
};

export default Home;
