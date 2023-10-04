import React from 'react';
import Dropdown from './../../components/dropdown/Dropdown';
import TextInput from './../../components/text-input/TextInput';
import DatePicker from './../../components/date-picker/DatePicker';
import Button from './../../components/button/Button';
import styles from './styles';
import { FormValues } from '../../interfaces';

import { useForm } from 'react-hook-form';

function Registration() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      continent: null,
      firstName: '',
      surname: '',
      dob: null,
    },
  });

  const submitForm = (data: Object) => {
    alert('success');
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitForm)}>
      <Dropdown control={control} name={'continent'} label={'Kontynent'} />
      <TextInput control={control} name={'firstName'} label={'Imię'} required />
      <TextInput control={control} name={'surname'} label={'Nazwisko'} />
      <DatePicker control={control} name={'dob'} label={'Data urodzenia'} />
      <Button disabled={!isValid} />
    </form>
  );
}

export default Registration;
