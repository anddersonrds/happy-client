import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input {
    width: 100%;
    height: 64px;
    padding: 0 16px;
    outline: none;
    color: #5c8599;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    background: #f5f8fa;
  }

  & + div {
    margin-top: 24px;
  }
`;
