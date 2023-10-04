import { Control } from 'react-hook-form';

export type FormValues = {
  continent: string | null;
  firstName: string;
  surname: string;
  dob: string | null;
};

export interface InputProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  required?: boolean;
}
