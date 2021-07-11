import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
import Typography from '../../Components/Typography';
import TextField from '../../Components/InputField/TextField';
import Button from '../../Components/Button';

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
  button: {
    margin: theme.spacing(2, 0),
  },
  typography: {
    margin: theme.spacing(2, 0),
  },
  createAccountButton: {
    textTransform: 'none',
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(-1.5),
    '&:hover': {
      backgroundColor: 'transparent',
      fontWeight: 600,
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { enteredUsername, enteredPassword };
    console.log(data);
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
            <form onSubmit={handleFormSubmit}>
              <Typography
                variant='h6'
                align='center'
                className={classes.typography}
              >
                Login to continue
              </Typography>
              <TextField
                label='username'
                placeholder='username'
                id='username'
                name='username'
                value={enteredUsername}
                onChange={usernameChangeHandler}
                fullWidth
              />
              <TextField
                label='password'
                placeholder='password'
                id='password'
                name='password'
                value={enteredPassword}
                onChange={passwordChangeHandler}
                fullWidth
              />
              <Button
                fullWidth
                size='large'
                type='submit'
                className={classes.button}
              >
                Login
              </Button>
              <Button
                variant='default'
                className={classes.createAccountButton}
                onClick={() => alert('hi ')}
                // component='link'
              >
                Create Account
              </Button>
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Login;
