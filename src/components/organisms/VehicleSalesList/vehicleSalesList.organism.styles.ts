import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: auto;

  > div + div {
    margin-top: 16px;
  }

  > div:last-of-type {
    margin-bottom: 16px;
  }

  @media (max-width: 1200px) {
    padding: 0 12px;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const SoldMost = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
`;

export const DeleteButton = styled.button`
  height: 24px;
  padding: 0 16px;

  border: 0;
  border-radius: 4px;

  background: #0585c8;
  color: #fff;
  font-weight: bold;

  transition: 0.4s;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

export const LineSeparator = styled.hr`
  width: 100%;
  height: 1px;

  margin-bottom: 12px;

  background: #e1e1e2;
  opacity: 0.3;
`;
