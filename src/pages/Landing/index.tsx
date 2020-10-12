import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Container, Wrapper, Location, Button } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={LogoImg} alt="Logo harry, rosto amarelo sorrindo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Ceará</strong>
          <span>Fortaleza</span>
        </Location>

        <Button to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Landing;
