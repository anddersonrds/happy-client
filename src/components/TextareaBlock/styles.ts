import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    line-height: 24px;
    margin-bottom: 8px;
    color: #8fa7b3;

    span {
      font-size: 14px;
      line-height: 24px;
      margin-left: 24px;
      color: #8fa7b3;
    }
  }

  textarea {
    width: 100%;
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    outline: none;
    line-height: 28px;
    padding: 16px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    background: #f5f8fa;
    color: #5c8599;
  }

  & + div {
    margin-top: 24px;
  }
`;
