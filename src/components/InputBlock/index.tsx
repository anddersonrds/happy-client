import React from 'react';

import { Container } from './styles';

type InputBlockProps = {
  label: string;
  value: string;
  handleChange: (event: string) => void;
};

const InputBlock = ({ label, value, handleChange }: InputBlockProps) => (
  <Container>
    <label htmlFor={value}>{label}</label>
    <input
      id={value}
      value={value}
      onChange={event => handleChange(event.target.value)}
    />
  </Container>
);

export default InputBlock;
