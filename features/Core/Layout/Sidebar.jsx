import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '../../../Components/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  darawerFooter: {
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(3),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const sidebarData = [
    { icon: <DashboardIcon />, name: 'Dashboard' },
    { icon: <TodayIcon />, name: 'Reminder' },
    { icon: <AssessmentIcon />, name: 'Reports' },
  ];
  const sidebarInfoData = [
    { icon: <LiveHelpIcon />, name: 'Help' },
    { icon: <InfoIcon />, name: 'Info' },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <div className={classes.darawerContent}>
        <List>
          {sidebarData.map((data, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sidebarInfoData.map((data, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider style={{ width: '100%' }} />
      <div className={classes.darawerFooter}>
        <Typography>V 1.0.1</Typography>
      </div>
    </Drawer>
  );
};

export default Sidebar;
