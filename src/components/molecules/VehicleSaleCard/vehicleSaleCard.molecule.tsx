import IVehicleSale from '../../../interfaces/vehicleSale';

import {
  CardContainer,
  ContentContainer,
  VehicleNameContainer,
  DealNumberContainer,
  CustomerNameContainer,
  CustomerName,
  DealerNameContainer,
  DealerName,
  PriceContainer,
  DateContainer,
} from './vehicleSaleCard.molecule.styles';

type VehicleSaleCardProps = {
  vehicleSale: IVehicleSale;
};

export default function VehicleSaleCard({ vehicleSale }: VehicleSaleCardProps) {
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  return (
    <CardContainer>
      <ContentContainer>
        <VehicleNameContainer>
          <strong>{vehicleSale.vehicle}</strong>
        </VehicleNameContainer>

        <DealNumberContainer>
          <span>{`Deal Number: ${vehicleSale.dealNumber}`}</span>
        </DealNumberContainer>

        <CustomerNameContainer>
          <CustomerName>{vehicleSale.customerName}</CustomerName>

          <DealerNameContainer>
            <DealerName>{vehicleSale.dealershipName}</DealerName>
          </DealerNameContainer>
        </CustomerNameContainer>

        <PriceContainer>
          <strong>{`CAD${formatter.format(vehicleSale.price)}`}</strong>
        </PriceContainer>

        <DateContainer>
          <span>
            {Intl.DateTimeFormat('en-US').format(new Date(vehicleSale.date))}
          </span>
        </DateContainer>
      </ContentContainer>
    </CardContainer>
  );
}
