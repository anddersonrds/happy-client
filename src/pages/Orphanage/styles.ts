import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const OrphanageDetail = styled.div`
  overflow: hidden;
  width: 700px;
  margin: 64px auto;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  background: #ffffff;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const SelectImages = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  margin: 16px 40px 0;

  button {
    overflow: hidden;
    outline: none;
    height: 88px;
    opacity: 0.6;
    border: 0;
    border-radius: 20px;
    background: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 88px;
      object-fit: cover;
    }

    &.active {
      opacity: 1;
    }
  }
`;

export const DetailContent = styled.div`
  padding: 80px;

  h1 {
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
    color: #4d6f80;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    color: #4d6f80;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
    color: #5c8599;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    margin: 64px 0;
    background: #d3e2e6;
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  background: #e6f7fb;

  .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }

  footer {
    text-align: center;
    padding: 20px 0;

    a {
      line-height: 24px;
      text-decoration: none;
      color: #0089a5;
    }
  }
`;

export const DetailOpen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 24px;

  div {
    line-height: 28px;
    border-radius: 20px;
    padding: 32px 24px;

    svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`;

type BlockContainerProps = {
  type?: 'hour' | 'open' | 'dontOpen';
};

const blockContainerVariations = {
  hour: css`
    color: #15b6d6;
    border: 1px solid #b3dae2;
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);

    svg {
      color: #15b6d6;
    }
  `,
  open: css`
    color: #37c77f;
    border: 1px solid #a1e9c5;
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);

    svg {
      color: #39cc83;
    }
  `,
  dontOpen: css`
    color: #ff669d;
    border: 1px solid #ffbcd4;
    background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);

    svg {
      color: #ff669d;
    }
  `,
};

export const BlockContainer = styled.div<BlockContainerProps>`
  ${({ type }) => blockContainerVariations[type || 'hour']}
`;

export const WhatsappButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  font-weight: 800;
  border: 0;
  border-radius: 20px;
  margin-top: 64px;
  color: #ffffff;
  background: #3cdc8c;
  transition: background-color 0.2s;
  cursor: pointer;

  svg {
    margin-right: 16px;
  }

  &:hover {
    background: #36cf82;
  }
`;
