import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

const AppBar = (props) => {
  console.log(props.open);
  const classes = useStyles();

  return (
    <MuiAppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={props.handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, props.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          CRM
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
