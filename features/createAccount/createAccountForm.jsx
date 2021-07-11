import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '../../Components/Typography';
import TextField from '../../Components/InputField/TextField';
import Button from '../../Components/Button';
import PasswordField from '../../Components/InputField/PasswordField';
import CryptoJs from 'crypto-js';

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
    color: theme.palette.action.active,
    marginLeft: theme.spacing(-0.5),
    '&:hover': {
      backgroundColor: 'transparent',
      fontWeight: 600,
    },
  },
}));
const CreateAccountForm = (props) => {
  const classes = useStyles();

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPswd, setEnteredPswd] = useState('');
  const [enteredConPswd, setEnteredConPswd] = useState('');
  const [conPswdHelperText, setConPswdHelperText] = useState('');
  const [passwordError, setpasswordError] = useState(false);
  const [cPasswordError, setCPasswordError] = useState(false);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPswd(e.target.value);
  };
  const confirmPasswordChangeHandler = (e) => {
    setEnteredConPswd(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (enteredPswd !== enteredConPswd) {
      setConPswdHelperText('password and confirm password should be same');
    } else {
      const userData = {
        enteredName,
        enteredEmail,
        enteredPswd: CryptoJs.MD5(enteredPswd).toString(),
      };
      props.onSaveUserData(userData);
      setEnteredName('');
      setEnteredEmail('');
      setEnteredPswd('');
      setEnteredConPswd('');
      setConPswdHelperText('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Typography variant='h6' align='center' className={classes.typography}>
        Create Account
      </Typography>
      <TextField
        label='Name'
        placeholder='Name'
        id='name'
        name='name'
        value={enteredName}
        onChange={nameChangeHandler}
        fullWidth
        required
      />
      <TextField
        label='Email'
        placeholder='Email'
        id='email'
        name='email'
        type='email'
        value={enteredEmail}
        onChange={emailChangeHandler}
        fullWidth
        required
      />
      <PasswordField
        label='Password'
        id='password'
        value={enteredPswd}
        onChange={passwordChangeHandler}
        error={passwordError}
        required
      />
      <PasswordField
        label='Confirm Password'
        id='cPassword'
        value={enteredConPswd}
        onChange={confirmPasswordChangeHandler}
        error={cPasswordError}
        labelWidth={145}
        required
      />
      <Typography variant='caption' color='error'>
        {conPswdHelperText}
      </Typography>
      <Button size='large' type='submit' className={classes.button} fullWidth>
        Create Account
      </Button>
      <Button
        variant='text'
        className={classes.createAccountButton}
        onClick={() => alert('hi ')}
      >
        Login to continue
      </Button>
    </form>
  );
};

export default CreateAccountForm;
