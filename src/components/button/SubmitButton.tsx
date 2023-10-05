import React from 'react';
import styles from './styles';

import { Button } from '@mui/material';

function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <Button
      color='primary'
      variant='contained'
      type='submit'
      fullWidth
      disabled={disabled}
      size='large'
    >
      Wyślij
    </Button>
  );
}

export default SubmitButton;
