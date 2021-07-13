import React, { useState } from 'react';
import CreateAccountForm from './createAccountForm';
import Dialog from '../../Components/Dialog/Index';
import { useRouter } from 'next/router';

const CreateAccountPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Date.now(),
    };
    setUserData((prevUserData) => {
      const newUserData = [userData, ...prevUserData];
      localStorage.setItem('users', JSON.stringify(newUserData));
      setOpen(true);
      return newUserData;
    });
  };

  return (
    <>
      <CreateAccountForm onSaveUserData={saveUserDataHandler} />
      <Dialog
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        title='Registred Successfully!'
        description={`Your account has been registred successfully, Plese login to continue`}
        cancel='cancel'
        action='Login'
        onClickAction={() => {
          router.push('/login');
        }}
      />
    </>
  );
};

export default CreateAccountPage;
