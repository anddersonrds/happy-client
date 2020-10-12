import styled from 'styled-components';
import { Link } from 'react-router-dom';

import imgBackground from '../../assets/landing.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 50%, #00c7c7 80%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  background: url(${imgBackground}) no-repeat 75% center;

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  line-height: 34px;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;
  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }
`;
