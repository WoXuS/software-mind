import React from 'react';
import styles from './styles';
import { InputProps } from '../../interfaces';

import { useController } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { validateDate } from '@mui/x-date-pickers/internals';

function DobDatePicker({ control, name, label }: InputProps) {
  const {
    field: { ref, ...field },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <DatePicker
        value={field.value}
        onChange={field.onChange}
        label={label}
        disableFuture
        openTo='year'
        slotProps={{
          textField: {
            variant: 'standard',
            margin: 'dense',
            color: 'primary',
            name: field.name,
            error: invalid,
            helperText: invalid ? error?.message : null,
          },
        }}
      />
    </>
  );
}

export default DobDatePicker;
