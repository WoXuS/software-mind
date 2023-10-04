import React from 'react';
import Dropdown from './../../components/dropdown/Dropdown';
import TextInput from './../../components/text-input/TextInput';
import DatePicker from './../../components/date-picker/DatePicker';
import Button from './../../components/button/Button';
import styles from './styles';

function Registration() {

  return (
    <form noValidate>
      <Dropdown />
      <TextInput />
      <TextInput />
      <DatePicker />
      <Button />
    </form>
  );
}

export default Registration;
