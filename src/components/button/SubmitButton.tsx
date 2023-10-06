import React from 'react';
import styles from './styles';

import { Button, CircularProgress } from '@mui/material';

type ButtonProps = {
  loading: boolean;
  disabled: boolean;
};

function SubmitButton({ disabled, loading }: ButtonProps) {
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          sx={styles.button}
          variant='contained'
          type='submit'
          fullWidth
          disabled={disabled}
          size='large'
        >
          Wyślij
        </Button>
      )}
    </>
  );
}

export default SubmitButton;
