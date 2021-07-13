import React, { useContext } from 'react';
import LoginPage from './login';
import AuthContext from '../store/auth-context';
import HomePage from './home';

const Home = () => {
  const authCtx = useContext(AuthContext);
  return <>{authCtx.isLoggedIn ? <HomePage /> : <LoginPage />}</>;
};

export default Home;
