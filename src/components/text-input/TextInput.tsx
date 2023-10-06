import React from 'react';
import { InputProps } from '../../interfaces';

import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

function TextInput({ control, name, label, required }: InputProps) {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      type={field.name}
      label={label}
      variant='standard'
      margin='dense'
      fullWidth
      required={required}
      autoComplete={name}
      autoFocus
      error={invalid}
      helperText={invalid ? error?.message : null}
    />
  );
}

export default TextInput;
