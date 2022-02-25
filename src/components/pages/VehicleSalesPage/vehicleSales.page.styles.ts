import styled from 'styled-components';

export const Container = styled.div`
  background: #eeeeee;

  min-height: 100vh;
  padding-top: 290px;

  overflow: hidden;

  @media (max-width: 980px) {
    margin-top: 56px;
  }

  @media (max-width: 575px) {
    padding-top: 204px;
  }
`;
