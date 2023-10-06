import React from 'react';
import styles from './styles';
import { InputProps } from '../../interfaces';

import { useController } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

function DobDatePicker({ control, name, label }: InputProps) {
  const {
    field: { ref, ...field },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  const computeAge = (dob: Dayjs): number => {
    const today = dayjs();
    let age = today.year() - dob.year();
    if (
      today.month() < dob.month() ||
      (today.month() === dob.month() && today.date() < dob.date())
    ) {
      age -= 1;
    }

    return age;
  };

  const handleChange = (value: Dayjs | null) => {
    if (value) {
      const age = computeAge(value);
      if (age >= 60) {
        const inputElements = document.querySelectorAll('input, button, label');

        inputElements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.fontSize = '200%';
          }
        });
      } else {
        const inputElements = document.querySelectorAll('input, button, label');
        inputElements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.fontSize = '100%';
          }
        });
      }
    }

    field.onChange(value);
  };

  return (
    <DatePicker
      onChange={handleChange}
      label={label}
      disableFuture
      openTo='year'
      slotProps={{
        textField: {
          variant: 'standard',
          margin: 'dense',
          name: field.name,
          error: invalid,
          helperText: invalid ? error?.message : null,
          fullWidth: true,
        },
      }}
    />
  );
}

export default DobDatePicker;
