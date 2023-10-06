import React from 'react';
import Dropdown from './../../components/dropdown/Dropdown';
import TextInput from './../../components/text-input/TextInput';
import DobDatePicker from '../../components/date-picker/DobDatePicker';
import SubmitButton from '../../components/button/SubmitButton';
import styles from './styles';
import { FormValues } from '../../interfaces';
import registrationSchema from './registrationSchema';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Typography } from '@mui/material';

function Registration() {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      continent: null,
      firstName: '',
      surname: '',
      dob: null,
    },
    resolver: yupResolver<FormValues>(registrationSchema as any),
  });

  const submitForm = (data: Object) => {
    alert('success');
    console.log(data);
  };

  return (
    <Container maxWidth='xs' sx={styles.container}>
      <Typography variant='h2' color={"secondary"} fontWeight='bold'>
        Formularz
      </Typography>
      <Typography variant='h5'>Wprowadź dane</Typography>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <Dropdown control={control} name={'continent'} label={'Kontynent'} />
        <TextInput
          control={control}
          name={'firstName'}
          label={'Imię'}
          required
        />
        <TextInput control={control} name={'surname'} label={'Nazwisko'} />
        <DobDatePicker
          control={control}
          name={'dob'}
          label={'Data urodzenia'}
        />
        <SubmitButton disabled={!isValid && isSubmitted} />
      </form>
    </Container>
  );
}

export default Registration;
