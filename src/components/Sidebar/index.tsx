import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Container, Button } from './styles';

const Siderbar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <Button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </Button>
      </footer>
    </Container>
  );
};

export default Siderbar;
