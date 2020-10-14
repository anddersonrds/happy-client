import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;

  .leaflet-container {
    z-index: 5;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 440px;
    padding: 80px;
    background: linear-gradient(329.54deg, #29b6d1 50%, #00c7c7 80%);
  }

  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
  .leaflet-popup-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;
    color: #0089a5;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    }
  }
`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: #15c3d6;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background: #17d6eb;
  }
`;
