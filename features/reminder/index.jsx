import React from 'react';
import Grid from '@material-ui/core/Grid';
import SelectField from '../../Components/SelectField/Index';
import Header from '../Core/Header/Index';
import Layout from '../Core/Layout/Index';

const ReminderPage = () => {
  return (
    <Layout>
      <Header heading='Reminder Message - WhatsApp'>
        <Grid item xs>
          <SelectField />
        </Grid>
      </Header>
    </Layout>
  );
};

export default ReminderPage;
