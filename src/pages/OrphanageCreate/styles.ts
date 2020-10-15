import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`;

export const Form = styled.form`
  overflow: hidden;
  width: 700px;
  padding: 64px 80px;
  margin: 64px auto;
  border-radius: 20px;
  border: 1px solid #d3e2e5;
  background: #ffffff;

  .leaflet-container {
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    margin-bottom: 40px;
  }

  fieldset {
    border: 0;

    legend {
      width: 100%;
      font-size: 32px;
      line-height: 34px;
      font-weight: 700;
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 1px solid #d3e2e5;
      color: #5c8599;
    }

    & + fieldset {
      margin-top: 80px;
    }
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  font-weight: 800;
  margin-top: 64px;
  border: 0;
  border-radius: 20px;
  color: #ffffff;
  background: #3cdc8c;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: #36cf82;
  }

  svg {
    margin-right: 16px;
  }
`;
