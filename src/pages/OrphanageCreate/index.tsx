import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import { LeafletMouseEvent } from 'leaflet';

import Siderbar from '../../components/Sidebar';
import InputBlock from '../../components/InputBlock';
import InputImages from '../../components/InputImages';
import TextareaBlock from '../../components/TextareaBlock';
import SelectButton from '../../components/SelectButton';
import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

import { Container, Form, ConfirmButton } from './styles';

const OrphanageCreate: React.FC = () => {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  };

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/app');
  };

  return (
    <Container>
      <Siderbar />
      <main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>
            <Map
              center={[-3.7910375, -38.5872972]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock label="Nome" value={name} handleChange={setName} />

            <TextareaBlock
              label="Sobre"
              value={about}
              maxLength={300}
              handleChange={setAbout}
            />

            <InputImages
              label="Fotos"
              value={previewImages}
              handleChange={handleSelectImages}
            />
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>
            <TextareaBlock
              label="Instruções"
              value={instructions}
              handleChange={setInstructions}
            />

            <InputBlock
              label="Horário de funcionamento"
              value={opening_hours}
              handleChange={setOpeningHours}
            />

            <SelectButton
              label="Atende fim de semana"
              value={open_on_weekends}
              handleChange={setOpenOnWeekends}
            />
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </Form>
      </main>
    </Container>
  );
};

export default OrphanageCreate;
