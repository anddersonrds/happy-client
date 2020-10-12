import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Container, Header, Footer, Button } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy logo, rosto amarelo sorrindo" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Ceará</strong>
          <span>Fortaleza</span>
        </Footer>
      </aside>

      <Map
        center={[-3.7777093, -38.4744777]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Button to="#s">
        <FiPlus size={32} color="#FFF" />
      </Button>
    </Container>
  );
};

export default OrphanagesMap;
