import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;

  top: 64px;
  left: auto;
  right: 0;

  z-index: 2;

  width: 100%;
  padding: 16px 0 16px 0;

  background: #f9f9f9;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
  border-radius: 0px;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (max-width: 600px) {
    top: 46px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 800px;
  margin: auto;

  background: #f9f9f9;

  @media (max-width: 1200px) {
    padding: 0 12px;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.15px;
  color: #4a4a4a;

  margin-bottom: 16px;
`;
