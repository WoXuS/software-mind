import React from 'react';
import Dropdown from './../../components/dropdown/Dropdown';
import TextInput from './../../components/text-input/TextInput';
import DatePicker from './../../components/date-picker/DatePicker';
import Button from './../../components/button/Button';

function Registration() {
  return (
    <form>
      <Dropdown />
      <TextInput />
      <TextInput />
      <DatePicker />
      <Button />
    </form>
  );
}

export default Registration;
