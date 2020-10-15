import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  & + div {
    margin-top: 24px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    border-radius: 20px;
    border: 1px dashed #96d2f0;
    background: #f5f8fa;
    cursor: pointer;
  }
`;
