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

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;

    &.active {
      background: #edfff6;
      border: 1px solid #a1e9c5;
      color: #37c77f;
    }

    &:first-child {
      border-radius: 20px 0px 0px 20px;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }
  }
`;
