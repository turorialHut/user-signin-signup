import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Box from '@material-ui/core/Box';
import Card from '../../../Components/Card';
import Typography from '../../../Components/Typography';
import Breadcrumbs from '../../../Components/Breadcrumbs';

const Header = (props) => {
  const links = [
    {
      icon: <HomeIcon style={{ fontSize: '1.3rem', marginRight: 2 }} />,
      name: 'Home',
      href: '/',
    },
  ];
  return (
    <Card>
      <Grid container alignItems='center' spacing={1}>
        <Grid item xs>
          <Typography variant='h6'>{props.heading}</Typography>
        </Grid>
        {props.children}
      </Grid>
    </Card>
  );
};

export default Header;
