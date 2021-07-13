import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../../Components/Button';

const HomePage = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      {ctx.isLoggedIn ? <h1>logged in true</h1> : <h1>logged in false</h1>}
      <Button onClick={ctx.onLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
