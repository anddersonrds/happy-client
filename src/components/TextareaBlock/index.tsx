import React from 'react';

import { Container } from './styles';

type TextareaBlockProps = {
  label: string;
  value: string;
  maxLength?: number;
  handleChange: (event: string) => void;
};

const TextareaBlock = ({
  label,
  value,
  maxLength,
  handleChange,
}: TextareaBlockProps) => (
  <Container>
    <label htmlFor={value}>
      {label} {maxLength && <span>{`Máximo de ${maxLength} caracteres`}</span>}
    </label>
    <textarea
      id={value}
      value={value}
      maxLength={maxLength}
      onChange={event => handleChange(event.target.value)}
    />
  </Container>
);

export default TextareaBlock;
