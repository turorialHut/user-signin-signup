import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
import Typography from '../../Components/Typography';
import TextField from '../../Components/InputField/TextField';
import Button from '../../Components/Button';
import Link from '../../Components/Link';

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
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  typography: {
    margin: theme.spacing(2, 0),
  },
  createAccountButton: {
    textTransform: 'none',
    textDecoration: 'none',
    marginLeft: theme.spacing(-0.5),
    '&:hover': {
      backgroundColor: 'transparent',
      fontWeight: 600,
    },
  },
}));

const LoginForm = (props) => {
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
    const userData = { enteredUsername, enteredPassword };
    props.onLoginUserData(userData);
    setEnteredUsername('');
    setEnteredPassword('');
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
                LoginPage to continue
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
                LoginPage
              </Button>
              {props.message && (
                <Typography color='error' align='center'>
                  {props.message.message}
                </Typography>
              )}
              <Button
                variant='text'
                className={classes.createAccountButton}
                component={Link}
                href='/create-account'
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

export default LoginForm;
