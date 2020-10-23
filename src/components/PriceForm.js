import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PriceForm() {
  const [value, setValue] = React.useState('5000');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choisissez votre montant de recharge:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="2000" control={<Radio />} label="2000" />
        <FormControlLabel value="3000" control={<Radio />} label="3000" />
        <FormControlLabel value="4000" control={<Radio />} label="4000" />
        <FormControlLabel value="5000" control={<Radio />} label="5000" />
      </RadioGroup>
    </FormControl>
  );
}
