import styled from 'styled-components';

export const Container = styled.div`
  background: #d3e2e5;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 8px;
  width: 100%;

  div {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    border: 1px dashed #2a9d8f;
    color: #264653;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
