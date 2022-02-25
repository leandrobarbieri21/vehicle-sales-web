import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import Loader from '../../atoms/loader.atom';
import ISoldMostOftenResponse from '../../../interfaces/soldMostOftenResponse';

import IVehicleSale from '../../../interfaces/vehicleSale';
import VehicleSaleCard from '../../molecules/VehicleSaleCard/vehicleSaleCard.molecule';

import {
  Container,
  InfoContainer,
  SoldMost,
  DeleteButton,
  LineSeparator,
} from './vehicleSalesList.organism.styles';

type VehicleSalesListProps = {
  loading: boolean;
  vehicleSales: IVehicleSale[];
  handleDeleteAll: React.MouseEventHandler<HTMLButtonElement>;
};

export default function VehicleSalesList({
  loading,
  vehicleSales,
  handleDeleteAll,
}: VehicleSalesListProps) {
  const [soldMost, setSoldMost] = useState('');

  async function loadSoldMost() {
    const response = await api.get<ISoldMostOftenResponse>(
      '/VehicleSales/SoldMostOften'
    );
    setSoldMost(response.data.vehicle);
  }

  useEffect(() => {
    loadSoldMost();
  }, [vehicleSales.length]);

  const list = () =>
    vehicleSales.length > 0 ? (
      vehicleSales.map((vehicleSale) => (
        <VehicleSaleCard key={vehicleSale.id} vehicleSale={vehicleSale} />
      ))
    ) : (
      <strong>No vehicle sales found</strong>
    );

  return (
    <Container>
      <InfoContainer>
        <SoldMost>{soldMost && `Sold most often: ${soldMost}`}</SoldMost>
        <DeleteButton type="button" onClick={handleDeleteAll}>
          Delete All
        </DeleteButton>
      </InfoContainer>

      <LineSeparator />

      {loading ? (
        <>
          <Loader />
          <Loader />
        </>
      ) : (
        list()
      )}
    </Container>
  );
}
