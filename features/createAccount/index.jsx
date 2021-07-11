import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
import CreateAccountForm from './createAccountForm';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  card: {
    width: 500,
    height: 500,
  },
}));

const CreateAccountPage = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Date.now(),
    };
    setUserData((prevUserData) => {
      const newUserData = [userData, ...prevUserData];
      localStorage.setItem('users', JSON.stringify(newUserData));
      return newUserData;
    });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          alignItems='center'
          style={{ height: 450 }}
        >
          <Grid item md={12}>
            <CreateAccountForm onSaveUserData={saveUserDataHandler} />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CreateAccountPage;
