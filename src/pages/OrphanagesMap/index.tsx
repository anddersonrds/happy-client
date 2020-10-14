import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Container, Header, Footer, Button } from './styles';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface OrphanageProps {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

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
        center={[-3.7733133, -38.5585407]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(({ id, name, latitude, longitude }) => (
          <Marker key={id} icon={mapIcon} position={[latitude, longitude]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {name}
              <Link to={`/orphanages/${id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Button to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </Button>
    </Container>
  );
};

export default OrphanagesMap;
