import React from 'react';
import Card from '../../Components/Card';
import Table from '../../Components/Table/Index';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const ReminderData = (props) => {
  const tableHeadData = [
    'slno',
    'Token',
    'Name',
    'Phone',
    'Uhid',
    'Time',
    'Action',
  ];

  return (
    <Card>
      <Table tableHead={tableHeadData} tableBody={props.appData} />
    </Card>
  );
};

export default ReminderData;
