import React, { useState } from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../Components/Button';

const Dialog = (props) => {
  return (
    <MuiDialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          color={props.colorCancel}
          variant='text'
        >
          {props.cancel}
        </Button>
        <Button
          onClick={props.onClickAction}
          color={props.colorAgree}
          autoFocus
          variant='text'
        >
          {props.action}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
