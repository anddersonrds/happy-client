import React from 'react';

import { Container, SelectContainer } from './styles';

type SelectButtonProps = {
  label: string;
  value: boolean;
  handleChange: (codition: boolean) => void;
};

const SelectButton = ({ label, value, handleChange }: SelectButtonProps) => (
  <Container>
    <label htmlFor={String(value)}>{label}</label>
    <SelectContainer>
      <button
        type="button"
        className={value ? 'active' : ''}
        onClick={() => handleChange(true)}
      >
        Sim
      </button>
      <button
        type="button"
        className={!value ? 'active' : ''}
        onClick={() => handleChange(false)}
      >
        Não
      </button>
    </SelectContainer>
  </Container>
);

export default SelectButton;
