import { useEffect, useState } from 'react';

import api from '../../../services/api';

import IVehicleSale from '../../../interfaces/vehicleSale';
import IVehicleSalesResponse from '../../../interfaces/vehicleSalesResponse';

import VehicleSalesHeader from '../../molecules/VehicleSalesHeader/vehicleSalesHeader.molecule';
import VehicleSalesList from '../../organisms/VehicleSalesList/vehicleSalesList.organism';

import { Container } from './vehicleSales.page.styles';

export function VehicleSales() {
  const [loading, setLoading] = useState(true);
  const [vehicleSales, setVehicleSales] = useState<IVehicleSale[]>([]);

  async function onFileUpload(file: any) {
    setLoading(true);

    const formData = new FormData();
    formData.append('File', file);

    const response = await api.post('/VehicleSales/Import', formData);

    if (response.status === 201) {
      loadVehicleSales();
    } else {
      setLoading(false);
    }
  }

  async function handleDeleteAll() {
    if (vehicleSales.length <= 0) return;

    setLoading(true);

    const response = await api.delete('/VehicleSales/DeleteAll');

    if (response.status === 204) {
      loadVehicleSales();
    } else {
      setLoading(false);
    }
  }

  async function loadVehicleSales() {
    const response = await api.get<IVehicleSalesResponse>('/VehicleSales');
    setVehicleSales(response.data.vehicleSales);
    setLoading(false);
  }

  useEffect(() => {
    loadVehicleSales();
  }, []);

  return (
    <Container>
      <VehicleSalesHeader onFileUpload={onFileUpload} />
      <VehicleSalesList
        loading={loading}
        vehicleSales={vehicleSales}
        handleDeleteAll={handleDeleteAll}
      />
    </Container>
  );
}
