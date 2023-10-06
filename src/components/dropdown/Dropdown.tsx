import React from 'react';
import { InputProps } from '../../interfaces';

import { TextField, Autocomplete } from '@mui/material';
import { useController } from 'react-hook-form';

function Dropdown({ control, name, label }: InputProps) {
  const continents = [
    'Afryka',
    'Ameryka Południowa',
    'Ameryka Północna',
    'Antarktyda',
    'Australia',
    'Azja',
    'Europa',
  ];

  const {
    field: { ref, ...field },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <Autocomplete
      value={typeof field.value === 'string' ? field.value : null}
      clearOnEscape
      disablePortal
      filterSelectedOptions
      onChange={(event, value) => field.onChange(value)}
      options={continents}
      renderInput={(params) => (
        <TextField
          error={invalid}
          helperText={invalid ? error?.message : null}
          name={field.name}
          label={label}
          inputRef={ref}
          variant='standard'
          margin='dense'
          autoComplete='off'
          {...params}
        />
      )}
    />
  );
}

export default Dropdown;
