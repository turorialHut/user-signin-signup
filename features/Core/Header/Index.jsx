import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Card from '../../../Components/Card';
import Typography from '../../../Components/Typography';

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
      <Grid container alignItems='center' direction='row' spacing={2}>
        <Grid item>
          <Typography variant='h6'>{props.heading}</Typography>
        </Grid>
        {props.children}
      </Grid>
    </Card>
  );
};

export default Header;
