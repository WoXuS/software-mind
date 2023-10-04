import React from 'react';
import styles from './styles';

function Button({ disabled }: { disabled: boolean }) {
  return <button disabled={disabled}>Wyślij</button>;
}

export default Button;
