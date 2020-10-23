import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PayMethodForm() {
  const [value, setValue] = React.useState('airtel_money');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choisissez votre mode de paiment:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="airtel_money" control={<Radio />} label="Airtel Money" />
        <FormControlLabel value="mobi_cash" control={<Radio />} label="Mobi Cash" />
      </RadioGroup>
    </FormControl>
  );
}
