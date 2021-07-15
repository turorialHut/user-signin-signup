import React from 'react';
import Layout from '../Core/Layout/Index';
import ReminderHeader from './header';
import ReminderData from './ReminderData';
import Box from '@material-ui/core/Box';

const ReminderPage = () => {
  const appData = [
    {
      token: '1',
      name: 'Name1',
      uhid: '1012',
      doctor: 'Dr.Aswathy',
      phone: '8129436464',
    },
    {
      token: '2',
      name: 'Name2',
      uhid: '1025',
      doctor: 'Dr.Aswathy',
      phone: '9447520986',
    },
    {
      token: '3',
      name: 'Name3',
      uhid: '1044',
      doctor: 'Dr.Aswathy',
      phone: '8086232325',
    },
  ];

  const fetchDataHandler = (fetchData) => {
    console.log(fetchData);
  };

  return (
    <Layout>
      <ReminderHeader onFetchData={fetchDataHandler} />
      <Box my={2}>
        <ReminderData appData={appData} />
      </Box>
    </Layout>
  );
};

export default ReminderPage;
