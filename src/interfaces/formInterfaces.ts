import { Control } from 'react-hook-form';
import { Dayjs } from 'dayjs';

export type FormValues = {
  continent: string | null;
  firstName: string;
  surname: string;
  dob: Dayjs | null;
};

export interface InputProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  required?: boolean;
}
