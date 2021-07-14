import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectField = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id='demo-simple-select-required-label'>Age</InputLabel>
      <Select
        labelId='demo-simple-select-required-label'
        id='demo-simple-select-required'
        value={value}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
