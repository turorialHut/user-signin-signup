import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SelectField from '../../Components/SelectField/Index';
import Header from '../Core/Header/Index';
import DateField from '../../Components/DateField/Index';
import Button from '../../Components/Button';

const useStyles = makeStyles((theme) => ({
  selectField: {
    margin: theme.spacing(1.5, 2),
    width: 300,
  },
  dateField: {
    margin: theme.spacing(2, 4),
    width: 200,
  },
}));

const ReminderHeader = (props) => {
  const classes = useStyles();
  const items = [
    { value: 0, name: 'Doctor Name 1' },
    { value: 1, name: 'Doctor Name 2' },
    { value: 2, name: 'Doctor Name 3' },
  ];
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectHandlerChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      selectedValue,
      selectedDate,
    };
    props.onFetchData(data);
  };

  return (
    <Header heading='Reminder Message - WhatsApp'>
      <Grid item xs>
        <form onSubmit={handleSubmit}>
          <SelectField
            items={items}
            label='Choose Doctor*'
            labelId='Doctors-list-label'
            id='doctorslist'
            value={selectedValue}
            onChange={selectHandlerChange}
            fullWidth={false}
            className={classes.selectField}
          />

          <DateField
            id='date'
            label='Choose Date'
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth={false}
            className={classes.dateField}
          />
          <Button size='large' type='submit' style={{ marginTop: 16 }}>
            Fetch
          </Button>
        </form>
      </Grid>
    </Header>
  );
};

export default ReminderHeader;
