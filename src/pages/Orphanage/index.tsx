import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Siderbar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import {
  Container,
  OrphanageDetail,
  SelectImages,
  DetailContent,
  MapContainer,
  DetailOpen,
  BlockContainer,
  WhatsappButton,
} from './styles';

type ParamsProps = {
  id: string;
};

type OrphanageProps = {
  name: string;
  about: string;
  latitude: number;
  longitude: number;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
};

const Orphanage: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const [orphanage, setOrphanage] = useState<OrphanageProps>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Siderbar />
      <main>
        <OrphanageDetail>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <SelectImages>
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={activeImageIndex === index ? 'active' : ''}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </SelectImages>

          <DetailContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>
            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />
            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <DetailOpen>
              <BlockContainer>
                <FiClock size={32} />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </BlockContainer>

              {orphanage.open_on_weekends ? (
                <BlockContainer type="open">
                  <FiInfo size={32} />
                  Atendemos <br />
                  fim de semana
                </BlockContainer>
              ) : (
                <BlockContainer type="dontOpen">
                  <FiInfo size={32} />
                  Não atendemos <br />
                  fim de semana
                </BlockContainer>
              )}
            </DetailOpen>

            <WhatsappButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </WhatsappButton>
          </DetailContent>
        </OrphanageDetail>
      </main>
    </Container>
  );
};

export default Orphanage;
