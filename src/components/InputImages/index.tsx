import React, { ChangeEvent } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container, ImagesContainer } from './styles';

type InputImageskProps = {
  label: string;
  value: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputImages = ({ label, value, handleChange }: InputImageskProps) => (
  <Container>
    <label htmlFor="images">{label}</label>
    <ImagesContainer>
      {value.map(image => (
        <img key={image} src={image} alt={label} />
      ))}

      <label htmlFor="image[]" className="new-image">
        <FiPlus size={24} color="#15b6d6" />
        <input multiple onChange={handleChange} type="file" id="image[]" />
      </label>
    </ImagesContainer>
  </Container>
);

export default InputImages;
