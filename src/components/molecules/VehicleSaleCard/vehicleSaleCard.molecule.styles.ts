import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #fff;

  position: relative;

  width: 100%;
`;

export const ContentContainer = styled.div`
  min-height: 100px;

  padding: 16px 24px;

  flex: 1;
  display: grid;
  row-gap: 4px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'vehicle vehicle deal-number'
    'customer-name price date';
`;

export const VehicleNameContainer = styled.div`
  grid-area: vehicle;

  display: flex;

  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.15px;
    color: #2a9d8f;
  }
`;

export const DealNumberContainer = styled.div`
  grid-area: deal-number;

  align-self: right;
  justify-content: flex-end;

  display: flex;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #4a4a4a;
  }
`;

export const CustomerNameContainer = styled.div`
  grid-area: customer-name;

  align-self: flex-end;

  display: flex;
  flex-direction: column;
`;

export const CustomerName = styled.strong`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #808285;
`;

export const DealerNameContainer = styled.strong`
  display: flex;
  align-items: baseline;
`;

export const DealerName = styled.strong`
  margin-right: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #00599a;
`;

export const PriceContainer = styled.div`
  grid-area: price;

  align-self: center;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #4a4a4a;
  }
`;

export const DateContainer = styled.div`
  grid-area: date;

  align-self: flex-end;
  justify-self: right;
  justify-content: right;

  display: flex;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #808285;
  }
`;
