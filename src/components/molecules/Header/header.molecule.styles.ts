import styled from 'styled-components';

export const Container = styled.div`
  background: #0585c8;
  padding: 0 30px;
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  width: 100%;

  z-index: 3;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
`;
